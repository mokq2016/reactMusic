import React, {Component} from 'react'
import Range from './Range'
import {showPop, showPopAction} from '../actions/popAction'
import {playMusic, changePlayMode,playNextSong} from '../actions/playMusicAction'

export default class MusicDetail extends Component {
  $audio = null;
  render() {
    return (
      <div
        className="music-detail-wraper"
        style={{
        display: this.props.isShow
          ? 'block'
          : 'none'
      }}>
        <div
          className='bg-div'
          style={{
          backgroundImage: `url(${this
            .props
            .musicData
            .imgUrl
            .replace(/{size}/g, 100)})`
        }}/>
        <div className='music-content'>
          <header className="music-detail-header">
            <i
              className="icon icon-back"
              onClick={e => {
              this.goback(e)
            }}></i>
            <div className='music-desc'>
              <p>{this.props.musicData.songName}</p>
              <span>{this.props.musicData.singerName}</span>
            </div>
            <i className="icon icon-share"></i>
          </header>
          <div className='cd-div'>
            <div className='plank-div'>
              <div
                className={this.props.musicIsPlay
                ? 'switch-div'
                : 'switch-div pause'}
                style={{
                backgroundImage: 'url(imgs/swith.png)'
              }}></div>
            </div>
            <div ref='animateWraper' className='img-div'>
              <div
                ref='animateDiv'
                className={this.props.musicIsPlay
                ? 'animate'
                : ''}>
                <div
                  className='cd-bg'
                  style={{
                  background: `url(imgs/cd-mine.png)`,
                  backgroundSize: '100%'
                }}></div>
                <img
                  alt="tupian"
                  src={this
                  .props
                  .musicData
                  .imgUrl
                  .replace(/{size}/g, 200)}/>
              </div>
            </div>
            <div className='op-div'>
              <i className='icon icon-like'/>
              <i className='icon icon-download'/>
              <i className='icon icon-msg'/>
              <i className='icon icon-list-circle-small'/>
            </div>
          </div>
          <div className='Lyrics-div' style={{
            display: 'none'
          }}>
            Lyrics
          </div>
          <footer className="music-detail-footer">
            <div className='range-div'>
              <span className='curTime'>{this.formatTime(this.props.currentTime)}</span>
              <Range
                {...this.props}
                curTime={this.props.currentTime}
                totalTime={this.props.totalTime}/>
              <span className='totalTime'>{this.formatTime(this.props.totalTime)}</span>
            </div>
            <div className='ctrl-div'>
              <i
                className={this.props.playMode === 0
                ? 'icon icon-music-danqu1'
                : this.props.playMode === 1
                  ? 'icon icon-music-shunxu'
                  : 'icon icon-music-random'}
                onClick={e => {
                e.stopPropagation;
                this
                  .props
                  .dispatch(changePlayMode())
              }}></i>
              <i className="icon icon-prevdetail" onClick={e => {e.stopPropagation();this.props.dispatch(playNextSong(false))}}></i>
              <i
                className={this.props.musicIsPlay
                ? 'icon icon-pause-detail'
                : "icon icon-playdetail"}
                onClick={e => this.playClick(e)}></i>
              <i className="icon icon-nextdetail" onClick={e => {e.stopPropagation();this.props.dispatch(playNextSong(true))}}></i>
              <i className="icon icon-list-music" onClick={e => this.showPlayList(e)}></i>
            </div>

          </footer>
        </div>
      </div>
    )
  }
  goback(e) {
    e.stopPropagation();
    const {dispatch} = this.props;
    dispatch(showPopAction({isShowMusicDetail: false}))
  }
  playClick(e) {
    e.stopPropagation();
    const {dispatch} = this.props;
    if (this.props.musicIsPlay) {
      dispatch(playMusic(false));
      let animateDivTransform = getComputedStyle(this.refs.animateDiv, null).transform;
      let animateWraperTransform = getComputedStyle(this.refs.animateWraper, null).transform
      this.refs.animateWraper.style.transform = animateWraperTransform === 'none'
        ? animateDivTransform
        : animateWraperTransform.concat(' ', animateDivTransform);
    } else {
      dispatch(playMusic(true))
    }
  }

  formatTime(time) {
    if (isNaN(time)) 
      return '00:00'
    let min = time / 60 > 9
      ? Math.floor(time / 60)
      : '0' + Math.floor(time / 60)
    let miao = time % 60 > 10
      ? Math.floor(time % 60)
      : '0' + Math.floor(time % 60)
    return min + ':' + miao
  }
  showPlayList(e) {
    e.stopPropagation();
    const {dispatch} = this.props;
    dispatch(showPop({isShowPop: true, showPlayList: true}))
  }
}