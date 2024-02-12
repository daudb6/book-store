import { createSlice } from "@reduxjs/toolkit";

const schoolSlice = createSlice({
  name:"School",
  initialState:{
    teacher:[],
    student:[],

  },
  reducers:{
    addTeacherData: (state,action) => {
      state.teacher.push(action.payload)
    },
    addStudentData: (state,action) => {
      state.student.push(action.payload)

    }
  }
})
export default schoolSlice.reducer;
export const {addTeacherData,addStudentData} = schoolSlice.actions