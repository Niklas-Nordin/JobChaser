"use client";

import { createContext, useState } from "react";

type DarkLightMode = {
  darkLight: string;
  setDarkLight: (darkLight: string) => void;
};

export const ThemeContext = createContext<DarkLightMode | undefined>(undefined);

export function DarkLightProvider({ children }: { children: React.ReactNode }) {
  const [darkLight, setDarkLight] = useState("dark");

  return (
    <ThemeContext.Provider value={{ darkLight, setDarkLight }}>
      {children}
    </ThemeContext.Provider>
  );
}
