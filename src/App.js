import React from 'react'
import Contents from './components/Contents/Contents'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Contents/Footer/Footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Contents />
      <Footer />
    </div>
  )
}

export default App;

