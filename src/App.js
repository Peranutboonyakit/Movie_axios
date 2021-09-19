import React from 'react'
import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:imdbID" component={Detail} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
