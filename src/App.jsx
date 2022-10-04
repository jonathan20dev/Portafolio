import React from 'react'
import './App.css';
import {Header} from "./components/header/Header"
import {Home} from "./components/home/Home"

const App = () => {
  return (
    <React.Fragment>
    <Header/>
    <main className="main">
    <Home/>
    </main>
    </React.Fragment>
  )
}

export default App