import React from 'react'
import HeaderComponent from './component/Header';
import FooterComponent from './component/Footer';
import  './index.css';
import ListEmployeeComponent from './component/ListEmployee';
import AddEmployeeComponent from './component/AddEmployee';
const App = () => {
  return (
    <>
      <HeaderComponent/>
      <ListEmployeeComponent/>
      <AddEmployeeComponent/>
      <FooterComponent/>
    </>
  )
}

export default App