import React from 'react'
import { useState } from 'react'
import Book from './Book'

const Menu = ({ books }) => {
  return (
    <div className='section-center'>
      {books.map((book) => {
        return <Book book={book} />
      })}
    </div>
  )
}

export default Menu
