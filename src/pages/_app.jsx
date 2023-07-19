import { createTheme, NextUIProvider, Switch, useTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

export default function App({ Component, pageProps }) {


  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
        <Analytics/>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
