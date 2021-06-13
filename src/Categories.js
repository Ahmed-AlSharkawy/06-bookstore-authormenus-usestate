import React from 'react'

const Categories = ({ cats, filterBooks }) => {
  return (
    <div className='btn-container' style={{ direction: 'rtl' }}>
      <button
        type='button'
        className='filter-btn'
        onClick={() => filterBooks('')}
      >
        الجميع
      </button>
      {cats.map((element, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterBooks(element)}
          >
            {element}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
