import React from 'react'

class StorePicker extends React.Component {
    render() {
        return (
            <>
              <p>Fish!</p>
              <form className='store-selector'>
              <h2>please enter a store</h2>
              <input type='text' required placeholder='Store Name'></input>
              <button type='submit'>Visit Store</button>
              </form>
            </>
        )
    }
}

export default StorePicker
