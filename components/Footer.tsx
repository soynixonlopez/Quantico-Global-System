"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Modal } from "./Modal";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

const privacyContent = (
  <div className="space-y-4">
    <p>
      <strong className="text-foreground">Quantico System Global</strong> se compromete a proteger la privacidad de los visitantes de este sitio web y de quienes nos contactan.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Información que recopilamos</h3>
    <p>
      Podemos recopilar datos de contacto (nombre, correo electrónico, teléfono) cuando usted nos escribe a través del formulario, WhatsApp o correo electrónico. Esta información se utiliza únicamente para responder sus consultas y ofrecer nuestros servicios.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Uso de la información</h3>
    <p>
      La información proporcionada no se comparte con terceros para fines de marketing. Solo la utilizamos para comunicarnos con usted en relación a productos, cotizaciones y soporte técnico.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Cookies y tecnología</h3>
    <p>
      Este sitio puede utilizar cookies para mejorar la experiencia de navegación. Puede configurar su navegador para limitar o bloquear cookies según su preferencia.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Contacto</h3>
    <p>
      Para consultas sobre esta política: <a href="mailto:ventas@quanticoglobalsystems.com" className="text-primary hover:underline">ventas@quanticoglobalsystems.com</a>.
    </p>
    <p className="text-xs mt-6 text-muted-foreground/80">
      Última actualización: {new Date().toLocaleDateString("es-PA", { year: "numeric", month: "long", day: "numeric" })}.
    </p>
  </div>
);

const termsContent = (
  <div className="space-y-4">
    <p>
      Al utilizar el sitio web de <strong className="text-foreground">Quantico System Global</strong>, usted acepta los siguientes términos de uso.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Uso del sitio</h3>
    <p>
      Este sitio está destinado a informar sobre nuestros productos y servicios de cámaras de seguridad y soluciones de vigilancia. No debe utilizarse para fines ilegales ni para enviar información falsa o engañosa.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Propiedad intelectual</h3>
    <p>
      Los contenidos, logotipos, imágenes y textos de este sitio son propiedad de Quantico System Global o de sus proveedores y están protegidos por las leyes de propiedad intelectual. No está permitida su reproducción sin autorización.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Productos y precios</h3>
    <p>
      Las ofertas y precios mostrados son orientativos y pueden variar. Las condiciones definitivas se establecen al formalizar la cotización o compra con nuestro equipo de ventas.
    </p>
    <h3 className="text-foreground font-semibold mt-4">Contacto</h3>
    <p>
      Para cualquier duda sobre estos términos: <a href="mailto:ventas@quanticoglobalsystems.com" className="text-primary hover:underline">ventas@quanticoglobalsystems.com</a> o WhatsApp +507 6070-7201.
    </p>
    <p className="text-xs mt-6 text-muted-foreground/80">
      Última actualización: {new Date().toLocaleDateString("es-PA", { year: "numeric", month: "long", day: "numeric" })}.
    </p>
  </div>
);

export function Footer() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo
                className="h-9 w-auto sm:h-10 object-contain object-left"
                width={160}
                height={50}
              />
              <p className="mt-3 sm:mt-4 text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">
                Distribuidor oficial de cámaras de seguridad y soluciones de vigilancia en Panamá. Tecnología de punta para tu negocio y hogar.
              </p>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">Enlaces</h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-xs sm:text-sm transition-colors py-1 block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">Marcas</h3>
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                <li>Tiandy</li>
                <li>Vias</li>
                <li>Garrett</li>
                <li>Global Radio System</li>
                <li>Quantico</li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">Contacto</h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-muted-foreground text-xs sm:text-sm">
                <li>
                  <a href="mailto:ventas@quanticoglobalsystems.com" className="hover:text-primary transition-colors break-all" target="_blank" rel="noopener noreferrer">
                    ventas@quanticoglobalsystems.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/50760707201" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2 flex-wrap">
                    <span>+507 6070-7201</span>
                    <span className="text-[#25D366]">WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-muted-foreground text-xs sm:text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} Quantico System Global. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-muted-foreground text-xs sm:text-sm order-1 sm:order-2">
              <button
                type="button"
                onClick={() => setModal("privacy")}
                className="hover:text-primary transition-colors"
              >
                Política de privacidad
              </button>
              <button
                type="button"
                onClick={() => setModal("terms")}
                className="hover:text-primary transition-colors"
              >
                Términos de uso
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        open={modal === "privacy"}
        onClose={() => setModal(null)}
        title="Política de privacidad"
      >
        {privacyContent}
      </Modal>

      <Modal
        open={modal === "terms"}
        onClose={() => setModal(null)}
        title="Términos de uso"
      >
        {termsContent}
      </Modal>
    </>
  );
}
