import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteEmp } from "../../Store/Slice/EmpSlice";
import { useTranslation } from "react-i18next";

const EmployeeTable = () => {
  let {t} = useTranslation('common')
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
    toast.warn(t("Delete message"));
  };

  return (
    <div className="mt-3 w-75 m-auto">
      <div className="d-flex align-items-center justify-content-around mb-5">
        <div>
          <h1>{t("ProjectHeading")}</h1>
        </div>
        <div>
          <button
            className="btn btn-info"
            onClick={() => navigate("/add-update-emp")}
          >
            {t("Add User")}
          </button>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="d-flex">
          <div className="col-md-8">
            <input
              className="form-control "
              type="text"
              placeholder={t("search by name")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">{t("Name")}</th>
            <th scope="col">{t("Email")}</th>
            <th scope="col">{t("Phone Number")}</th>
            <th scope="col">{t("Action")}</th>
          </tr>
        </thead>
        <tbody>
          {!empList.length ? (
            <tr className="pt-3 text-center">
              <td>{t("No record to display")}</td>
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
                    {t("View")}
                  </button>{" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/add-update-emp/" + e?.id)}
                  >
                    {t("Update")}
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeEmp(e?.id)}
                  >
                    {t("Delete")}
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
