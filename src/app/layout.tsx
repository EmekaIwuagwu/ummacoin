import type { Metadata } from "next";
import { Playfair_Display, Outfit, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ummah Coin ($ISLAM) | Unite the Ummah | Transform Lives",
  description: "The world's first Shariah-compliant cryptocurrency dedicated to supporting Hajj pilgrimage for every Muslim. A transparent digital endowment for the global Ummah.",
  keywords: ["Ummah Coin", "ISLAM token", "Hajj aid", "Islamic cryptocurrency", "Shariah compliant", "Halal crypto", "Muslim community", "Hajj sponsorship", "Digital Waqf"],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${amiri.variable}`}>
      <body className="font-body">
        {/* 3D Islamic Pattern Background Layers */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Primary 3D Islamic Star Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'url(/islamic-pattern-1.png)',
              backgroundSize: '400px 400px',
              backgroundRepeat: 'repeat',
              animation: 'pattern-drift 60s linear infinite',
            }}
          />

          {/* Secondary 3D Arabesque Pattern with Parallax */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'url(/islamic-pattern-2.png)',
              backgroundSize: '500px 500px',
              backgroundRepeat: 'repeat',
              animation: 'pattern-drift-reverse 80s linear infinite',
            }}
          />
        </div>

        {/* Aurora Background Effect */}
        <div className="aurora" />

        {/* Floating Particles with Golden Glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0
                  ? 'radial-gradient(circle, rgba(180, 83, 9, 0.6), transparent)'
                  : i % 3 === 1
                    ? 'radial-gradient(circle, rgba(6, 78, 59, 0.4), transparent)'
                    : 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
                boxShadow: i % 2 === 0
                  ? '0 0 20px rgba(180, 83, 9, 0.5)'
                  : '0 0 15px rgba(16, 185, 129, 0.4)',
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 15 + 20}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Geometric Islamic Shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
          {/* Large Golden Star */}
          <div
            className="absolute w-[500px] h-[500px]"
            style={{
              top: '5%',
              right: '8%',
              background: 'radial-gradient(circle, rgba(180, 83, 9, 0.2) 0%, transparent 70%)',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animation: 'float 25s ease-in-out infinite, rotate-slow 60s linear infinite',
              filter: 'blur(2px)',
            }}
          />

          {/* Emerald Octagon */}
          <div
            className="absolute w-[400px] h-[400px]"
            style={{
              bottom: '10%',
              left: '5%',
              background: 'radial-gradient(circle, rgba(6, 78, 59, 0.25) 0%, transparent 70%)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              animation: 'float 30s ease-in-out infinite reverse, rotate-slow-reverse 70s linear infinite',
              animationDelay: '5s',
              filter: 'blur(3px)',
            }}
          />

          {/* Sacred Geometry Diamond */}
          <div
            className="absolute w-[300px] h-[300px]"
            style={{
              top: '45%',
              left: '45%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              animation: 'float 20s ease-in-out infinite, pulse-glow 8s ease-in-out infinite',
              animationDelay: '10s',
              filter: 'blur(2px)',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
