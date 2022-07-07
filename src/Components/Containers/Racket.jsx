import React from 'react'

import MainRacket from '../../Assets/images/store/1-main-racket.jpg'
import RacketDetail from '../../Assets/images/store/2-racket-detail.jpg'

import ThirdRacket from '../../Assets/images/store/3-racket-detail-third.jpg'
import LastRacket from '../../Assets/images/store/4-racket-detail-last.jpg'

const Racket = () => {
  return (
    
    <div className='racket-container'>
      <img src={ MainRacket } className='main-image'/>
      
      <div className='racket-details'>
        <img src={ MainRacket }/>
        <img src={ RacketDetail }/>
        
        <img src={ ThirdRacket }/>
        <img src={ LastRacket }/>
      </div>
    </div>
  )
}

export default Racket
