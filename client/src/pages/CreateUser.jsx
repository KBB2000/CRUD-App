import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate()

  const submitHandle = async (e) => {
    e.preventDefault();
    if (!name || !email || !age) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      const result = await axios.post("http://localhost:3004/createUser", { name, email, age });
      console.log(result);
      toast.success("User created successfully!");
      setTimeout(() => navigate("/"), 2000); 
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };
  

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form action="" onSubmit={submitHandle}>
            <h2>Add User</h2>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter your Age"
                className="form-control"
                onChange={(e)=> setAge(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Add USer</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
