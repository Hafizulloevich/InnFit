import { useState } from "react";

export function useParallaxImage() {
  const [scaleValue, setScaleValue] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handlePointerEnter = () => setScaleValue(1.04);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTranslateX((x - 0.5) * 20);
    setTranslateY((y - 0.5) * 20);
  };

  const handlePointerLeave = () => {
    setScaleValue(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  const handleTouchStart = () => setScaleValue(1.02);
  const handleTouchEnd = () => {
    setScaleValue(1);
    setTranslateX(0);
    setTranslateY(0);
  };

  return {
    scaleValue,
    translateX,
    translateY,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
    handleTouchStart,
    handleTouchEnd,
  };
}
