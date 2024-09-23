import React, { useContext } from "react";
import "./ViewEmp.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { dummyContext } from "../../context/DummyContext";
import { useTranslation } from "react-i18next";

const ViewEmp = () => {
  let viewUser = useSelector((state) => state.employee);
  let {emp} = useContext(dummyContext)
 let{t} = useTranslation('common')
  // console.log(emp)
  let params = useParams();
  let filteredObj = viewUser.find((e) => e?.id === params?.id);

  return (
    <div className="card col-md-5 mt-3 m-auto">
      <div>
        <h4 className="text-center mt-3">{t("Employee Details")}</h4>
      </div>
      <hr />
      <div className="card-body m-auto">
        <div className="d-flex ">
          <h6>{t("Employee Name")} : </h6>
          <p className="name">{filteredObj?.empName}</p>
        </div>
        <div className="d-flex ">
          <h6>{t("Employee Email")} : </h6>
          <p className="name">{filteredObj?.empEmail}</p>
        </div>
        <div className="d-flex ">
          <h6>{t("Employee Phone Number")} : </h6>
          <p className="name">{filteredObj?.empPhoneNumber}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-3">
        <Link to="/">{t("Back to Home")}</Link>
      </div>
    </div>
  );
};

export default ViewEmp;
