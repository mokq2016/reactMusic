import React, {Component} from 'react'
import {showPop} from '../actions/popAction'
import {fetMusicUrlData} from '../actions/musicDataAction'
import MusicDetail from './MusicDetail'
export default class Footer extends Component {
  isPlaying = false;
  render() {
    return (
      <div className='footer-bar'>
        <audio ref='myAudio' src={this.props.musicData.url}/>
        <MusicDetail {...this.props}/>
        <div className='show-playing'>
          <img
            src={this
            .props
            .musicData
            .imgUrl
            .replace(/{size}/g, 100)}/>
          <div className='playing-music'>
            <p className='playing-music-name'>{this.props.musicData.songName}</p>
            <span>{this.props.musicData.singerName}</span>
          </div>
        </div>
        <div className='play-btn' onClick={e => this.playClick(e)}>
          <i className='icon icon-play' ref='play' />
        </div>
        <i className='icon icon-list-music' onClick={e => this.clickHandle(e)}/>
      </div>
    )
  }
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetMusicUrlData())
  }

  componentDidUpdate(prevProps, prevState) {
    this.refs.myAudio.play();
      this.isPlaying = true;
      this.refs.play.className = 'icon icon-pause';
  }

  playClick(e) {
    if(this.isPlaying){
      this.isPlaying = false;
      this.refs.play.className = 'icon icon-play';
      this.refs.myAudio.pause();
    }else{
      this.isPlaying = true;
      this.refs.play.className = 'icon icon-pause';
      this.refs.myAudio.play();
    }
  }
  clickHandle(e) {
    const {dispatch} = this.props;
    dispatch(showPop({isShowPop:true,showPlayList:true}))
  }
}
