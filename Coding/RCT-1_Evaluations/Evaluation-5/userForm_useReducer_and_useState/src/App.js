import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";


// const initialState = {
//   name: "",
//   gender: "Male",
//   role: "FrontEnd Developer",
//   maritalStatus: false,
// };

// const reducer = (state, action) => {

//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.payload };
//     case "gender":
//       return { ...state, gender: action.payload };
//     case "role":
//       return { ...state, role: action.payload };
//     case "maritalStatus":
//       return { ...state, maritalStatus: action.payload };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [users, setUsers] = useState([]);



//   const handleChange = (e) => {
//     const {type,checked,value,name} = e.target;
//     const inputValue = type === "checkbox" ? checked : value;

//     dispatch({
//       ...state,
//       type: name,
//       payload: inputValue ,
//     });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     setUsers([...users, state]);
//     dispatch({type: "reset"});
    
//   }
//   console.log(users);


//   return (
//     <div className="App">
//       <div>
//         <h1>User Form</h1>
//         <h3>useReducer</h3>
//         <div className="form-wrapper" data-testid="form-wrapper">
//           <form data-testid="form-element" onSubmit={handleSubmit}>
//             <div className="name-wrapper" data-testid="name-wrapper">
//               <label>Name</label>
//               {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
//               <input 
//                 type="text"
//                 name="name"
//                 value={state.name}
//                 placeholder="Enter name"
//                 onChange={handleChange}
//                  />
//             </div>
//             <div className="gender-wrapper" data-testid="gender-wrapper">
//               <label>Gender</label>
//               <select 
//                 name="gender" 
//                 data-testid="gender-select"
//                 value={state.gender}
//                 onChange={handleChange}
//                 >
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Prefer Not to Say">Prefer Not to Say</option>
//               </select>
//             </div>
//             <div className="role-wrapper" data-testid="role-wrapper">
//               <label>Role</label>
//               <select 
//                  name="role" 
//                  value={state.role}  
//                  data-testid="role-select"
//                  onChange={handleChange}
//                  >
//                 <option value="FrontEnd Developer">FrontEnd Developer</option>
//                 <option value="BackEnd Developer">BackEnd Developer</option>
//                 <option value="FullStack Developer">FullStack Developer</option>
//               </select>
//             </div>
//             <div
//               className="marital-status-wrapper"
//               data-testid="marital-status-wrapper"
//             >
//               <legend>Martial Status</legend>
//               <div>
//                 {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
//                 <input 
//                   type={"checkbox"} 
//                   name="maritalStatus"
//                   value={state.maritalStatus}
//                   onChange={handleChange}
//                   />
//                 <label>Married</label>
//               </div>
//             </div>
//             <div>
//               <button type="submit">SUBMIT</button>
//             </div>
//           </form>
//         </div>
// {/* map through the userdata and render UserRow component to display the data in tabular format */}
//         {/* print "no users found"  in there is no user data */
        
//         users.length === 0 ? <h2>no users found</h2> : 
//         <table>
//           <thead>
//             <tr>
//               <td><b>S.no.</b></td>
//               <td><b>User</b></td>
//               <td><b>Gender</b></td>
//               <td><b>Role</b></td>
//               <td><b>Marital Status</b></td>
//             </tr>
//           </thead>
//           <tbody>
        
//             {users && users.map((elem,i) => {
//               i++;
//               return <UserRow
//                  key={elem.id}
//                  id={elem.id}
//                  num={i}
//                  name={elem.name}
//                  gender={elem.gender}
//                  role={elem.role}
//                  maritalStatus={elem.maritalStatus}/>
//             })}
//           </tbody>
//         </table>
//         }
        
//       </div>
      
//     </div>
//   );
// }

// export default App;














const initialState = {
 name: "",
 gender: "Male",
 role: "FrontEnd Developer",
 maritalStatus: false,
};



const reducer = (state, action) => {



 switch (action.type) {
   case "name":
     return { ...state, name: action.payload };
   case "gender":
     return { ...state, gender: action.payload };
   case "role":
     return { ...state, role: action.payload };
   case "maritalStatus":
     return { ...state, maritalStatus: action.payload };
   case "reset":
     return initialState;
   default:
     return state;
 }
};



function App() {



 const [formData, setFormData] = useState(initialState);
 const [users, setUsers] = useState([]);



 const handleChange = (e) => {
   const {type,checked,value,name} = e.target;
   const inputValue = type === "checked" ? checked : value;
   setFormData({...formData, [name]: inputValue});
 
   console.log(e.target.checked);
   e.target.value = null;
   e.target.checked = false;
 }






 const handleSubmit = (e) => {
   e.preventDefault();
   setUsers([...users, formData]);
   setFormData(initialState);
   console.log(users);
 }



 const {name,gender,role,maritalStatus} = formData;
 return (
   <div className="App">
     <div>
       <h1>User Form</h1>
       <h3>useReducer</h3>
       <div className="form-wrapper" data-testid="form-wrapper">
         <form data-testid="form-element" onSubmit={handleSubmit}>
           <div className="name-wrapper" data-testid="name-wrapper">
             <label>Name</label>
             {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
             <input
               type="text"
               name="name"
               value={name}
               placeholder="Enter name"
               onChange={handleChange}
                />
           </div>
           <div className="gender-wrapper" data-testid="gender-wrapper">
             <label>Gender</label>
             <select
               name="gender"
               data-testid="gender-select"
               value={gender}
               onChange={handleChange}
               >
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Prefer Not to Say">Prefer Not to Say</option>
             </select>
           </div>
           <div className="role-wrapper" data-testid="role-wrapper">
             <label>Role</label>
             <select
                name="role"
                value={role} 
                data-testid="role-select"
                onChange={handleChange}
                >
               <option value="FrontEnd Developer">FrontEnd Developer</option>
               <option value="BackEnd Developer">BackEnd Developer</option>
               <option value="FullStack Developer">FullStack Developer</option>
             </select>
           </div>
           <div
             className="marital-status-wrapper"
             data-testid="marital-status-wrapper"
           >
             <legend>Martial Status</legend>
             <div>
               {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
               <input
                 type={"checkbox"}
                 name="maritalStatus"
                 value={maritalStatus}
                 onChange={handleChange}
                 />
               <label>Married</label>
             </div>
           </div>
           <div>
             <button type="submit">SUBMIT</button>
           </div>
         </form>
       </div>



      
     </div>
     {/* map through the userdata and render UserRow component to display the data in tabular format */}
       {/* print "no users found"  in there is no user data */
      
       users.length === 0 ? <h2>no users found</h2> :
       <table>
         <thead>
           <tr>
             <td><b>S.no.</b></td>
             <td><b>User</b></td>
             <td><b>Gender</b></td>
             <td><b>Role</b></td>
             <td><b>Marital Status</b></td>
           </tr>
         </thead>
         <tbody>
      
           {users.map((elem,i) => {
             i++;
             return <UserRow
                key={elem.id}
                id={elem.id}
                num={i}
                name={elem.name}
                gender={elem.gender}
                role={elem.role}
                maritalStatus={elem.maritalStatus}/>
           })}
         </tbody>
       </table>
       }
   </div>
 );
}



export default App;

