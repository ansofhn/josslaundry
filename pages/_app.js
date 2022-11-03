import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AnimatePresence exitBeforeEnter>
      getLayout(<Component {...pageProps} />)
    </AnimatePresence>
  );
}

export default MyApp;
