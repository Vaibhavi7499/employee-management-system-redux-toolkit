import React from "react";
import "./ViewEmp.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ViewEmp = () => {
  let viewUser = useSelector((state) => state.employee);
  let params = useParams();
let navigate = useNavigate();
  let filteredObj = viewUser.find((e) => e?.id === params?.id);

  return (
    <div class="card col-md-5 mt-3 m-auto">
        <div>
        <button className="backbtn" onClick={()=>navigate("/")}>Back to Home</button>
      <h4 className="text-center mt-3">Employee Details</h4>
      </div>
      <hr />
      <div class="card-body m-auto">
        <div className="d-flex ">
          <h6>Employee Name : </h6>
          <p className="name">{filteredObj?.empName}</p>
        </div>
        <div className="d-flex ">
          <h6>Employee Email : </h6>
          <p className="name">{filteredObj?.empEmail}</p>
        </div>
        <div className="d-flex ">
          <h6>Employee Phone No : </h6>
          <p className="name">{filteredObj?.empPhoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
