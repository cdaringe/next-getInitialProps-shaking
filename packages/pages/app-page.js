// should be deadcode eliminated from the client side bundle
import { init } from "../async-hooks-thing/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <pre>{JSON.stringify(pageProps)}</pre>
      <Component {...pageProps} />
    </>
  );
}

if (typeof window === "undefined") {
  MyApp.getInitialProps = () => {
    init();
    return { arstarstarst: true };
  };
}

export default MyApp;
