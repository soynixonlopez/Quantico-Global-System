import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestStore = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = requestStore.get(ip);

  if (!current || current.resetAt <= now) {
    requestStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactPayload;
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();
    const website = (body.website ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }

    // Honeypot: bots suelen completar campos ocultos.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "El correo no es válido." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 150 || message.length > 3000) {
      return NextResponse.json(
        { error: "El mensaje excede el tamaño permitido." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";
    const to = process.env.CONTACT_TO_EMAIL ?? "ventas@quanticoglobalsystems.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? user;

    if (!host || !port || !user || !pass || !from || pass === "TU_PASSWORD_DEL_CORREO") {
      return NextResponse.json(
        { error: "Configuración de correo incompleta en el servidor." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        minVersion: "TLSv1.2",
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"Web Quantico" <${from}>`,
      to,
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Correo:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("POST /api/contact failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
