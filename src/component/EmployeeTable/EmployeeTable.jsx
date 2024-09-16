import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteEmp } from "../../Store/Slice/EmpSlice";

const EmployeeTable = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [search, setSearch] = useState("");
  let empList = useSelector((state) => state.employee).filter((ele) => {
    return search?.trim() === ""
      ? ele
      : ele?.empName?.toLowerCase()?.includes(search.toLowerCase());
  });

  let removeEmp = (id) => {
    dispatch(deleteEmp(id));
    toast.warn("Employee deleted successfully");
  };

  return (
    <div className="mt-3 w-75 m-auto">
      <div className="d-flex align-items-center justify-content-around mb-5">
        <div>
          <h1>Employee Management System</h1>
        </div>
        <div>
          <button
            className="btn btn-info"
            onClick={() => navigate("/add-update-emp")}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="d-flex">
          <div className="col-md-8">
            <input
              className="form-control "
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {!empList.length ? (
            <tr className="pt-3 text-center">
              <td>No record to display</td>
            </tr>
          ) : (
            empList.map((e) => (
              <tr key={e?.id}>
                <th scope="row">{e?.empName}</th>
                <td>{e?.empEmail}</td>
                <td>{e?.empPhoneNumber}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/view-emp/" + e?.id)}
                  >
                    View
                  </button>{" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/add-update-emp/" + e?.id)}
                  >
                    Update
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmp(e?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
