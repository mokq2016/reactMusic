import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './containers/Footer'
import Find from './components/Find'
import Slidebar from './components/Slidebar'
import PlayList from './containers/PlayList'
class App extends Component {
  render() {
    return (
      <div>
        <div className='header-div'>
          <Header pathName={this.props.location.pathname}/>
        </div>
        <Footer/>
        <Slidebar />
        <PlayList/>
      </div>
    );
  }
}

export default App;
