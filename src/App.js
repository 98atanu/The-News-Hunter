import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
          <Routes>    
            <Route exact path = "/" element = {<News key= "General" pageSize={5} country= {"in"} category = {'General'}/>}/>
            <Route exact path = "/business"  element = {<News key= "Business" pageSize={5} country= {"in"} category = {'Business'}/>}/>
            <Route exact path = "/entertainment"  element = {<News key= "Entertainment" pageSize={5} country= {"in"} category = {'Entertainment'}/>}/>
            <Route exact path = "/general"  element = {<News key= "General" pageSize={5} country= {"in"} category = {'General'}/>}/>
            <Route exact path = "/health" key= "Health" element = {<News pageSize={5} country= {"in"} category = {'Health'}/>}/>
            <Route exact path = "/science"  element = {<News key= "Science" pageSize={5} country= {"in"} category = {'Science'}/>}/>
            <Route exact path = "/sports"  element = {<News key= "Sports" pageSize={5} country= {"in"} category = {'Sports'}/>}/>
            <Route exact path = "/technology"  element = {<News key= "Technology" pageSize={5} country= {"in"} category = {'Technology'}/>}/>
          </Routes>
        </Router>
      </div>
      )
  }
}
