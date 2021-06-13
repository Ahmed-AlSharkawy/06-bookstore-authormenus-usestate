import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import booksList from './booksList'

const cats = []
booksList.forEach((book) => {
  if (!cats.includes(book.author)) cats.push(book.author)
  cats.sort()
})

function App() {
  const [books, setBooks] = useState(booksList)

  const filterBooks = (author) => {
    if (!author) setBooks(booksList)
    else {
      const newList = booksList.filter((book) => book.author === author)
      setBooks(newList)
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories cats={cats} filterBooks={filterBooks} />
        <Menu books={books} />
      </section>
    </main>
  )
}

export default App
