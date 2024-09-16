import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteEmp } from "../../Store/Slice/EmpSlice";

const EmployeeTable = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let empList = useSelector((state) => state.employee);

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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((e) => (
            <tr key={e?.id}>
              <th scope="row">{e?.empName}</th>
              <td>{e?.empEmail}</td>
              <td>{e?.empPhoneNumber}</td>
              <td>
                <button className="btn btn-success" onClick={()=>navigate("/view-emp/"+e?.id)}>View</button>{" "}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
