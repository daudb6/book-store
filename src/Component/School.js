import React, { useState } from 'react'
import '../Component/school.css'
import { useDispatch } from 'react-redux'
import { addTeacherData,addStudentData } from '../Redux/slice/schoolSlice'

import { useSelector } from 'react-redux'

export const School = () => {
  const [teacherName, setTeacherName] = useState('')
  const [teacherAge, setTeacherAge] = useState('')
  const [studentName, setStudentName] = useState('')
  const [studentAge, setStudentAge] = useState('')
  

  

    const teacher = useSelector((state) => state.schoolReducer.teacher)
    const dispatch = useDispatch()

    const student = useSelector((state) => state.schoolReducer.student)
    console.log(student)
    // console.log(student)
     
    
      
  

  return (
    <div className='main'>
      <div className='teacher'>
        {teacher.map((e) => {
          return (
            <>

            <h1>Teacher Name : {e.teacherName}</h1>
            <h2>Teacher Age: {e.teacherAge}</h2>
            </>

          )
        })}
       

       
        <div>
          <input onChange= {(e) =>setTeacherName(e.target.value) }type='text' />
          <input onChange= {(e) =>setTeacherAge(e.target.value) } type='text'/>
          <button onClick = {() => dispatch(addTeacherData({teacherName,teacherAge}))} type='button'>submit</button>
        </div>

        </div>
        <div className='student'>
      {student.map((a) => {
          return(
            <>
            <h1>Student Name: {a.studentName}</h1>
       <h2> Student Age : {a.studentAge}</h2>
           </>

          )
         
        })}

     
      <div>
          <input onChange= {(e) =>setStudentName(e.target.value) }type='text' />
          <input onChange= {(e) =>setStudentAge(e.target.value) }type='text'/>
          <button onClick = {() =>dispatch(addStudentData({studentName,studentAge}))}type='button'>submit</button>
        </div>
      </div>

    
    
    </div>
  )
}
