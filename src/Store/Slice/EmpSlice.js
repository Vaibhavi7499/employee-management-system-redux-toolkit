import { createSlice } from "@reduxjs/toolkit";

const EmpSlice = createSlice({
  initialState: [],
  name: "employee",

  reducers: {
    addEmp: (state, action) => {
      state.push(action.payload);
    },

    deleteEmp: (state, action) => {
      return state.filter((e) => {
        return e?.id !== action?.payload;
      });
    },

    updateEmp: (state, action) => {
      return state.map((e) => {
        if (e?.id === action?.payload?.id) {
          return {
            ...e,
            empName: action?.payload?.empName,
            empEmail: action?.payload?.empEmail,
            empPhoneNumber: action?.payload?.empPhoneNumber,
          };
        } else {
          return e;
        }
      });
    },

    searchByName: (state, action) => {
      // if (!action?.payload?.trim()?.length) {
      //   return [...state];
      // } else {
      let emp = state.filter((e) => {
        e?.empName?.toLowerCase().includes(action?.payload?.toLowerCase());
      });
      console.log(emp);
    },
  },
  // },
});

export const { addEmp, deleteEmp, updateEmp, searchByName } = EmpSlice.actions;
export default EmpSlice.reducer;
