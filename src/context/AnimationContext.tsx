// src/context/AnimationContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

type AnimationContextType = {
  animationActive: boolean;
  setAnimationActive: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [animationActive, setAnimationActive] = useState(false);

  return (
    <AnimationContext.Provider value={{ animationActive, setAnimationActive }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Hook สำหรับเรียกใช้ใน component
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
