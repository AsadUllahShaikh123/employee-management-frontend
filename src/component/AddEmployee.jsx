import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const employeeData = {firstName,lastName,email};
    const saveEmployee=(e)=>{
        e.preventDefault();
        if(id){
            EmployeeService.updateEmployee(id,employeeData)
            .then(navigate("/employee"))
            .catch(e=> console.log(e))
        }else {
            EmployeeService.saveEmployee(employeeData)
        .then(navigate("/employee"))
        .catch(e=> console.log(e))
        }
        
    }
    const title =()=> {
        if(id){
            return "Update Employee";
        }else {
            return "Add Employee";
        }
    }
    useEffect(() => {
        
        if(id){
            EmployeeService.getEmployeeById(id)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
            })
            .catch(e => console.log(e))
        }
       
    }, []);
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{title()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter First Name' 
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter Last Name'
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="email" placeholder='Enter Email' 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <button onClick={e => saveEmployee(e)} className='btn btn-success'>{id ? "Update" : "Save"}</button> {" "}
                            <a className='btn btn-danger' href="cancel.html">Cancel</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent