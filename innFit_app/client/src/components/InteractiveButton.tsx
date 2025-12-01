import React from "react";
import { Button } from "@/components/ui/button";

interface InteractiveButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export function InteractiveButton({
  onClick,
  children,
  variant = "default",
  size = "md",
  className = "",
  disabled = false,
}: InteractiveButtonProps) {
  const [isPressed, setIsPressed] = React.useState(false);

  const baseClasses = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const variantClasses = {
    default: "bg-[#0088ff] hover:bg-[#0077dd] text-white",
    outline: "border-2 border-[#0088ff] text-[#0088ff] hover:bg-[#0088ff] hover:text-white",
    ghost: "text-[#0088ff] hover:bg-blue-50",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        relative overflow-hidden rounded-lg font-['Montserrat',Helvetica] font-semibold
        transition-all duration-200 active:scale-95
        ${baseClasses[size]}
        ${variantClasses[variant]}
        ${isPressed ? "shadow-lg scale-95" : "hover:shadow-md"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {/* Ripple effect */}
      {isPressed && (
        <span
          className="absolute inset-0 bg-white/30 rounded-full animate-ping"
          style={{ animation: "ripple 0.6s ease-out" }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// Add ripple animation to global styles
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
