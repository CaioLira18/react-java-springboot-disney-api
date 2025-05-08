import React from 'react'

const Box = () => {
  return (
    <div className="container-box">
      <div className="box">
        <div className="title">
          <h1>Welcome to the Disney World</h1>
          <p>Explore All Disney World</p>
          <div className="button-disney">
            <button className="disney-button">Click Here</button>
            <button className="disney-button">Click Here</button>
          </div>
          

        </div>
      </div>
      <div className='box-image'>
            <img src="../public/images/render/tinkerbell/tinkerBell.png" alt="" />
    </div>
    </div>
  )
}

export default Box