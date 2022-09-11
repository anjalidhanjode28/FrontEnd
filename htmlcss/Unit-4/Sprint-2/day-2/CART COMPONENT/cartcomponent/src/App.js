import { useState } from "react";
import { Item } from "./Components/Item";
import { dishes } from "./db.json";
import "./App.css";
// import styles from "./Components//Item.module.css";

function App() {
  const [data, setData] = useState(dishes);

  function handleQty(value, id) {
    setData(
      data.map((dish) =>
        dish.id === id ? { ...dish, qty: dish.qty + value } : dish
      )
    );
  }
  // console.log(data);
  let total = 0;

  return (
    <div className="App">
      {data.map((dish) => {
        total += dish.qty * dish.price;
        return <Item key={dish.id} dish={dish} handleQty={handleQty} />;
      })}
      <h2>Total: {total}</h2>
    </div>
  );
}

export default App;
