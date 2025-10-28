"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function Home() {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => setDark(!dark);

  const bg = dark ? "bg-[#312F2C]" : "bg-[#F0EFE5]";
  const text = dark ? "text-[#F0EFE5]" : "text-[#312F2C]";
  const accent = dark ? "bg-[#2B2927]" : "bg-[#EAE8DE]";

  return (
    <div className={`${bg} ${text} min-h-screen`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto sticky top-0 backdrop-blur-md z-10">
        <h1 className="text-3xl font-bold">Werner Müller</h1>
        <div className="flex gap-4 items-center">
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
          Desarrollador Web Full Stack
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Construyo aplicaciones web rápidas, escalables y modernas usando
          React, Next.js, Node.js y Tailwind CSS.
        </p>
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
          <h3 className="text-3xl font-bold mb-6">Sobre mí</h3>
          <p className="leading-relaxed text-lg">
            Soy un desarrollador web apasionado por el diseño limpio y el código
            eficiente. Me especializo en construir experiencias digitales con
            React, Next.js y Node.js, priorizando el rendimiento, SEO y la
            accesibilidad.
          </p>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="services"
        className="max-w-5xl mx-auto py-20 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-3xl font-bold mb-10 text-center">Servicios</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((s) => (
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
          <h3 className="text3xl font-bold mb-8">Habilidades técnicas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "Svelte",
              "SEO",
              "PHP",
              "Wordpress",
              "Mysql",
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
          <h3 className="text3xl font-bold mb-8">Certificaciones</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Amazon Web Services (AWS)",
                desc: "AWS Certified Cloud Practitioner",
                link: "https://www.credly.com/badges/b3edaf42-8971-4daa-8375-cbdafb53433e/linked_in_profile",
              },
            ].map((s) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={s.title}
                className="p-6 border rounded-xl shadow-sm"
              >
                <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                <p>{s.desc}</p>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#312F2C] text-white text-sm font-medium px-1 py-5 rounded-xl hover:bg-blue-700 transition"
                >
                  Ver certificación
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
          Proyectos destacados
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((p) => (
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
        <h3 className="text-3xl font-bold mb-6">Contacto</h3>
        <p className="mb-8">¿Tienes un proyecto o propuesta? ¡Hablemos!</p>

        <div className="flex justify-center gap-6 text-xl mt-8">
          <a
            href="https://www.linkedin.com/in/werner-augusto-müller-hudats-781a3a143"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={`${accent} text-center py-6 text-sm`}>
        © {new Date().getFullYear()} Werner Müller — Desarrollador Web
      </footer>
    </div>
  );
}
