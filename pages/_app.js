import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import "../styles/Main.css"


function MyApp({ Component, pageProps }) {
  return <div>
    <Navbar /> 
    <Component {...pageProps} />
  </div>
}

export default MyApp
