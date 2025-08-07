import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: "Ana García",
    avatar: "AG",
    image: "/diverse-woman-smiling.png",
    quote: "¡FitZone cambió mi vida! Los entrenadores son increíbles y el ambiente es súper motivador. He logrado resultados que nunca pensé posibles.",
  },
  {
    name: "Carlos Vera",
    avatar: "CV",
    image: "/smiling-man.png",
    quote: "Las instalaciones son de primera. Siempre está limpio y el equipo es moderno. Las clases de CrossFit son intensas y muy divertidas.",
  },
  {
    name: "Sofía Rodriguez",
    avatar: "SR",
    image: "/young-woman-portrait.png",
    quote: "Me encanta la variedad de clases. Puedo hacer yoga un día y boxeo al siguiente. Es el lugar perfecto para no aburrirte de tu rutina.",
  },
  {
    name: "David Martinez",
    avatar: "DM",
    image: "/smiling-man-portrait.png",
    quote: "El ambiente es genial, todo el mundo te apoya. He hecho grandes amigos aquí además de ponerme en forma. Lo recomiendo 100%.",
  },
  {
    name: "Laura Jimenez",
    avatar: "LJ",
    image: "/smiling-woman-portrait.png",
    quote: "La app para reservar clases es súper fácil de usar. Nunca tengo problemas para encontrar un hueco. ¡Un 10 en organización!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Lo que dicen nuestros miembros</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400">
            Historias reales de personas que han transformado sus vidas con nosotros.
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-gray-800/50 border-gray-700 text-white h-full flex flex-col justify-between">
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <Quote className="h-8 w-8 text-orange-400 mb-4 flex-shrink-0" />
                        <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                          {testimonial.quote}
                        </p>
                      </CardContent>
                      <div className="bg-gray-800 p-4 flex items-center gap-4 border-t border-gray-700 flex-shrink-0">
                        <Avatar className="h-12 w-12 border-2 border-orange-400/80">
                          <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex bg-gray-800 hover:bg-gray-700 text-white border-gray-600" />
            <CarouselNext className="hidden sm:flex bg-gray-800 hover:bg-gray-700 text-white border-gray-600" />
          </Carousel>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none sm:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
