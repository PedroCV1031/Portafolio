import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pedro Correa Valdes - Portafolio",
  description: "Portfolio profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              <img 
                src="https://media.tenor.com/1cUMUU2xtgcAAAAj/padoru.gif" 
                alt="Logo animado" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  marginRight: '1rem',
                  borderRadius: '8px'
                }} 
              />
              Portafolio - Pedro Correa Valdes
            </Link>
            <ul className="nav-menu">
              <li><Link href="/">Perfil</Link></li>
              <li><Link href="/proyectos">Proyectos</Link></li>
              <li><Link href="/hobbies">Hobbies</Link></li>
              <li><Link href="/contactos">Contacto</Link></li>
            </ul>
          </div>
        </nav>
        <main className="main-content">{children}</main>
        <footer className="footer">
          <p>&copy; 2025 Portafolio - Pedro Correa Valdes. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
