import React, { useEffect, useState } from "react";
import {
  EditEmpDetails,
  PostEmpDetails,
  PutEmpDetails,
} from "../Service/Service";

function EmpForm({ mode, id, Fetchdata }) {
  const [form, setForm] = useState("");

  useEffect(() => {
    if (mode === "edit" && id) {
      EditEmpDetails(id).then((data) => {
        setForm(data);
      });
    } else {
      setForm({
        Name: "",
        Email: "",
        Phno: "",
        Gender: "",
        Department: "",
        JoiningDate: "",
        Status: "",
        Salary: "",
        Address: "",
        Emp_Id: "",
      });
    }
  }, [id, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      await PutEmpDetails(form);
    } else {
      await PostEmpDetails(form);
    }
    Fetchdata();
    setForm({
      Name: "",
      Email: "",
      Phno: "",
      Gender: "",
      Department: "",
      JoiningDate: "",
      Status: "",
      Salary: "",
      Address: "",
      Emp_Id: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">
          {mode === "edit" ? "Edit" : "Add"} Employee
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                              name="Name"
                              placeholder="Name"
                value={form.Name}
                onChange={(e) => setForm({ ...form, Name: e.target.value })}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                              name="Email"
                              placeholder="Email"
                value={form.Email}
                onChange={(e) => setForm({ ...form, Email: e.target.value })}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                              name="Phno"
                              placeholder="moblie"
                value={form.Phno}
                onChange={(e) => setForm({ ...form, Phno: e.target.value })}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label d-block">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="male"
                  checked={form.Gender === "male"}
                  onChange={(e) => setForm({ ...form, Gender: e.target.value })}
                  required
                />
                <label className="form-check-label">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="female"
                  checked={form.Gender === "female"}
                  onChange={(e) => setForm({ ...form, Gender: e.target.value })}
                  required
                />
                <label className="form-check-label">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="others"
                  checked={form.Gender === "others"}
                  onChange={(e) => setForm({ ...form, Gender: e.target.value })}
                  required
                />
                <label className="form-check-label">others</label>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select
                className="form-select"
                name="Department"
                              value={form.Department}
                              
                onChange={(e) =>
                  setForm({ ...form, Department: e.target.value })
                }
                required
              >
                <option value="">-- Select Department --</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Joining Date</label>
              <input
                type="date"
                className="form-control"
                name="JoiningDate"
                value={form.JoiningDate}
                onChange={(e) =>
                  setForm({ ...form, JoiningDate: e.target.value })
                }
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="Status"
                              value={form.Status}
                              
                onChange={(e) => setForm({ ...form, Status: e.target.value })}
                required
              >
                <option value="">-- Select Status --</option>
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                              name="Salary"
                              placeholder="Salary"
                value={form.Salary}
                onChange={(e) => setForm({ ...form, Salary: e.target.value })}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Emp_Id</label>
              <input
                type="number"
                className="form-control"
                name="Emp_Id"
                              value={form.Emp_Id}
                              placeholder="0000"
                onChange={(e) => setForm({ ...form, Emp_Id: e.target.value })}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="Address"
                              value={form.Address}
                              placeholder="Address"
                onChange={(e) => setForm({ ...form, Address: e.target.value })}
                required
               
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-5">
              {mode==='edit'?'update':'save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmpForm;
