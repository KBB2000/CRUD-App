import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUSer = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3004/getUser/" + id)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, [id]);
  

  const UpdateHandles = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put("http://localhost:3004/updateUser/"+id, { name, email, age });
      console.log(result);
      navigate("/");
    } catch (err) {
      console.error("An error occurred:", err);
    }
  }

  return (
    <div>
      <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
            <form action="" onSubmit={UpdateHandles}>
              <h2>Add User</h2>
              <div className="mb-2">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Name</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter your Age"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <button className="btn btn-success">Add USer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUSer;
