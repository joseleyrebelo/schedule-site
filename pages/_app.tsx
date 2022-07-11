import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScheduleContextProvider } from "../contexts/ScheduleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // TODO - temp - remove classes ??
    <div className="bg-cyan-50 text-gray-700 min-h-screen">
      <ScheduleContextProvider>
        <Component {...pageProps} />
      </ScheduleContextProvider>
    </div>
  );
}

export default MyApp;
