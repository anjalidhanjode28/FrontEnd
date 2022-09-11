import { useState } from "react";

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
      <input value={text} type="text" onChange={handleChange} />
      <button onClick={onClick}>Add Skill</button>
    </div>
  );
}

export default function List() {
  const [list, setList] = useState([]);

  const handleAddList = (text) => {
    const newList = {
      title: text,
      id: new Date().toDateString() + text
    };
    setList([...list, newList]);
  };

  return (
    <div>
      <AddList handleAddList={handleAddList} />
      <ul>
        {list.map((item) => (
          <Todo key={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
}

function Todo({ title }) {
  return <li>{title}</li>;
}
