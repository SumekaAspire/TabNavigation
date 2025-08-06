import React from 'react'
import "../css/HomePage.css"

const Footer = () => {
  return (
    <div className="footer-container">
  <footer className='footer'>
            © {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
    </div>
  )
}

export default Footer