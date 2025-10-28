import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 text-gray-800 bg-transparent hover:bg-gray-100 focus:ring-gray-300",
  };

  const className = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
