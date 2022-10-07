import React from 'react'
import './App.css';
import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"
import { About } from "./components/about/About"
import { Skills } from "./components/skills/Skills"
import { Services } from "./components/services/Services"
import { Qualification } from "./components/qualification/Qualification"
import { Certificates } from './components/Certificates/Certificates';
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { ScrollUp } from "./components/scrollup/ScrollUp"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </React.Fragment>
  )
}

export default App