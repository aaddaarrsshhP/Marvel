import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Header } from './Header'
import { CoverImage } from './CoverImage'
import { Home } from './Home'
import { Characters } from './Characters'
import { CharacterInfo } from './CharacterInfo'
import { Footer } from './Footer'
import { ComicBuy } from './ComicBuy'
import { Searchbar } from './Searchbar'

export const Routing = () => {
  

  return (
    <Routes>
        <Route path='/' element={<><Header /><CoverImage /><Home /><Footer /></>}/>
        <Route path='/characters' element={<><Header /><Characters /><Footer /></>}/>
        <Route path='/characters/info/:id' element={<><Header /><CharacterInfo /><Footer /></>}/>
        <Route path='/comicbuy/:id' element={<><Header /><ComicBuy /></>}/>
        <Route path='/search' element={<Searchbar />}/>
    </Routes>
  )
}

