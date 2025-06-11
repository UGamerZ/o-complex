import "@/styles/globals.css";
import "primereact/resources/themes/soho-dark/theme.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
