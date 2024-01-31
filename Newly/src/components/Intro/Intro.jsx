import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassimoji from '../../img/glassesimoji.png'
import boy from '../../img/boy.png'
import FloatingDiv from '../FloatingDiv/Floating'



const Intro = () => {
  return (
    <div>
      <div className="i-wrapper">
        <div className="i-left">

            <div className="i-name">
                <span>Hy! I am </span>
                <span>Oparaji Tc</span>
                <span>Frontend Developer and a Mathematics tutor with a high level of experience in both field</span>
                <span></span>
            </div>

            <button className='button i-button '>Hire me</button>

            <div className="i-icons">
               <img src={Github} alt="" /> 
               <img src={Linkedin} alt="" /> 
               <img src={Instagram} alt="" /> 
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassimoji} alt="" />

            <div style={{top: '-4%', left: '60%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>

            <div style={{top: '18rem', left: '2rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>

            {/* blur effect */}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>

            <div className='blur' style={{background: '#C1F5FF',
              top: '17rem', width: '21rem', height: '11rem', left: '-9rem'

            }}>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
