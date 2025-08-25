import React from 'react'
import "../css/HomePage.css"

const Footer = () => {
  return (
    <div className="footer-container">
  <footer className='footer'>
          CopyRight  © {new Date().getFullYear()} - Shoppify | All rights reserved.
        </footer>
    </div>
  )
}

export default Footer