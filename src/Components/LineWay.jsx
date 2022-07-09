import React from 'react'
import Out from '../Assets/svg/9-out.svg'
import AnimationTennis from '../Assets/1-nadal-down.gif'

const LineWay = () => {
  return (
    <div className='line-way'>
      <div className='out'>

        <h1>OUT!</h1>
        <img src={ Out }/>
      </div>

      <img src={ AnimationTennis } id='animation'/>

      <a href='https://psilva999.github.io/fedal-tennis/'>second serve</a>
    </div>

  )
}

export default LineWay
