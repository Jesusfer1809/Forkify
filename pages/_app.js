import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }) {
  console.log("router: ", router.asPath);
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
