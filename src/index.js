import Navbar from "./components/Navbar/Navbar";
import "./styles.css";

const Home = () => {
  const content = document.getElementById('content');
  content.appendChild(Navbar());
}

Home();