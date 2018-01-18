import React, {Component} from 'react'
import {showPop,showPopAction} from '../actions/popAction'
import {fetMusicUrlData} from '../actions/musicDataAction'
import {playMusic} from '../actions/playMusicAction'
import MusicDetail from './MusicDetail'

export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='footer-bar' onClick={ e=>{this.showMusicDetail()}}>
        <audio ref='myAudio' id='myAudio' src={this.props.musicData.url}/>
        <MusicDetail isShow={this.props.isShowMusicDetail} {...this.props}/>      
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
          <i className={this.props.musicIsPlay ? 'icon icon-pause':'icon icon-play'} ref='play' />
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
    if(!prevProps.musicIsPlay && this.props.musicIsPlay){
      this.refs.myAudio.play();
    }else if(prevProps.musicIsPlay && !this.props.musicIsPlay){
      this.refs.myAudio.pause();
    }
    console.log(prevProps,prevState)
  }

  playClick(e) {
    e.stopPropagation();
    const { dispatch } = this.props;
    if(this.props.musicIsPlay){
      dispatch(playMusic(false));
    }else{
      dispatch(playMusic(true)); 
    }
  }
  clickHandle(e) {
    e.stopPropagation();
    const {dispatch} = this.props;
    dispatch(showPop({isShowPop:true,showPlayList:true}))
  }
  showMusicDetail(){
    const {dispatch} = this.props;
    dispatch(showPopAction({isShowMusicDetail:true}))
  }
}
