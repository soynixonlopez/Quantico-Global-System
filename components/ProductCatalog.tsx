import Image from "next/image";

const products = [
  {
    name: "Cámara Bullet 4K",
    category: "Exterior",
    description: "Resolución 4K, IR hasta 30m, resistente IP67.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80",
    price: "Consultar",
  },
  {
    name: "Cámara Domo PTZ",
    category: "Profesional",
    description: "Zoom óptico 25x, seguimiento inteligente, visión nocturna.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
    price: "Consultar",
  },
  {
    name: "NVR 16 canales",
    category: "Grabación",
    description: "16 canales, H.265+, hasta 8TB, detección de movimiento.",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d11fc63ef?w=500&q=80",
    price: "Consultar",
  },
  {
    name: "Cámara Wi-Fi Interior",
    category: "Hogar / Oficina",
    description: "2MP, audio bidireccional, instalación sin cables.",
    image: "https://images.unsplash.com/photo-1558002038-10559092a5d1?w=500&q=80",
    price: "Consultar",
  },
  {
    name: "Cámara Turret",
    category: "Exterior",
    description: "Starlight, anti-vandalismo, ángulo ajustable.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80",
    price: "Consultar",
  },
  {
    name: "Kit completo 4 cámaras",
    category: "Paquete",
    description: "4 cámaras + NVR + cables. Solución lista para instalar.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80",
    price: "Consultar",
  },
];

export function ProductCatalog() {
  return (
    <section id="productos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2">
            Catálogo de productos
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 text-base sm:text-lg px-2">
            Cámaras, NVR, accesorios y kits. Encuentra la solución ideal para tu proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/30 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="relative h-44 sm:h-48 md:h-52 aspect-video sm:aspect-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary-600/90 text-white text-xs font-medium px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-white font-semibold text-base sm:text-lg">{product.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-primary-400 font-medium text-sm sm:text-base">{product.price}</span>
                  <a
                    href="https://wa.me/50760707201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-400 hover:text-primary-300 font-medium py-1 -mr-1"
                  >
                    Cotizar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center px-2">
          <a
            href="https://wa.me/50760707201?text=Hola%2C%20quiero%20ver%20el%20catálogo%20completo%20y%20cotizar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 active:scale-[0.98] text-white px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto max-w-xs sm:max-w-none min-h-[48px]"
          >
            Solicitar catálogo completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
