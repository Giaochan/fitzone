"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, User, ShieldCheck, Sparkles } from 'lucide-react';

export default function Cta() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Por favor, completa ambos campos.",
        variant: "destructive",
      });
      return;
    }
    // Lógica de envío del formulario (simulada)
    console.log({ name, email });
    toast({
      title: "¡Éxito!",
      description: "Gracias por registrarte. Te contactaremos pronto.",
      className: "bg-orange-500 text-white",
    });
    setName('');
    setEmail('');
  };

  return (
    <section id="cta" className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-300">
            <Sparkles className="h-3.5 w-3.5" />
            Clase de prueba
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Consigue tu primera clase <span className="text-orange-400">gratis</span>
          </h2>

          <p className="mt-2 text-base text-gray-400 sm:text-lg">
            Déjanos tus datos y te contactamos para agendar tu sesión de bienvenida.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
            <div className="relative">
              <Label htmlFor="name" className="sr-only">Nombre</Label>
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="bg-gray-800 border-gray-700 text-white pl-10 focus:ring-orange-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Nombre"
              />
            </div>

            <div className="relative">
              <Label htmlFor="email" className="sr-only">Correo electrónico</Label>
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 border-gray-700 text-white pl-10 focus:ring-orange-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Correo electrónico"
              />
            </div>

            <Button
              type="submit"
              className="h-11 w-full sm:w-auto bg-orange-400 text-gray-950 font-bold hover:bg-orange-500"
            >
              Registrarme
            </Button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="h-4 w-4 text-orange-400" />
            <span>{"Sin spam. Cancelas cuando quieras. Respuesta en menos de 24h."}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
