import "./styles.css";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContextProvider";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";

const style = {
  light: {
    color: "black",
    background: "#cecece",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "black",
    padding: "50px"
  }
};

export default function App() {
  const value = useContext(ThemeContext);
  // console.log(value);

  return (
    <div
      className="App"
      style={value.theme === "light" ? style.light : style.dark}
    >
      <Navbar />
      <div className="Text">
        <p>Theme is: {value.theme}</p>
      </div>

      <h2>Well Come to my Website!</h2>
      <Footer />
    </div>
  );
}
