import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Header } from './Header'
import { CoverImage } from './CoverImage'
import { Home } from './Home'
import { Characters } from './Characters'
import { CharacterInfo } from './CharacterInfo'
import { Footer } from './Footer'

export const Routing = () => {
  

  return (
    <Routes>
        <Route path='/' element={<><Header /><CoverImage /><Home /><Footer /></>}/>
        <Route path='/characters' element={<><Header /><Characters /></>}/>
        <Route path='/characters/info/:id' element={<><Header /><CharacterInfo /></>}/>
    </Routes>
  )
}

