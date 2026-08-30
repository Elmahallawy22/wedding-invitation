"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      style={
        {
          "--normal-bg": "var(--color-text)",
          "--normal-text": "var(--color-bg-alt)",
          "--normal-border": "var(--color-gold)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
