import React from 'react'
import Signup from "./components/Signup"
import Login from "./components/Login"
import User from "./components/User"

import {BrowserRouter, Route,Routes} from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route exact path='/signup'element={<Signup/>}/>
          <Route exact path='/login'element={<Login/>}/>
          <Route exact path='/'element={<User/>}/>

        </Routes>
      
      </BrowserRouter>

    </div>
  )
}
