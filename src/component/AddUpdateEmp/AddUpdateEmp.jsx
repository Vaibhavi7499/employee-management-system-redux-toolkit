import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEmp, updateEmp } from "../../Store/Slice/EmpSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const AddUpdateEmp = () => {
  let {t} = useTranslation("common")
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let params = useParams();
  const form = useForm();
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  let empList = useSelector((state) => state.employee);
  let filteredObj = empList.find((e) => e?.id === params?.id);

  useEffect(() => {
    setValue("empName", filteredObj?.empName);
    setValue("empEmail", filteredObj?.empEmail);
    setValue("empPhoneNumber", filteredObj?.empPhoneNumber);
  }, [params?.id]);

  function getEmpData(data) {
    let empObj = {
      ...data,
      id: params?.id ? params.id : uuidv4(),
    };

    if (params?.id) {
      dispatch(updateEmp(empObj));
      toast.success(t("Update message"));
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      dispatch(addEmp(empObj));
      toast.success(t("Add message"));
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }

  return (
    <div className="col-md-6 m-auto mt-3 border p-5 pb-3">
      {
        params?.id ? <h2 className="text-center mb-2">
        {t("Update Employee")}
      </h2> : 
      <h2 className="text-center mb-2">
        {t("Add Employee")}
    </h2>
      }
      
      <form onSubmit={handleSubmit(getEmpData)}>
        <div className="mb-3">
          <label className="form-label">{t("Employee Name")}</label>
          <input
            type="text"
            className={
              errors?.empName?.message
                ? "form-control input-error "
                : "form-control"
            }
            {...register("empName", {
              required: {
                value: true,
                message: "Employee name is required",
              },
            })}
          />
          <div className="form-text">
            <p className="text-danger">{errors?.empName?.message}</p>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">{t("Employee Email")}</label>
          <input
            type="email"
            className={
              errors?.empName?.message
                ? "form-control input-error "
                : "form-control"
            }
            {...register("empEmail", {
              required: {
                value: true,
                message: "Employee email is required",
              },

              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email",
              },
            })}
          />
          <div className="form-text">
            <p className="text-danger">{errors?.empEmail?.message}</p>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">{t("Employee Phone Number")}</label>
          <input
            type="number"
            className={
              errors?.empName?.message
                ? "form-control input-error "
                : "form-control"
            }
            {...register("empPhoneNumber", {
              required: {
                value: true,
                message: "Employee phone number is required",
              },
            })}
          />
          <div className="form-text">
            <p className="text-danger">{errors?.empPhoneNumber?.message}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {
            params?.id ?
          <button type="submit" className="btn btn-primary ">
            {t("Add Employee")}
          </button>
          :    <button type="submit" className="btn btn-primary ">
          {t("Update Employee")}
        </button>
          }
        </div>
      </form>
    </div>
  );
};

export default AddUpdateEmp;
