import React,{createContext, useEffect, useState} from 'react'
import { BookList } from './BookList'
import { Form } from './Form';



 
export const bookstore = createContext()

 const BookStore = () => {
  let [title,setTitle] = useState('')
  let [author,setAuthor] = useState('')
  let [category,setCategory] = useState('')
  let [data,setData] = useState([])
  let handleData = () => {
    setData ((prevState) => {
      return [...prevState,{title,author,category}]

    })
    
}

  
  return (
    <>
    {data.map((e) => {
      return(
        <BookList  name = {e.title} author={e.author} category={e.category}/>
      )
    })}
    
        
     
    
  
     <bookstore.Provider value={{setTitle, setAuthor, setCategory ,handleData}}>           
    <Form  />
    </bookstore.Provider>
   
   
    
    </>
  )
}
export default BookStore;













