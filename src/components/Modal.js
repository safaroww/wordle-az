import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Super!</h1>
                <p className='solution'>{solution}</p>
                <p>Cavabı {turn} yoxlamada tapdın :)</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Eybi yox!</h1>
                <p className='solution'>{solution}</p>
                <p>Gələn dəfə bol şans :)</p>
            </div>
        )}
    </div>  
  )
}
