import { useState } from "react";
import TodoItems from "./TodoItems.jsx";

function AddList({ handleAddList }) {
  const [text, setText] = useState("");

  const handleChange = (elem) => {
    setText(elem.target.value);
  };

  const onClick = () => {
    handleAddList(text);
    setText("");
  };

  return (
    <div>
      <div className="InputShow">
        <input
          value={text}
          type="text"
          onChange={handleChange}
          placeholder="Enter Tasks"
        />
        <button onClick={onClick}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAADa2trz8/PMzMz7+/vPz8+VlZVsbGxJSUkkJCRxcXEGBgbd3d3u7u45OTm4uLjl5eVfX195eXkaGhpCQkKvr69WVlY7OztUVFS3J5L2AAADPklEQVR4nO2d2XaqQBREaRGZBMQBzf//6L1mWEYZuldAT51j7eck1l6GHmwsouhlJJs0ywtX5Fm6SV73si9jXW7djW25lg60MKu9e2S/kg61JIee35WDdKzFqPNBQedOtXS0ZaiOI4LOHSvpcEsQj/pdiaXjzSdpJg0b/fNGOSnoXCkdcC5rj6Bz2ifGk9fwJB1xHjuvoHM76ZCzmB5mvmikQ86hDhB0TvO83wUZdtIxZ3AOMjxLx5xByGWo+kKMiyDDQu/SrQ0SdK6VDvpnqkBDvTuMVaCh3t0+DWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piI99Q9Dv48dttVqGKqR/58pusVdsfQUUdXe+hHVZoFJczt14380urIoEn2a4mGntL63Sw6nfIJb4etW08dgDF1v5B71xuRt0Qod1XfyahOrxdkrNHG+D6li/qHbyH8HhhlgLfLfchq4eNfK14u2XGNth/znTS6d4KteZ39pUf8//iT/Z+n9MMdsk2khneDKbKJWO8GTSKJOO8GQys+uZH/JI95beTxFJJ3g6b/Ae2r8O7Y+l9udD+2sa++tS+3uLN9gf2t/jv8HnNPY/awt5kIhObo8/sf+Zt/1zC5NnT83Dgbe988P+o7KsnwFfsX6O/zmodh+N7k1/0Uzdi/E96Ji+n2ZhQO+JWhD797XRkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+Ng3tP99/DbQsJUO+mfisI6N4sVVD0sSVpZykY45g48gw7N0zBl0QYaddMwZ1EGGvj4ZaEIuxEY65CxCOnjGK49U4K/XOvn/CDT+7tDhVi5F+HrgHp/LpI9kerBp+sVx6ognDRUv2G5U482aR727ijvqsQE1Vz3X3zHccnvw/6IeVv065r3enf0w6/J3Nfq2VD8NDpBs0iwvXJFn6eaFc8Q/b8ZMsSF2Ac4AAAAASUVORK5CYII="
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default function List() {
  const [list, setList] = useState([]);

  const handleAddList = (text) => {
    const newList = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };

    setList([...list, newList]);
  };

  const handleToggle = (id) => {
    const listAfterToggled = list.map((list) =>
      list.id === id ? { ...list, status: !list.status } : list
    );

    setList(listAfterToggled);
  };

  const handleDelete = (id) => {
    const listAfterDeletion = list.filter((list) => list.id !== id);
    setList(listAfterDeletion);
  };

  return (
    <div>
      <AddList handleAddList={handleAddList} />
      <div>
        {list.map((item) => (
          <TodoItems
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
