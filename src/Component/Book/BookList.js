import React from 'react';
import './BookList.css';
import { Progress } from '../Progress';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../Redux/slice/BookSlice';

export const BookList = ({ name, author, category,id }) => {
const dispatch = useDispatch()
  return (
    <div className='bookstore scale-in-hor-left'>
      <div className='store-info'>
        <div className='info'>
          <h2>{category}</h2>
          <h1>{author}</h1>
          <span>{name}</span>
        </div>
        <div className='buttons'>
          <button className='btn'>Comments</button>
          <button onClick={() => dispatch(removeBook(id)) }>Remove </button>
          <button>Edits</button>
        </div>
      </div>
      <div className='main-store'>
        <div className='report'>
          <Progress />
          <div className='report-details'>
            <span>64%</span> <span>Completed</span>
          </div>
        </div>
        <div className='bar'></div>
        <div className='new-progress'>
          <h4>Current Chapter</h4>
          <p>Chapter 3 of 5</p>
          <button className='button'>Update Progress</button>
        </div>
      </div>
    </div>
  );
};

