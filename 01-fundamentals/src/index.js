import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    id: 1,
    author: 'Dr. Seuss',
    title: `Oh, the Places You'll Go!`,
    img: './images/book-1.jpg',
  },
  {
    id: 2,
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
  },
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book
        return <Book key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
