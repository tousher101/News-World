import React from 'react'
import loading from '../assets/loading.gif'
function Spinner() {
  return (
    <div className='text-center grid'>
      <img src={loading}/>
    </div>
  )
}

export default Spinner
