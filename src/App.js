import React from "react";
import HeaderComponent from "./component/Header";
import FooterComponent from "./component/Footer";
import "./index.css";
import ListEmployeeComponent from "./component/ListEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployeeComponent from "./component/AddEmployee";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default App;
