import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
