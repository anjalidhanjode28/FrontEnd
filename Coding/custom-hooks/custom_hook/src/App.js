import './App.css';
import useTimeout from "./Hooks/useTimeout";

function App() {

  const showText = useTimeout();
  
  return (
    <div className="App">
      <h2>{showText ? 'Completed' : 'Loading...'}</h2>
    </div>
  );
}

export default App;
