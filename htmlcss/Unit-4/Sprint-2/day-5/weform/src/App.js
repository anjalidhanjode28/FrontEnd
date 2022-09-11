import './App.css';
import { useState } from "react";

const initState = {
  name: "",
  gender: "",
  role: "",
  maritalstatus: false
};

export default function App() {
  const [formData, setFormData] = useState(initState);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    console.log(formData);
  };

  const { name, gender, role, maritalstatus } = formData;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>WE - FORMS</h1>

        <label>
          Name:
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>
        <br />
        <br />

        <label>Gender: </label>
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />

        <label> Role: </label>
        <select name="role" value={role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="instructore">Instructore</option>
          <option value="ia">IA</option>
        </select>
        <br />
        <br />

        <label>
          Marital Status:
          <input
            name="maritalstatus"
            type="checkbox"
            onChange={handleChange}
            checked={maritalstatus}
          />
        </label>
        <br />
        <br />
        <br />
        <input type="submit" />
        <br />

        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </form>
    </div>
  );
}
