import "./App.css";
import { useState } from "react";
import { UserRow } from "./components/UserRow";

const initialState = {
  name: "",
  gender: "",
  role: "",
  maritalStatus: false
};

function App() {

  const [formData, setFormData] = useState(initialState);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { type,checked,value,name } = e.target;
    const inputValue = type === "checkbox" ? checked : value ;
    setFormData({...formData, [name]: inputValue});
    e.target.value = null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(users);
    setUsers([...users, formData]);
    setFormData(initialState);
  }

  const { name,gender,role,maritalStatus } = formData;

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <div>
                <label>Name</label>
              </div>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <div>
              <input 
                type="text" 
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter name"
              />
              </div>
            </div>
            <div className="gender-wrapper"  data-testid="gender-wrapper">
              <div>
                <label>Gender</label>
              </div>
              <div>
              <select 
                value={gender} 
                onChange={handleChange} 
                name="gender"
                >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
              </div>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <div>
                <label>Role</label>
              </div>
              <div>
              <select 
                onChange={handleChange} 
                value={role} 
                name="role"
                >
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
              </div>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <div>
                <legend>Martial Status</legend>
              </div>
              
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input 
                  name="maritalStatus"
                  checked={maritalStatus}
                  type={"checkbox"}
                  onChange={handleChange}
                />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      {/* map through the userdata and render UserRow component to display the data in tabular format */
}
      
      {/* print "no users found"  in there is no user data */
      
        users.length === 0 ? <h2>no users found</h2> : 
          <table>
            <thead>
              <tr>
                  <td><b>S.NO.</b></td>
                  <td><b>User</b></td>
                  <td><b>Gender</b></td>
                  <td><b>Role</b></td>
                  <td><b>Marital Status</b></td>
              </tr>
            </thead>
            <tbody>
              {users.map((el,i) => {
                i++;
                return <UserRow
                  key={el.id}
                  id={el.id}
                  num={i}
                  name={el.name}
                  gender={el.gender}
                  role={el.role}
                  maritalStatus={el.maritalStatus}/>
              })}
            </tbody>
          </table>
      }
    </div>
  );
}

export default App;
