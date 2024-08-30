"use client";

import { ThemeProvider } from "@/features/theme/theme-provider";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export type ProvidersProps = PropsWithChildren;

export function Providers(props: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {props.children}
    </ThemeProvider>
  );
}
