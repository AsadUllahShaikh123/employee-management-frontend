import React from 'react'

const ListEmployeeComponent = () => {
  return (
    <div className='container'>
        <a className='btn btn-primary mb-2 mt-3' href="index.html">Add Employee</a>
        <h2 className='text-center mb-4'>List Employee</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent