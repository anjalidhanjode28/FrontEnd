import './App.css';
import { useState } from 'react';

const initState = {
  name: "",
  age: "",
  address: "",
  department: "",
  salary: "",
  maritalstate: ""
};

export default function App(){

  const [formData, setFormData] = useState(initState);
  const [users,setUsers] = useState([]);
  
  const handleChange = (e) => {
      // console.log(e.target);
      // console.log(e.target.name);
      // console.log(e.target.value);
      // console.log(e.target.checked);
      // console.log(e.target.type);
      const { name, checked, value, type } = e.target;
      const inputValue = type === "checkbox" ? checked : value;
      setFormData({ ...formData, [name]: inputValue });
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setUsers([...users, formData]);
      console.log(formData);
  };
  
  const { name, email, address, department, salary, maritalstatus } = formData;
  
  return (
      <div className="App">
      <form onSubmit={handleSubmit}>
          <h1>React Forms</h1>
  
          <label>
          Name:
          <input 
              name="name" 
              type="text" 
              value={name} 
              onChange={handleChange} 
              />
          </label>
          <br />
          <br />
          <label>
          Age:
          <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
          />
          </label>
          <br />
          <br />
  
          <label>
          Address:
          <input
              name="address"
              type="text"
              value={address}
              onChange={handleChange}
          />
          </label>
          <br />
          <br />
  
          <label>Department: </label>
          <select name="department" value={department} onChange={handleChange}>
          <option value="department-A">Department-A</option>
          <option value="department-B">Department-B</option>
          <option value="department-C">Department-C</option>
          <option value="department-D">Department-D</option>
          <option value="department-E">Department-E</option>
          </select>
          <br />
          <br />
  
          <label> salary: </label>
          <input 
              name="salary" 
              value={salary} 
              onChange={handleChange}
              />
          
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
          <li key={user.name}> {user.name}</li>
          ))}
      </form>
      </div>
  );
}
