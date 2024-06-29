import "./App.css"
import Toolbar from "./toolbar/Toolbar"
import Content from "./cards/content"
import word from "./types/word"
import { useState } from "react"
import { useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, type DocumentData, CollectionReference } from "firebase/firestore/lite"
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from "./pages/Dashboard"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp } from "./pages/SignUp"

function App() {

  return (
    <div>
    <Toolbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes> 
      </BrowserRouter>
    </div>

    // <div className="bg-space h-full grid place-items-center">
    //   <Toolbar app={app}/>
    //   <Content words={words}/>
    // </div>
  )
}

export default App
