import React from 'react'
import tinkerBellLogo from '../../public/images/franquias/tinkerbell.png'
import frozen from '../../public/images/franquias/frozen.png'
import moana from '../../public/images/franquias/moana.png'
import Divider from './Divider'

const Home = () => {
  return (
    <div>
      <div className="franquias-container">
        <h1>Franquias</h1>
            <div className='box-images'>
                <img src={ tinkerBellLogo } alt="" />
                <img src={ frozen } alt="" />
                <img src={ moana } alt="" />
            </div>    
      </div>
      <Divider />

      
    </div>
  )
}

export default Home
