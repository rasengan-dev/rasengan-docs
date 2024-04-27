import LoaderPage from "@components/molecules/LoaderPage";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Newsletter from "providers/Newsletter";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Newsletter>
      <Component {...pageProps} />
      <LoaderPage />

      <ToastContainer />
    </Newsletter>
  );
}
