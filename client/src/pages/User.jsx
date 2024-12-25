import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles


const User = () => {
  const [users, setUser] = useState([
    {
      Name: "keshav",
      Email: "kn@gmail.com",
      Age: 20,
    },
  ]);


  useEffect(() =>{
    axios.get("http://localhost:3004")
    .then(result => setUser(result.data))
    .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete("http://localhost:3004/deleteUser/"+id)
    .then(result => {
      console.log(result)
      toast.success("User deleted successfully!");
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <NavLink to="/create" className="btn btn-success">
            Add +
          </NavLink>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                    <NavLink to={`/update/${user._id}`} className="btn btn-success">Edit</NavLink>{" "}
                      <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default User;
