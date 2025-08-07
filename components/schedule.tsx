"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const classTypeStyles = {
  Fuerza: {
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    color: "bg-red-400",
  },
  Cardio: {
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    color: "bg-sky-400",
  },
  Flexibilidad: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    color: "bg-purple-400",
  },
  Baile: {
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    color: "bg-pink-400",
  },
};

type ClassInfo = {
  name: string;
  type: keyof typeof classTypeStyles;
  time: string;
};

const schedule: Record<string, ClassInfo[]> = {
  Lunes: [
    { time: "08:00 AM", name: "Yoga Flow", type: "Flexibilidad" },
    { time: "10:00 AM", name: "Spinning", type: "Cardio" },
    { time: "05:00 PM", name: "CrossFit", type: "Fuerza" },
    { time: "07:00 PM", name: "HIIT", type: "Cardio" },
  ],
  Martes: [
    { time: "08:00 AM", name: "HIIT", type: "Cardio" },
    { time: "10:00 AM", name: "Boxeo", type: "Cardio" },
    { time: "05:00 PM", name: "Pilates", type: "Flexibilidad" },
    { time: "07:00 PM", name: "Zumba", type: "Baile" },
  ],
  Miércoles: [
    { time: "08:00 AM", name: "Yoga Flow", type: "Flexibilidad" },
    { time: "10:00 AM", name: "Spinning", type: "Cardio" },
    { time: "05:00 PM", name: "CrossFit", type: "Fuerza" },
    { time: "07:00 PM", name: "HIIT", type: "Cardio" },
  ],
  Jueves: [
    { time: "08:00 AM", name: "HIIT", type: "Cardio" },
    { time: "10:00 AM", name: "Boxeo", type: "Cardio" },
    { time: "05:00 PM", name: "Pilates", type: "Flexibilidad" },
    { time: "07:00 PM", name: "Zumba", type: "Baile" },
  ],
  Viernes: [
    { time: "08:00 AM", name: "Yoga Flow", type: "Flexibilidad" },
    { time: "10:00 AM", name: "Spinning", type: "Cardio" },
    { time: "05:00 PM", name: "CrossFit", type: "Fuerza" },
    { time: "07:00 PM", name: "HIIT", type: "Cardio" },
  ],
  Sábado: [
    { time: "09:00 AM", name: "Full Body", type: "Fuerza" },
    { time: "11:00 AM", name: "Zumba", type: "Baile" },
    { time: "01:00 PM", name: "Yoga Relax", type: "Flexibilidad" },
  ],
};

const ClassInfoCard = ({ classInfo }: { classInfo: ClassInfo }) => {
  const { name, type, time } = classInfo;
  return (
    <div className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-orange-400/20 via-amber-400/10 to-transparent transition-colors hover:from-orange-400/35 hover:via-amber-400/20">
      <div className="flex items-center gap-4 rounded-2xl bg-gray-900/90 p-4 border border-gray-800/70 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-gray-900">
        <div className={cn("w-1.5 h-10 rounded-full", classTypeStyles[type].color)} />
        <div className="flex-1">
          <p className="text-white font-semibold text-base sm:text-lg">{name}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-300 ring-1 ring-gray-700">{time}</span>
          </div>
        </div>
        <Badge variant="outline" className={cn("text-xs", classTypeStyles[type].badge)}>
          {type}
        </Badge>
      </div>
    </div>
  );
};

export default function Schedule() {
  const days = Object.keys(schedule);

  return (
    <section id="schedule" className="py-14 md:py-20 bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Horario de Clases</h2>
          <p className="mt-2 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base">
            Elige un día para ver las sesiones disponibles.
          </p>
        </div>

        <Tabs defaultValue={days[0]} className="w-full">
          <TabsList className="w-full max-w-full flex flex-wrap items-center justify-center gap-1 bg-gray-900/50 border border-gray-800 rounded-lg p-1.5">
            {days.map((day) => (
              <TabsTrigger
                key={day}
                value={day}
                className="flex-1 min-w-0 px-2 py-1.5 text-xs sm:text-sm font-medium text-gray-300 rounded-md data-[state=active]:bg-orange-400 data-[state=active]:text-gray-950"
              >
                {day}
              </TabsTrigger>
            ))}
          </TabsList>

          {days.map((day) => (
            <TabsContent key={day} value={day} className="mt-6">
              <div className="space-y-3">
                {schedule[day as keyof typeof schedule].map((classInfo, index) => (
                  <ClassInfoCard key={index} classInfo={classInfo} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
