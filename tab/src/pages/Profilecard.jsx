import React from 'react'
import '../css/ProfileCard.css'

const Profilecard = ({name, description, imageUrl}) => {
  return (
  <div>
      <div className='card'>
            <h2>CEO</h2>

        <img src={imageUrl} alt={name} className="avatar"></img>
        <h2 className='name'>{name}</h2>
        <p className='desc'>{description}</p>
    </div>
  </div>
  )
}

export default Profilecard