import React from 'react'
import { BookList } from './BookList'
import { Form } from './Form';
import { useSelector } from 'react-redux';

 const BookStore = () => {
  const data = useSelector((a) =>a.bookreducer.book)
  console.log(data)
   
  return (
    <>   
    {data.map((dat,i) => {
      
      return(
      <BookList  name = {dat.title} author={dat.author} category={dat.category} id = {i}/>
      )
    })}
                  
    <Form  />
    </>
  )
}
export default BookStore;













