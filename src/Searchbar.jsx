import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './input.css'
import { Link } from 'react-router-dom'

export const Searchbar = () => {

    const [search,setSearch]=useState('')
    const [character,setCharac]=useState([])
    let result=null;
    console.log(character);
    console.log(search);

    function find()
    {
        result=character.filter((item)=>{

              const val1=item.name.toString().toLowerCase();
              console.log(val1);
              const val2=search.toString().toLowerCase();
              console.log(val2);
              const bo=val1.includes(val2)
              return val1.includes(val2);
                
        })

        console.log(result);
    }

    search.length > 0 && find();

    useEffect(()=>{



        async function charactersCall()
        {
            const res=await axios.get("http://gateway.marvel.com/v1/public/characters?ts=1716185690191&apikey=1b10e2ed1095046c6f5876df3d550e5e&hash=c74a3b6955068357357be1b5db1f0f82")
            const data=await res.data
            setCharac(data.data.results);
            
        }
        charactersCall()

    },[])
  return (
    <>
      
      <div className='input'>
        <img src='/marvel-1641554_1280.jpg'/>
        <input 
        value={search}
        onChange={(e)=>setSearch(e.target.value)} 
        type='text' 
        placeholder='Search Character'/>
      </div>
      {result ? <h2>Search Results</h2> : ''}
      <div className='card-container'>
        
          {result==null & search.length < 1 ?  <h3>Find a Character</h3> : result.length > 0 ? result.map(item=><Link to={`/characters/info/${item.id}`}><div key={item.id} className='card'> <img src={`${item.thumbnail.path}/portrait_fantastic.jpg`}/> </div></Link>) : <h3>Character Not Available</h3>}  
      
      </div>
    </>
  )
}
