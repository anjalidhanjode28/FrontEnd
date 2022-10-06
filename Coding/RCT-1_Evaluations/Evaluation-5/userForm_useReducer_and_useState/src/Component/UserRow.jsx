import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id, num }) => {
  return (
    <tr key={id}>
      <td>{num}</td>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{role}</td>
      <td>{maritalStatus ? "married" : "unmarried"}</td>
    </tr>
  );
};
export { UserRow };
