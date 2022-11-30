import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { AboutDetailDiv, AboutImage,AboutDiv,AboutTitle } from './About.style'
import coding from "../../assets/coding.svg"

const About = () => {
  return (
    <>
      <Navbar />
        <AboutDiv>
          <AboutImage src={coding} />
          <AboutTitle>About Software Developer <span>Ali Aksoy</span></AboutTitle>
          <AboutDetailDiv>
            <h2>I'm Ali</h2>
            <p style={{fontSize:"1rem", fontWeight:"600"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p style={{fontSize:"1rem", fontWeight:"600"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, quibusdam?</p>
            <p style={{fontSize:"1rem", fontWeight:"600"}}><span  style={{textDecoration:"underline", color:"white" ,fontSize:"1.1rem"}}>Send email:</span> alifeyza4017@gmail.com</p>
          </AboutDetailDiv>
        </AboutDiv>
    </>
  )
}

export default About