import React from 'react'
import './Form.css'

export const Form = () => {
  return (
    <>
    <div className='line-bar'></div>
    <div className='form scale-in-hor-left'>
      <div className='form-heading'>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div className='form-details'>
        <div className='form-description'>
        <input type="text"  placeholder='Add Title' /> 
        <input type="text"  placeholder='Add Author' /> 
        <input type="text"  placeholder='Add Category' /> 

          <button className='button1'>Add Book</button>
        </div>
      </div>
    </div>
    </>
  )
}
