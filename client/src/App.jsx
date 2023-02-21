import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import TextEditor from './pages/TextEditor'
import Write from './pages/Write'

import './sass/main.scss'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" exact element={<Write />} />
        <Route path="/write/:id" element={<TextEditor />} />
      </Routes>
    </>
  )
}

export default App
