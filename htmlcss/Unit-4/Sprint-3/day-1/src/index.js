import { createRoot } from "react-dom/client";
import ThemeContextProvider from "./Context/ThemeContextProvider.jsx";
// import { Navbar } from "./Components/Navbar";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
