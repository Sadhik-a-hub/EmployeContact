import React, { useEffect, useState } from 'react'
import { DeleteEmpDetails, GetEmpDetails } from '../Service/Service';
import EmpForm from './EmpForm';

function EmpList() {

    const [details, setDetails] = useState(null);
    const [mode, setMode] = useState(null);
    const [id, setId] = useState(null);



    async function Fetchdata() {
        let data = await GetEmpDetails();
        setDetails(data);
    }
    useEffect(() => {
        Fetchdata();
    }, []);

    const EditData = (id) => {
        setMode("edit");
        setId(id);
    }

    const AddData = () => {
        setMode("add");
    }

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure want to delete this field")) {
            await DeleteEmpDetails((details) => details.filter((value) => value.id !== id));
        }
    }
    
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Employee List</h2>
        <button className="btn btn-primary" onClick={AddData}>
          Add Employee
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Joining Date</th>
              <th>Status</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Emp ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {details &&
              details.map((value, index) => (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.Name}</td>
                  <td>{value.Email}</td>
                  <td>{value.Phno}</td>
                  <td>{value.Gender}</td>
                  <td>{value.Department}</td>
                  <td>{value.JoiningDate}</td>
                  <td>{value.Status}</td>
                  <td>{value.Salary}</td>
                  <td>{value.Address}</td>
                  <td>{value.Emp_Id}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => EditData(value.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {mode && <EmpForm mode={mode} id={id} Fetchdata={Fetchdata} />}
    </div>
  );
}

export default EmpList
