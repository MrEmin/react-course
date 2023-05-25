import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const title = `Oh, the Places You'll Go!`
const author = 'Dr. Seuss'

const Book = () => {
  return (
    <article className='book'>
      <img src='./images/book-1.jpg' alt="Oh, the Places You'll Go!" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
