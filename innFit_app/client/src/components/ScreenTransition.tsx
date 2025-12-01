import React from "react";

interface ScreenTransitionProps {
  children: React.ReactNode;
  direction?: "fade" | "slideLeft" | "slideRight" | "slideUp";
}

export function ScreenTransition({ children, direction = "fade" }: ScreenTransitionProps) {
  const animations = {
    fade: "animate-fade-in",
    slideLeft: "animate-slide-left",
    slideRight: "animate-slide-right",
    slideUp: "animate-slide-up",
  };

  return <div className={`${animations[direction]} w-full`}>{children}</div>;
}
