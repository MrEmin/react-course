import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg"
    alt="Oh, the Places You'll Go!"
  />
)
const Title = () => <h2>Oh, the Places You'll Go!</h2>
const Author = () => {
  return <h4>Dr. Seuss</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
