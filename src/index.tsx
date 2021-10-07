import * as React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

// CSS
import './index.css'
//set up vars
const firstBook = {
  author: "Eric Cale",
  title: 'The Very Hungry Caterpillar',
  img: "https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._SY355_BO1,204,203,200_.jpg"
}

const secondBook = {
  author: "Amelia Hepworth",
  title: 'I Love You to the Moon and Back',
  img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
}

function BookList(){
  return( 
    <section className = "booklist">
      <Book img={firstBook.img} title={firstBook.title} author = {firstBook.author}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione error id iusto consectetur impedit voluptatibus provident rem, doloribus quis!</p>
      </Book>
      <Book title={secondBook.title} author = {secondBook.author} img={secondBook.img}/>
    </section>
  )
}

const Book = ({img, title, author, children}: any) :JSX.Element => {
  //const {img, title, author} = props
  return <article className = "book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    {children}
  </article>
} 


ReactDOM.render(<BookList/>,document.getElementById('root'));
