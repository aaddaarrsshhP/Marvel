import React, { useEffect } from 'react'
import './home.css'
import axios from 'axios'

export const Home = () => {



  return (
     <>
       
        <div className='movies-container'>
          <a href='https://www.marvel.com/movies/deadpool-and-wolverine'>
          <div className='movies-card'>
            <div className='movies-card-img'>
              <img className='img' src='https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_02.jpg'/>
            </div>
            <h5>Deadpool and Wolverine</h5>
            <h6>JULY 26,2024</h6>
          </div>
          </a> 
          <a href=''>
          <div className='movies-card'>
            <div className='movies-card-img'>
              <img className='img' src='https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg'/>
            </div>
            <h5>Avengers:Endgame</h5>
            <h6>April 26,2019</h6>
          </div>
          </a>
          <a href=''> 
          <div className='movies-card'>
            <div className='movies-card-img'>
              <img className='img' src='https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg'/>
            </div>
            <h5>Wakanda Forever</h5>
            <h6>November 11, 2022</h6>
          </div>
          </a>
          <a href=''>
          <div className='movies-card'>
            <div className='movies-card-img'>
              <img className='img' src='https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg'/>
            </div>
            <h5>Black Widow</h5>
            <h6>JULY 9,2021</h6>
          </div>
          </a>
          <a href=''>
          <div className='movies-card'>
            <div className='movies-card-img'>
              <img className='img' src='https://cdn.marvel.com/content/1x/avengersthekangdynasty_lob_crd_01.jpg'/>
            </div>
            <h5>Avengers: The Kang Dynasty</h5>
            <h6>May 1, 2026</h6>
          </div>
          </a>
          <a href=''>
          <div className='movies-card'>
            <div className='movies-card-img'>
              <img className='img' src='https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg'/>
            </div>
           
            <h5>Multiverse of Madness</h5>
            <h6>May 6, 2022</h6>
            
          </div>
          </a>
        </div>
        
       <h1 className='latest-news'>Latest Comic News</h1>
        <div className='comic-news-1'>
          <div className='comic-big-news-img'>
            <img className='img' src='https://cdn.marvel.com/content/1x/venomwar2024001_cover.jpg'/>
          </div>
          <div className='comic-big-news'>
            <h4>COMICS</h4>
            <a href='https://www.marvel.com/articles/comics/venom-war-august-titles-tie-in-covers-list'><h1>Spider-Man, Black Widow, & More Choose Sides as 'Venom War' Explodes Across the Marvel Universe</h1></a>
          </div>
        </div>
        
          
          <div className='comic-news-2'>
              
              <div className='comic-news-2-child'>
                <div className='comic-news-2-img'>
                  <img className='img' src='https://cdn.marvel.com/content/1x/ultblap2024007_cov.jpg'/>
                </div>
                <a href='https://www.marvel.com/articles/comics/ultimate-universe-august-2024-spider-man-black-panther-x-men'><h5>Kingpin Forms the Sinister Six, Ultimate She-Hulk Debuts, & More in Upcoming Ultimate Issues</h5></a>
              </div>
          

          <div className='comic-news-2-child'>
                <div className='comic-news-2-img'>
                  <img className='img' src='https://cdn.marvel.com/content/1x/asm2022054_garron_deadpool-kills.jpg'/>
                </div>
                <a href='https://www.marvel.com/articles/comics/deadpool-kills-the-marvel-universe-variant-covers'><h5>'Deadpool Kills the Marvel Universe' Covers Send the Merc with the Mouth on a Slaughter Spree</h5></a> 
              </div>
          

          <div className='comic-news-2-child'>
                <div className='comic-news-2-img'>
                  <img className='img' src='https://cdn.marvel.com/content/1x/spider-gwen_ghost_spider_1.jpg'/>
                </div>
                <a href='https://www.marvel.com/articles/comics/may-22-2024-new-marvel-comics-collections-releases-full-list'><h5>May 22's New Marvel Comics: The Full List</h5></a>
              </div>
          </div>
      

     </>
      
  )
}
