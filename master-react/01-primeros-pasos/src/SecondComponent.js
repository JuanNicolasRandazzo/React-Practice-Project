import React from 'react'

export const SecondComponent = () => {

    const books = ["Harry Potter", "The Way of Kings", "Wind and Truth", "Rithm of War"];
    
  return (
    <div className='second-component'>
        <h1>Book List</h1>
        {books.length >= 1 ?
            <ul>
                {
                    books.map((book, index) => {
                        return <li key={index}>{book}</li>;
                    })
                }
            </ul>
            :
            <p>There's no books.</p>
        }
    </div>
  )
}
