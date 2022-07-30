/*
 * @Author: mkq 873302396@qq.com
 * @Date: 2018-01-21 17:41:07
 * @LastEditors: mkq 873302396@qq.com
 * @LastEditTime: 2022-07-30 15:32:57
 * @FilePath: \workPlace_reactMusic\react-music\src\components\Footer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react'
import {showPop,showPopAction} from '../actions/popAction'
import {fetMusicUrlData} from '../actions/musicDataAction'
import {playMusic,updateMusicTime,playNextSong,updateTotalTime} from '../actions/playMusicAction'
import MusicDetail from './MusicDetail'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-bar' onClick={ e=>{this.showMusicDetail()}}>
        <audio ref='myAudio' id='myAudio' src={this.props.musicData.url} onCanPlay={e => this.canPlay(e)} onEnded={e=>{this.props.dispatch(playNextSong(true))}} onTimeUpdate={e => this.musicTimeUpdate(e)}/>
        <MusicDetail isShow={this.props.isShowMusicDetail} {...this.props}/>      
        <div className='show-playing' >
          <img
            alt="图片"
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
  musicTimeUpdate(){
    
    const {dispatch} = this.props;
    dispatch(updateMusicTime(document.querySelector('#myAudio').currentTime ))
  }
  canPlay(e){
    this.props.dispatch(updateTotalTime(this.refs.myAudio.duration))
    if(this.props.musicIsPlay){
      this.refs.myAudio.play();
    }
  }
  
}
