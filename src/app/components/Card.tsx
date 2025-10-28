import React from "react";

type CardProps = {
  title?: string;
  description?: string;
  tech?: string;
  link?: string;
};

export function Card({ title, description, tech, link }: CardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-6">
      {title && (
        <h4 className="text-xl font-semibold mb-2 text-[#312F2C]">{title}</h4>
      )}
      {description && (
        <p className="text-[#312F2C] mb-3 text-sm">{description}</p>
      )}
      {tech && (
        <p className="text-sm font-medium mb-4 text-[#312F2C]">{tech}</p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#312F2C] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Ver proyecto
        </a>
      )}
    </div>
  );
}
