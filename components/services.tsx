import Image from 'next/image';

const services = [
  {
    title: "Zona de Pesas Completa",
    description: "Equipamiento de vanguardia para que lleves tu entrenamiento de fuerza al siguiente nivel.",
    image: "/weight-zone.jpg",
    isNew: true, // Add this line
  },
  {
    title: "Entrenadores Personales",
    description: "Nuestros coaches certificados diseñarán un plan a tu medida para que alcances tus objetivos.",
    image: "/personal-trainer-session.jpg",
  },
  {
    title: "Clases Grupales Dinámicas",
    description: "Desde Yoga hasta HIIT, encuentra la clase perfecta para ti y entrena con la mejor energía.",
    image: "/group-fitness-dynamic.jpg",
  },
  {
    title: "Área de Cardio",
    description: "Cintas, elípticas y bicicletas de última generación para tus sesiones de cardio.",
    image: "/cardio-area.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-950 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Nuestros Beneficios
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400">
            Todo lo que necesitas para una experiencia de fitness inigualable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/10"
            >
              <div className="relative h-52 overflow-hidden rounded-t-xl">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  {service.isNew && (
                    <span className="inline-flex items-center rounded-md bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-300 ring-1 ring-inset ring-orange-400/20">
                      Nuevo
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
