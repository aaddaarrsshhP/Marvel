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
    <div className='footer'>
      <div className='footer-section-1'>
      <div className='footer-logo'>
            <img className="img" src='/marvel-logo.png'/>
        </div>
        <div>
          <h4>ABOUT MARVEL</h4>
          <h4>HELP/FAQS</h4>
          <h4>CAREERS</h4>
          <h4>INTERNSHIPS</h4>
        </div>
        <div>
          <h4>ADVERTISINGS</h4>
          <h4>DISNEY+</h4>
          <h4>MARVELHQ.COM</h4>
          <h4>REDDEM DIGITAL COMICS</h4>
        </div>
        <div className='insider-unlimited'>
          <div className='insider'>
            <img src='https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png'/>
            <div>
            <h4>MARVEL INSIDER</h4>
            <h5>Get Rewarded For Being a Marvel Fan</h5>
            </div>
          </div>
          <div className='unlimited'>
            <img src='https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png'/>
            <div>
              <h4>MARVEL UNLIMITED</h4>
              <h5>Access over 30,000+ Digital Comics</h5>
            </div>
          </div>
        </div>
        <div className='follow-marvel'>
          <h4>FOLLOW MARVEL</h4>
          <div className='icons'>
              <div>
                  
               <AiFillFacebook />
               <AiFillInstagram />
               <AiFillPinterest />
               <AiFillTwitterCircle />   
              </div>
              <div>

                <BsChatQuoteFill />
                <FaSnapchatGhost />
                 <FaYoutube />
              </div>
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
        
    </div>
  )
}
