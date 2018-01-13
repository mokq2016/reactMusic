import React, { Component } from 'react'
import {showPop} from '../actions/popAction'
import {fetMusicUrlData} from '../actions/musicDataAction'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer-bar'>
      <audio ref='myAudio' src={this.props.musicUrlData.data[0].url}/>
        <div className='show-playing'>
          <img src={this.props.musicData.al.picUrl}/>
          <div className='playing-music'>
            <p className='playing-music-name'>{this.props.musicData.name}</p>
            <span>{this.props.musicData.ar[0].name}</span>
          </div>
        </div>
        <div className='play-btn'>
        <i className='icon icon-play' onClick={e=> this.playClick(e)}/>
        </div>
        <i className='icon icon-list-music' onClick={e => this.clickHandle(e)}/>
      </div>
    )
  }
  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(fetMusicUrlData())
  }
  playClick(e){
    this.refs.myAudio.play()
  }
  clickHandle(e){
    const { dispatch } = this.props;
    dispatch(showPop(true))
  }
}
