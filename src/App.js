import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Skills from './components/skills';
import Projects from './components/projects';
import Team from './components/team';
import Progress from './components/progress';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Team />
        <Progress />
        <Contact />
        <Footer />  
       
      </div>
    );
  }
}

export default App;
