import React, { Component } from 'react'
import {showPop} from '../actions/popAction'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer-bar'>
        <div className='show-playing'>
          <img src={'http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg'}/>
          <div className='playing-music'>
            <p className='playing-music-name'>小酒窝</p>
            <span>林俊杰，蔡卓妍</span>
          </div>
        </div>
        <div className='play-btn'>
        <i className='icon icon-play' />
        </div>
        <i className='icon icon-list-music' onClick={e => this.clickHandle(e)}/>
      </div>
    )
  }
  componentWillMount(){
    
    console.log(this.props,1243)
  }
  clickHandle(e){
    const { dispatch } = this.props;
    dispatch(showPop(true))
  }
}
