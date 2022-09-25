import React from "react";

const UserRow = ({name,gender,role,maritalStatus,num})=>{

    return (
            <tr>
                <td>{num}</td>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{role}</td>
                <td>{maritalStatus ? "married" : "unmarried"}</td>
            </tr>
        );
}
export {UserRow}