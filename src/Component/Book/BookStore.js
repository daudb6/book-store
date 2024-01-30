import React from 'react'
import { BookList } from './BookList'
import { Form } from './Form';



 const BookStore = () => {
  return (
    <>
    <BookList name={'Daud'} title={'Hero book'} category={'animal'}/>
    <BookList name={'Muneeb'} title={'jungle book'} category={'animal'}/>
    <Form />
    
    
    </>
  )
}
export default BookStore;
