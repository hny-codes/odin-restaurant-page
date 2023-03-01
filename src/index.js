import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./styles.css";

const App = () => {
  const content = document.getElementById('content');
  content.appendChild(Navbar());
  content.appendChild(Home());
  content.appendChild(Footer());
}

App();