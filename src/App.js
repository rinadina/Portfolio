import React from 'react'
import './App.css'
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './contents/Home'
import Contact from './contents/Contact'
import About from './contents/About'
import Education from './contents/Education'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
      </div>
    </Router>
  )
}

export default App;
