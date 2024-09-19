import React from 'react'
import Contents from './components/Contents/Contents'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Contents />
    </div>
  )
}

export default App;

