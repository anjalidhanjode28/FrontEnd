import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

export const Navbar = () => {
  const value = useContext(ThemeContext);

  return (
    <div
      className="Nav"
      style={{
        width: "100%",
        height: "30px",
        padding: "10px",
        marginRight: "10px",
        border: "2px solid red"
      }}
    >
      <div>
        <button>SignUp</button>
        <button>LogIn</button>
        <button>Products</button>
      </div>
      <button onClick={value.toggleTheme}>Change Theme</button>
    </div>
  );
};
