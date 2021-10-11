import * as React from 'react';
import ReactDOM from 'react-dom';
import { Component, MouseEvent } from 'react';

// CSS
import './index.css'
//set up vars
const books = [
  {
    id: 1,
    author: "Eric Cale",
    title: 'The Very Hungry Caterpillar',
    img: "https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg"
  },
  {
    id: 2,
    author: "Amelia Hepworth",
    title: 'I Love You to the Moon and Back',
    img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg"
  },
  {
    id: 3,
    author:'Bill Martin Jr.',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg'
  },
]


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


const Book: React.FunctionComponent = ({img, title, author}: any)  => {
  // attribute, eventhandler
  //onClick, onMouseOver
  const clickHandler = () =>{
    alert(title)
  }

  const complexExample = (output: String) =>{
    console.log(output)
  }

  return <article className = "book" onMouseOver={() =>{
    console.log(title)
  }}>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <button type='button' onClick={clickHandler}>reference example</button>
    <button type='button' onClick={ () =>
      complexExample(title)
    }>More complex example</button>
  </article>
} 


ReactDOM.render(<BookList/>,document.getElementById('root'));
