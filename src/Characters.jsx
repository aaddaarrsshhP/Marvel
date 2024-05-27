import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './characters.css'
import { Link } from 'react-router-dom'

export const Characters = () => {

    const [characters,setCharacters]=useState(null)
    const data=characters ? characters.map((item,key)=><>
     <Link to={`/characters/info/${item.id}`}>          
      <div className='characters-card'>
          <div className='characters-card-img'>
          <img className='img' src={`${item.thumbnail.path}/portrait_xlarge.jpg`}/>
          </div>
          <div className='characters-card-title'>
          <h5>{item.name}</h5>
          </div>
         </div>
      </Link>  
    </>) : ''
   
    console.log(data);

    useEffect(()=>{
        async function apiCall()
        {
            const res=await axios.get('http://gateway.marvel.com/v1/public/characters?ts=1716185690191&apikey=1b10e2ed1095046c6f5876df3d550e5e&hash=c74a3b6955068357357be1b5db1f0f82');
            const data=await res.data
            setCharacters(data.data.results);
        }
        apiCall()
    },[])

  return (
    <>
      {characters ?
      <>      
        <div className='page-title-img'>
          <img className='img' src='/x-men.jpg'/>
          <h1>Wolverine</h1>
          <button>Get Me</button>
        </div>
      
      <div className='characters-container'>
       
        {data}
      
      </div>
      </>

      : ''}
    
    </>
  )
}
