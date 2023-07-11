import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { List } from './List'
import { Single } from './Single'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:beer_name" element={<Single />} />
    </Routes>
  )
}

export default Pages
