"use client";

import { ThemeProvider } from "@/features/theme/theme-provider";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export function Providers(props: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {props.children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
