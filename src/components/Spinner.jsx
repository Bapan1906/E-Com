import React from 'react'
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-72'>
      <div className='Spinner'></div>
      <br></br>
      <h1 className='font-bold text-xm'>Loading...</h1>
    </div>
  )
}

export default Spinner;
