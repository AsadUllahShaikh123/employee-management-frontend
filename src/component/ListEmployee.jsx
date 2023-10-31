import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
const ListEmployeeComponent = () => {
  const [employeeArray, setEmployeeArray] = useState([]);
  useEffect(() => {
    getAllEmployee();
  });
  function getAllEmployee() {
    EmployeeService.getAllEmployee()
      .then((res) => {
        setEmployeeArray(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }
  const  deleteEmployee=(id)=>{
    EmployeeService.deleteEmployee(id)
    .then(getAllEmployee())
  }

  return (
    <div className="container">
      <Link to={"/add-employee"} className="btn btn-primary mb-2 mt-3">
        Add Employee
      </Link>
      <h2 className="text-center mb-4">List Employee</h2>
      <table className="table table-bordered table striped">
        <thead>
          <th>Employee ID</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {employeeArray.map((data) => (
            <tr id={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>

              <td>
                <Link to={`/add-employee/${data.id}`} className="btn btn-info">Update</Link>
                <Link onClick={e => deleteEmployee(data.id)} to="/employee" className="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
