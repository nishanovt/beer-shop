import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { List } from './List'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  )
}

export default Pages
