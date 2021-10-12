import * as React from 'react';
import ReactDOM from 'react-dom';
import { Component, MouseEvent } from 'react';
import { books } from './books';
// CSS
import './index.css'
import { Book } from './book';

//set up vars



function BookList(){
  return( 
    <section className = "booklist">
    {books.map( (book) => {
      return(
        <Book key={book.id} {...book}></Book>
      )
    })}
    </section>
  )
}





ReactDOM.render(<BookList/>,document.getElementById('root'));
