import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScheduleContextProvider } from "../contexts/ScheduleContext";
import { BondsContextProvider } from "contexts/BondsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @todo - remove temp classes ??
    // @todo - log bg-cyan-50
    <div className="bg-[#f3ffff]  text-gray-700 min-h-screen">
      <ScheduleContextProvider>
        <BondsContextProvider>
          <Component {...pageProps} />
        </BondsContextProvider>
      </ScheduleContextProvider>
    </div>
  );
}

export default MyApp;
