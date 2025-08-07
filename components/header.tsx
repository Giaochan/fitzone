"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
Sheet,
SheetContent,
SheetTrigger,
} from "@/components/ui/sheet";
import { Dumbbell, Menu } from 'lucide-react';

const navLinks = [
{ href: "#", label: "Inicio" },
{ href: "#services", label: "Servicios" },
{ href: "#schedule", label: "Horarios" },
{ href: "#testimonials", label: "Testimonios" },
];

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
<header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
  <Link href="#" className="flex items-center gap-2">
    <Dumbbell className="h-6 w-6 text-orange-400" />
    <span className="text-xl font-bold tracking-tight">FitZone</span>
  </Link>
  <nav className="hidden md:flex items-center gap-6">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
      >
        {link.label}
      </Link>
    ))}
  </nav>
  <div className="hidden md:block">
    <Button className="bg-orange-400 text-gray-950 font-bold hover:bg-orange-500">
      ¡Únete Ahora!
    </Button>
  </div>
  <div className="md:hidden">
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-gray-950 border-l-gray-800 text-white flex h-full flex-col p-6"
      >
        <Link
          href="#"
          className="flex items-center gap-2 mb-8"
          onClick={() => setIsMenuOpen(false)}
        >
          <Dumbbell className="h-6 w-6 text-orange-400" />
          <span className="text-xl font-bold tracking-tight">
            FitZone
          </span>
        </Link>
        <div className="flex-grow">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-300 transition-colors hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button className="w-full bg-orange-400 text-gray-950 font-bold hover:bg-orange-500">
          ¡Únete Ahora!
        </Button>
      </SheetContent>
    </Sheet>
  </div>
</div>
</header>
);
}
