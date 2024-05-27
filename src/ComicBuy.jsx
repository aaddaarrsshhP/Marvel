import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './comicbuy.css'

export const ComicBuy = () => {
  
    const [detail,setDetail]=useState(null)
    const {id}=useParams();
    console.log(detail);

    useEffect(()=>{

        
    async function apiCall()
    {
        const res=await axios.get(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1716185690191&apikey=1b10e2ed1095046c6f5876df3d550e5e&hash=c74a3b6955068357357be1b5db1f0f82`);
        const data=await res.data
        setDetail(data.data.results[0]);
    }

    apiCall()
},[id])
  return (
    <>
      <div>
         {detail ? 
         
         <div className='comic-container'>
              <div className='description-container'>
                 <img src={`${detail.thumbnail.path}/portrait_fantastic.jpg`}/>
                 <div className='title-descrip'>
                   <h5><label>Title: </label>{detail.title}</h5>
                   <h5><label>Description: </label>{detail.description ? detail.description : 'Not available'}</h5>
                   <h5><label>Price: </label>${detail.prices[0].price}</h5>  
                   <button>Buy Now</button> 
                 </div>   
              </div>
                      
         </div>
         
         
         :''}   
      </div>
    </>
  )
}
