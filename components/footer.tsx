import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="flex flex-col items-start md:col-span-5">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-orange-400" />
              <span className="text-xl font-bold tracking-tight">FitZone</span>
            </a>
            <p className="text-gray-400 text-sm">
              El mejor lugar para transformar tu cuerpo y mente.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Av. Siempre Viva 123, Springfield</li>
              <li>contacto@fitzone.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          <div className="md:col-span-3 md:justify-self-end">
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex items-center gap-4 justify-start md:justify-end">
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} FitZone. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
