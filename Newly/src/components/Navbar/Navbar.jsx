import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      {/* n stands for navbar */}
      <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Oparaji</div>
            <span>toggle</span>
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyle: 'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button n-button'>contact</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
