import React from 'react'
import './App.css';
import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"
import { About } from "./components/about/About"
import { Skills } from "./components/skills/Skills"
import {Services} from "./components/services/Services"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services/>
      </main>
    </React.Fragment>
  )
}

export default App