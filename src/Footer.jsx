import React from 'react'
import './footer.css'
import { AiFillFacebook } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPinterest } from "react-icons/ai"
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { BsChatQuoteFill } from "react-icons/bs";


export const Footer = () => {
  return (
    <>
      
      <footer className='footer'>
         <div className='grid-footer'>
            <div className='logo'>
              <div>
                 <img src='/marvel-logo.png'/>
              </div>
                
            </div>
            <div>

                <h5>ABOUT MARVEL</h5>
                <h5>HELP/FAQS</h5>
                <h5>CAREERS</h5>
                <h5>INTERNSHIPS</h5>

            </div>
            <div>

               <h5>ADVERTISINGS</h5>
               <h5>DISNEY+</h5>
               <h5>MARVELHQ.COM</h5>
               <h5>REDDEM DIGITAL COMICS</h5>

            </div>
            <div className='follow-icons'>
              <h5>FOLLOW MARVELS</h5>
              <div className='icons'>
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillPinterest />
                <AiFillTwitterCircle />
              </div>
              <div className='icons'>
                <BsChatQuoteFill />
                <FaSnapchatGhost />
                <FaYoutube />
              </div>
            </div>
         </div>

<div className='footer-section-2'>
    <h6>Terms Of Use</h6>
    <h6>Privacy Policy</h6>
    <h6>Addendum To The Global Privacy Policy</h6>
    <h6>Interset-Based Ads</h6>
    <h6>Licence Agreement</h6>
    <h6>© 2024 MARVEL</h6>
</div>
      </footer>
    </>
    )
}
