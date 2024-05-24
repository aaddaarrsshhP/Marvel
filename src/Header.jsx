import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './header.css'
import { TfiMenu } from "react-icons/tfi";
import { Link } from 'react-router-dom';

export const Header = () => {


   
   const [charac,setCharac]=useState(null)    
   console.log(charac);
    useEffect(()=>{

        document.addEventListener("mouseover",(e)=>{
        
        const isDrowpdown=e.target.matches("[data-dropdown-button]")
        
        console.log(isDrowpdown,"isdrop");
        if(!isDrowpdown && e.target.closest("[data-dropdown]")!=null) return
        
        let closesetDrop;
        if(isDrowpdown)
        {
           closesetDrop=e.target.closest("[data-dropdown]")
           closesetDrop.classList.toggle("active")
        }
        console.log(closesetDrop);
                document.querySelectorAll("[data-dropdown]").forEach(drop=>{
            if(drop==closesetDrop)return 
            drop.classList.remove("active")
        })
    
    }

      

      

        )

        async function charactersCall()
        {
            const res=await axios.get("http://gateway.marvel.com/v1/public/characters?ts=1716185690191&apikey=1b10e2ed1095046c6f5876df3d550e5e&hash=c74a3b6955068357357be1b5db1f0f82")
            const data=await res.data
            setCharac(data.data.results);
            
        }
        charactersCall()
    }
    
    
    ,[])
  return (
    <>
       
       
      <header>
        <nav className='nav'>
         
         <Link to={'/'}>
            <div className='logo-button'>
            <img src='/marvel-logo.png'/>  
          </div>  
        </Link>
 
          <div className='vibhajan'>  
                  
            <div className='dropdown' data-dropdown>  
            <button className='home-button character-button' data-dropdown-button>Characters</button>
            <div className='dropdown-menu character-menu'>
            <Link to={`/characters/info/${charac ? charac[0].id : 0}`}>
               <div className='characters'>
                 <img className='imgCha' src={charac ? `${charac[0].thumbnail.path}/portrait_xlarge.jpg` : ''}/>
                 <h5>{charac ? charac[0].name: ''}</h5>               
               </div>
              </Link>

              <Link to={`/characters/info/${charac ? charac[13].id : 0}`}>
               <div className='characters middle'>
                 
                  <img className='imgCha' src={charac ? `${charac[13].thumbnail.path}/portrait_xlarge.jpg` : ''}/>
                  <h5>{charac ? charac[13].name: ''}</h5>
               </div>
               </Link>

               <Link to={`/characters/info/${charac ? charac[16].id : 0}`}>
               <div className='characters'>
                    
                  <img className='imgCha' src={charac ? `${charac[16].thumbnail.path}/portrait_xlarge.jpg` : ''}/>
                  <h5>{charac ?charac[16].name: ''}</h5>
               </div>
               </Link> 
               <Link style={{textDecoration: 'none'}} to='/characters'>
                <h4 className='seeall'>See All</h4>
                </Link>
            </div>
         </div>
           
            <button className='series-button'>Stories</button>
            <button className='stories-button'>Comics</button>
            
        </div>
         <div>  
          <div className='burgerdown ' data-burger-dropdown>
            <button className='burger-button' data-burger-dropdown-button><TfiMenu /></button>
            <div className='burger-menu'>
 
               <Link style={{textDecoration: 'none'}} to={'/characters'}>                
                <button className='responsive-button'>Characters</button>
               </Link>
 
                <button className='responsive-button'>Stories</button>
                <button className='responsive-button'>Comics</button>
                
            </div>
          </div>
        </div>   
        </nav>
      </header>

    </>
  )
}
