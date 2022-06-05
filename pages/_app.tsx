import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScheduleContextProvider } from "../contexts/ScheduleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScheduleContextProvider>
      <Component {...pageProps} />;
    </ScheduleContextProvider>
  );
}

export default MyApp;
