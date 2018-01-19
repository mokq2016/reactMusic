import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './containers/Footer'
import Slidebar from './components/Slidebar'
import PlayList from './containers/PlayList'
import Mask from './containers/Mask'

class App extends Component {
  render() {
    return (
      <div>
        <div className='header-div'>
          <Header pathName={this.props.location.pathname} />
        </div>
        <Footer />
        <Slidebar />
        <PlayList />
        <Mask/>
      </div>
    );
  }
}

export default App;
