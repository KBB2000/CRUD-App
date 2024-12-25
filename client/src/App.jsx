import React from 'react';
import User from "./pages/User"
import CreateUser from "./pages/CreateUser"
import UpdateUSer from "./pages/UpdateUSer"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update/:id' element={<UpdateUSer />} />
      </Routes>
    </div>
  );
}

export default App;
