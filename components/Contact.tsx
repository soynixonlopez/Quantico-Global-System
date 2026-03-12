"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-5">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
              Contáctanos
            </h2>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg px-2">
              Escríbenos por correo o WhatsApp y te respondemos a la brevedad.
            </p>
          </Reveal>

          <Reveal className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-10" delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div>
                <h3 className="text-foreground font-semibold mb-2 text-sm sm:text-base">Correo</h3>
                <a
                  href="mailto:ventas@quanticoglobalsystems.com"
                  className="text-primary hover:opacity-80 text-sm sm:text-base break-all"
                >
                  ventas@quanticoglobalsystems.com
                </a>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2 text-sm sm:text-base">WhatsApp</h3>
                <a
                  href="https://wa.me/50760707201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-80 inline-flex items-center gap-2 text-sm sm:text-base break-all"
                >
                  +507 6070-7201
                  <span className="text-[#25D366] text-sm">WhatsApp</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base min-h-[48px]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base min-h-[48px]"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-base min-h-[120px]"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>
              {sent ? (
                <p className="text-accent font-medium text-sm sm:text-base">
                  Gracias. Te contactaremos pronto. También puedes escribirnos por WhatsApp al 6070-7201.
                </p>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors min-h-[48px]"
                >
                  Enviar mensaje
                </button>
              )}
            </form>

            <p className="mt-4 sm:mt-6 text-muted-foreground text-xs sm:text-sm">
              Para cotizaciones rápidas, escríbenos directamente por{" "}
              <a href="https://wa.me/50760707201" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                WhatsApp
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
