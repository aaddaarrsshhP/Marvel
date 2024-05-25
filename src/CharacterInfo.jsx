import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import './info.css'
import { Link } from 'react-router-dom';

export const CharacterInfo = () => {

  const {id}=useParams()
  const [detail,setDetail]=useState(null)
  
  function rotateLeft(){

    let scrollContainer=document.querySelector(".scroll-container")
    scrollContainer.scrollLeft-=900
  } 


  function rotateRight(){

    let scrollContainer=document.querySelector(".scroll-container")
    scrollContainer.scrollLeft+=900
  }
  
  useEffect(()=>{
    async function apiCall()
        {
            const res=await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1716185690191&apikey=1b10e2ed1095046c6f5876df3d550e5e&hash=c74a3b6955068357357be1b5db1f0f82`);
            const data=await res.data
            const response=await axios.get(`${data.data.results[0].comics.collectionURI}?ts=1716185690191&apikey=1b10e2ed1095046c6f5876df3d550e5e&hash=c74a3b6955068357357be1b5db1f0f82`)
            const dat=await response.data
            console.log(dat);
            setDetail([data.data.results[0],dat.data.results])
            
        }
        apiCall()
  },[id])
  return (
   <>
    {detail ? <div className='info-container'>

        <div className='character-info-upper'>
          <div className='character-info-img'>
            <img src={`${detail[0].thumbnail.path}/portrait_fantastic.jpg`}/>
          </div>
          <div className='character-info-1'>
            <h4>Name: {detail[0].name}</h4>
            <h4>Description: {detail[0].description}</h4>
            <h4><a href={detail[0].urls[1].url}>For more description click this link</a></h4>
          </div>
        </div>
        <div className='character-info-middle'>
          <h2>Comics</h2>
        </div>
        <div className='character-info-lower'>
          <button onClick={()=>rotateLeft()}></button>
           <div className='scroll-container'>
            <div className='grid-1'>
              {detail[1].map((item)=><span key={item.id}><Link to={`/comicbuy/${item.id}`}><img className='comic-img' src={`${item.thumbnail.path}/portrait_fantastic.jpg`}/></Link></span>)}
                
            </div>

         </div>
           
           <button onClick={()=>rotateRight()}></button>
        </div>

    </div>: ''}
    </>
  )
}
