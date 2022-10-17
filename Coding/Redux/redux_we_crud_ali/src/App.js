
import Counter from "./Components/Counter";
// import Todos from "./Components/Todos";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
    <Counter />
  <Navbar />
  <AllRoutes />
 
    </div> 
  );
}
// "server":"json-server --watch db.json --port 8080",


export default App;


// 1. install redux library ---- npm install redux
// create folder with 3 files
// action.js
// reducer.js
// store.js

// creating the store.js file contents
// creating the reducer.js file contents

// if you want to start measuring performance in your app, 
// pass a function