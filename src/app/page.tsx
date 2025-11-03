"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type ButtonProps = {
  variant?: string;
  href?: string;
  onClick?: () => void;
  children: any;
};

const Button = ({ onClick, variant, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition ${
      variant === "outline"
        ? "border border-current hover:bg-opacity-10 hover:bg-white"
        : "bg-blue-600 text-white hover:bg-blue-700"
    }`}
  >
    {children}
  </button>
);

type CardProps = {
  title?: string;
  description?: string;
  tech?: string;
  link?: string;
};

const Card = ({ title, description, tech, link }: CardProps) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="p-6 border rounded-xl shadow-sm block hover:shadow-md transition"
  >
    <h4 className="font-bold text-xl mb-2">{title}</h4>
    <p className="mb-3">{description}</p>
    <span className="text-sm opacity-70">{tech}</span>
  </motion.a>
);

export default function Home() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("es");

  const toggleTheme = () => setDark(!dark);
  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  const bg = dark ? "bg-[#312F2C]" : "bg-[#F0EFE5]";
  const text = dark ? "text-[#F0EFE5]" : "text-[#312F2C]";
  const accent = dark ? "bg-[#2B2927]" : "bg-[#EAE8DE]";

  // Generate random geometric shapes
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
    size: Math.random() * 60 + 30,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
  }));

  const content: any = {
    es: {
      hero: {
        title: "Desarrollador Web Full Stack",
        desc: "Construyo aplicaciones web rápidas, escalables y modernas usando React, Next.js, Node.js y Tailwind CSS.",
      },
      about: {
        title: "Sobre mí",
        text: "Soy un desarrollador web apasionado por el diseño limpio y el código eficiente. Me especializo en construir experiencias digitales con React, Next.js y Node.js, priorizando el rendimiento, SEO y la accesibilidad.",
      },
      services: {
        title: "Servicios",
        items: [
          {
            title: "Desarrollo Web a Medida",
            desc: "Sitios rápidos, seguros y adaptados a tus necesidades.",
          },
          {
            title: "Optimización SEO",
            desc: "Mejora de posicionamiento, velocidad y visibilidad online.",
          },
          {
            title: "Mantenimiento & Soporte",
            desc: "Actualizaciones, backups y mejora continua de tus proyectos.",
          },
        ],
      },
      skills: {
        title: "Habilidades técnicas",
      },
      certifications: {
        title: "Certificaciones",
        items: [
          {
            title: "Amazon Web Services (AWS)",
            desc: "AWS Certified Cloud Practitioner",
            link: "https://www.credly.com/badges/b3edaf42-8971-4daa-8375-cbdafb53433e/linked_in_profile",
            button: "Ver certificación",
          },
        ],
      },
      projects: {
        title: "Proyectos destacados",
        items: [
          {
            name: "fullneumaticos.cl",
            desc: "Desarrollo a medida, SEO, optimización de velocidad y rendimiento, mantenimiento mensual.",
            tech: "PHP, MySQL",
            link: "https://www.fullneumaticos.cl/",
          },
          {
            name: "fullbaterias.cl",
            desc: "SEO y optimización de velocidad.",
            tech: "PHP, MySQL",
            link: "https://www.fullbaterias.cl",
          },
          {
            name: "otoacustic.cl",
            desc: "Desarrollo a medida, SEO y mantenimiento mensual.",
            tech: "PHP, MySQL",
            link: "https://www.otoacustic.cl/",
          },
          {
            name: "duboestetica.cl",
            desc: "Desarrollo a medida, SEO, Optimización de velocidad y rendimiento, Mantenimiento mensual.",
            tech: "PHP, MySQL",
            link: "https://duboestetica.cl/",
          },
        ],
      },
      contact: {
        title: "Contacto",
        text: "¿Tienes un proyecto o propuesta? ¡Hablemos!",
      },
      footer: "Desarrollador Web",
    },
    en: {
      hero: {
        title: "Full Stack Web Developer",
        desc: "I build fast, scalable, and modern web applications using React, Next.js, Node.js, and Tailwind CSS.",
      },
      about: {
        title: "About Me",
        text: "I'm a web developer passionate about clean design and efficient code. I specialize in building digital experiences with React, Next.js, and Node.js, prioritizing performance, SEO, and accessibility.",
      },
      services: {
        title: "Services",
        items: [
          {
            title: "Custom Web Development",
            desc: "Fast, secure websites tailored to your needs.",
          },
          {
            title: "SEO Optimization",
            desc: "Improved rankings, speed, and online visibility.",
          },
          {
            title: "Maintenance & Support",
            desc: "Updates, backups, and continuous improvement of your projects.",
          },
        ],
      },
      skills: {
        title: "Technical Skills",
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            title: "Amazon Web Services (AWS)",
            desc: "AWS Certified Cloud Practitioner",
            link: "https://www.credly.com/badges/b3edaf42-8971-4daa-8375-cbdafb53433e/linked_in_profile",
            button: "View Certification",
          },
        ],
      },
      projects: {
        title: "Featured Projects",
        items: [
          {
            name: "fullneumaticos.cl",
            desc: "Custom development, SEO, speed and performance optimization, monthly maintenance.",
            tech: "PHP, MySQL",
            link: "https://www.fullneumaticos.cl/",
          },
          {
            name: "fullbaterias.cl",
            desc: "SEO and speed optimization.",
            tech: "PHP, MySQL",
            link: "https://www.fullbaterias.cl",
          },
          {
            name: "otoacustic.cl",
            desc: "Custom development, SEO, and monthly maintenance.",
            tech: "PHP, MySQL",
            link: "https://www.otoacustic.cl/",
          },
          {
            name: "duboestetica.cl",
            desc: "Custom development, SEO, speed and performance optimization, monthly maintenance.",
            tech: "PHP, MySQL",
            link: "https://duboestetica.cl/",
          },
        ],
      },
      contact: {
        title: "Contact",
        text: "Have a project or proposal? Let's talk!",
      },
      footer: "Web Developer",
    },
  };

  const t = content[lang];

  return (
    <div className={`${bg} ${text} min-h-screen relative overflow-hidden`}>
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <style>{`
          @keyframes float-up {
            0% {
              transform: translateY(100vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }
          
          .shape {
            position: absolute;
            animation: float-up linear infinite;
          }
          
          .shape-circle {
            border-radius: 50%;
          }
          
          .shape-square {
            border-radius: 8px;
          }
          
          .shape-triangle {
            width: 0;
            height: 0;
            background: transparent !important;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
          }
        `}</style>

        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape shape-${shape.type} ${
              dark ? "bg-[#F0EFE5]" : "bg-[#312F2C]"
            }`}
            style={{
              width: shape.type === "triangle" ? 0 : `${shape.size}px`,
              height: shape.type === "triangle" ? 0 : `${shape.size}px`,
              left: `${shape.left}%`,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
              opacity: 0.1,
              ...(shape.type === "triangle" && {
                borderBottomWidth: `${shape.size}px`,
                borderBottomColor: dark ? "#F0EFE5" : "#312F2C",
              }),
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto sticky top-0 backdrop-blur-md z-10">
          <h1 className="text-3xl font-bold">Werner Müller</h1>
          <div className="flex gap-4 items-center">
            <Button onClick={toggleLang} variant="outline">
              {lang === "es" ? "🇬🇧 EN" : "🇪🇸 ES"}
            </Button>
            <Button onClick={toggleTheme} variant="outline">
              {dark ? "☀️" : "🌙"}
            </Button>
          </div>
        </nav>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-32"
          id="home"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-6xl font-bold mb-6"
          >
            {t.hero.title}
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">{t.hero.desc}</p>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className={`${accent} py-20 px-6`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">{t.about.title}</h3>
            <p className="leading-relaxed text-lg">{t.about.text}</p>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          id="services"
          className="max-w-5xl mx-auto py-20 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center">
            {t.services.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((s: any) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={s.title}
                className="p-6 border rounded-xl shadow-sm"
              >
                <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="py-20">
            <h3 className="text-3xl font-bold mb-8">{t.skills.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React",
                "Svelte",
                "SEO",
                "PHP",
                "Wordpress",
                "MySQL",
                "Next.js",
                "Node.js",
                "Express",
                "Tailwind",
                "Git",
                "Docker",
              ].map((skill) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={skill}
                  className="border rounded-xl p-3 text-center shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="py-10">
            <h3 className="text-3xl font-bold mb-8">
              {t.certifications.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {t.certifications.items.map((s: any) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={s.title}
                  className="p-6 border rounded-xl shadow-sm"
                >
                  <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                  <p className="mb-4">{s.desc}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${
                      dark
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white text-sm font-medium px-4 py-2 rounded-xl transition`}
                  >
                    {s.button}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className={`${accent} max-w-5xl mx-auto py-20 px-6`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center">
            {t.projects.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((p: any) => (
              <Card
                key={p.name}
                title={p.name}
                description={p.desc}
                tech={p.tech}
                link={p.link}
              />
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="text-center py-20 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-3xl font-bold mb-6">{t.contact.title}</h3>
          <p className="mb-8">{t.contact.text}</p>

          <div className="flex justify-center gap-6 text-xl mt-8">
            <a
              href="https://www.linkedin.com/in/werner-augusto-müller-hudats-781a3a143"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Linkedin />
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className={`${accent} text-center py-6 text-sm`}>
          © {new Date().getFullYear()} Werner Müller — {t.footer}
        </footer>
      </div>
    </div>
  );
}
