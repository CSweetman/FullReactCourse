export const Book: React.FunctionComponent = ({img, title, author}: any)  => {
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