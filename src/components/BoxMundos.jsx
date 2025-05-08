import React from 'react'

const BoxMundos = () => {
  return (
    <div>
    <div id='franquia' className="container-box-section">
      <img src="../public/images/fundos/viva.jpeg" alt="" className="background-img" />
      <div className="box-section">
        <div className="title-section">
          <div className="logofilme">
            <img src="./public/images/franquias/viva.png" alt="" />
          </div>
          <p>Explore a Franquia Viva a Vida é uma Festa</p>
          <div className="button-disney-section">
            <button className="disney-button">Explore a Franquia</button>
          </div>
        </div>
      </div>
    </div>

    <div id='franquia' className="container-box-section">
      <img src="../public/images/fundos/disneyfadas.jpg" alt="" className="background-img" />
      <div className="box-section">
        <div className="title-section">
          <div className="logo">
          <img className='logo_fadas' src="../public/images/fundos/Logo_Fadas.png" alt="" />
          </div>
          <div className="logofilme">
            <img src="./public/images/franquias/tinkerbell.png" alt="" />
          </div>
          <p>Explore o Universo Disney Fadas</p>
          <div className="button-disney-section">
            <button className="disney-button">Explore a Franquia</button>
          </div>
        </div>
      </div>
    </div>

    <div id='franquia' className="container-box-section">
      <img src="../public/images/fundos/frozen.jpg" alt="" className="background-img" />
      <div className="box-section">
        <div className="title-section">
          <div className="logofilme">
            <img src="./public/images/franquias/frozenLogo.svg" alt="" />
          </div>
          <p>Explore o Universo de Frozen</p>
          <div className="button-disney-section">
            <button className="disney-button">Explore a Franquia</button>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  )
}

export default BoxMundos