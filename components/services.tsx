import Image from 'next/image';

const services = [
  {
    title: "Zona de Pesas Completa",
    description: "Equipamiento de vanguardia para que lleves tu entrenamiento de fuerza al siguiente nivel, con todo lo necesario para trabajar cada músculo.",
    image: "/weight-zone.jpg",
  },
  {
    title: "Entrenadores Personales",
    description: "Nuestros coaches certificados diseñarán un plan a tu medida para que alcances tus objetivos de forma segura y eficiente.",
    image: "/personal-trainer-client.png",
  },
  {
    title: "Clases Grupales Dinámicas",
    description: "Desde Yoga hasta HIIT, encuentra la clase perfecta para ti y entrena con la mejor energía en un ambiente motivador y divertido.",
    image: "/group-fitness-class.png",
  },
  {
    title: "Área de Cardio de Última Generación",
    description: "Cintas, elípticas y bicicletas de última generación con conectividad para que tus sesiones de cardio sean más entretenidas y efectivas.",
    image: "/cardio-area.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Beneficios</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400">
            Todo lo que necesitas para una experiencia de fitness inigualable.
          </p>
        </div>
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
              <div className={`relative h-80 rounded-2xl overflow-hidden shadow-lg shadow-black/30 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-300 md:text-lg">{service.description}</p>
                <div className="mt-6">
                  <span className="inline-block h-1 w-20 bg-orange-400 rounded"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
