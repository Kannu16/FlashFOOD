import React from 'react'

const EnjoymentSection = () => {
  return (
    <div className="enjoyment-section-inner d-flex flex-row justify-content-between">
        <div className="enjoyment-section-inner-left w-75">
            <h2 className='lh-base'>Finally, enjoy good food, a great deal, and the good deed - you just saved some food from the landfill!</h2>
             <a className='nav-link mt-3' href="/">Learn more about Food Waste {">"} </a>
        </div>
        <img width="30%" src='https://assets-global.website-files.com/5e4482baa13a1926b23e2187/5e50882a8c34f83e2341e710_image.png' alt="img"/>
    </div>
  )
}

export default EnjoymentSection