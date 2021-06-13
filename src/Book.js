import React from 'react'
import { useState } from 'react'

const Book = ({ book }) => {
  const { id, img, title, author, info, price } = book

  const [readAll, setReadAll] = useState(false)

  return (
    <article key={id} className='menu-item'>
      <img className='photo' src={img} alt={title} />
      <div className='item-info'>
        <header>
          <div>
            <h4>{title}</h4>
            <h5>{author}</h5>
          </div>
          <h4 className='price'>{price}</h4>
        </header>
        <p className='item-text'>
          {readAll ? info : `${info.substring(0, 150)}...`}
          <button className='readmore' onClick={() => setReadAll(!readAll)}>
            &nbsp;
            {readAll ? 'فقرة أصغر' : 'فقرة كاملة'}
          </button>
        </p>
      </div>
    </article>
  )
}

export default Book
