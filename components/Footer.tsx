import Link from "next/link";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900/95 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#inicio" className="inline-block">
              <span className="text-lg sm:text-xl font-bold text-primary-400">Quantico</span>
              <span className="text-slate-400 text-xs sm:text-sm font-medium ml-1">System Global</span>
            </Link>
            <p className="mt-3 sm:mt-4 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Distribuidor oficial de cámaras de seguridad y soluciones de vigilancia en Panamá. Tecnología de punta para tu negocio y hogar.
            </p>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">Enlaces</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary-400 text-xs sm:text-sm transition-colors py-1 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">Marcas</h3>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-slate-400 text-xs sm:text-sm">
              <li>Tiandy</li>
              <li>Vias</li>
              <li>Garrett</li>
              <li>Global Radio System</li>
              <li>Quantico</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">Contacto</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-slate-400 text-xs sm:text-sm">
              <li>
                <a href="mailto:ventas@quanticoglobalsystems.com" className="hover:text-primary-400 transition-colors break-all" target="_blank" rel="noopener noreferrer">
                  ventas@quanticoglobalsystems.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50760707201" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors inline-flex items-center gap-2 flex-wrap">
                  <span>+507 6070-7201</span>
                  <span className="text-[#25D366]">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-xs sm:text-sm order-2 sm:order-1">
            © {new Date().getFullYear()} Quantico System Global. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm order-1 sm:order-2">
            <a href="mailto:ventas@quanticoglobalsystems.com" className="hover:text-primary-400 transition-colors">
              Política de privacidad
            </a>
            <a href="#contacto" className="hover:text-primary-400 transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
