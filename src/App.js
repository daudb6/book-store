import Navbar from "./Component/Navbar/Navbar";
import './App.css';
import { Route, Routes } from "react-router-dom";
import BookStore from "./Component/Book/BookStore";
function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
    <Route exact path="/books" element={<BookStore />} />
    <Route path="/categories" element={<h1>Under Construction</h1>} />
    <Route path="*" element={<h1>Invalid Routes</h1>} />
    </Routes>
    </>
  )
}

export default App;
