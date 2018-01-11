import React, { Component } from 'react'

export default class Slidebar extends Component {
  render() {
    return (
      <div className='slidebar' onClick={e => this.hideSlidebar(e)}>
        <div className='slide-wraper'>
          <div className='slide-header'>
            <div className='user-info'></div>
          </div>
          <div className='slide-content'>1</div>
          <div className='slide-footer'>2</div>
        </div>
      </div>
    )
  }
  hideSlidebar(e){
    
  }
}
