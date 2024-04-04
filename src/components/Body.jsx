
import Header from "./Header"
import React from 'react';
import Login from "./auth/Login"
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import SignUp from "./auth/SignUp"
import PrivateRoute from "./auth/PrivateRoute"
import ExpenseManager from "./expense/ExpenseManager.jsx";


const Body = () => {




  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/expense" element={<ExpenseManager />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Body