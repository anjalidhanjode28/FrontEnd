import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {

  const [pinInput, setPinInput] = useState("");
  return (
    <div className="App">
      <Pin length={5} maxLength={1} setPinInput={setPinInput} />
      OTP is: {pinInput}
    </div>
  );
}

export default App;
