import LoaderPage from "@components/molecules/LoaderPage";
import "../styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <LoaderPage />
    </>
  );
}
