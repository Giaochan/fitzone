import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section>
      {/* --- Hero para Móviles --- */}
      <div className="relative h-[70vh] flex items-center justify-center text-center md:hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-battle-ropes-new.jpg"
            alt="Entrenamiento intenso en FitZone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-orange-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
            </span>
            Únete a FitZone
          </div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
            Transforma tu cuerpo en <span className="text-orange-400">FitZone</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-sm mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
            Alcanza tus metas con entrenadores expertos y un ambiente que te motiva a superarte.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-orange-400 text-gray-950 font-bold hover:bg-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
              ¡Obtén tu clase gratis!
            </Button>
          </div>
        </div>
      </div>

      {/* --- Hero para Escritorio --- */}
      <div className="hidden md:block relative h-[80vh] min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/hero-battle-ropes.jpg"
            alt="Hombre y mujer entrenando con cuerdas de batalla en FitZone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/60 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-6 flex flex-col items-center justify-center h-full text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-orange-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
              </span>
              Únete a FitZone
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter lg:text-7xl text-white [text-shadow:0_3px_5px_rgba(0,0,0,0.6)]">
              Transforma tu cuerpo en <span className="text-orange-400">FitZone</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
              Alcanza tus metas de fitness con nuestros entrenadores expertos, equipos de última generación y un ambiente que te motiva a superarte.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-orange-400 text-gray-950 font-bold hover:bg-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4">
                ¡Obtén tu clase gratis!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
