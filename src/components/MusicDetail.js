import React, { Component } from 'react'
import Range from './Range'

export default class MusicDetail extends Component {
  render() {
    return (
      <div className="music-detail-wraper">
        <div
          className='bg-div'
          style={{
            backgroundImage: `url(${this
              .props
              .musicData
              .imgUrl
              .replace(/{size}/g, 100)})`
          }} />
        <div className='music-content'>
          <header className="music-detail-header">
            <i className="icon icon-back"></i>
            <div className='music-desc'>
              <p>{this.props.musicData.songName}</p>
              <span>{this.props.musicData.singerName}</span>
            </div>
            <i className="icon icon-share"></i>
          </header>
          <div className='cd-div'>
            <div className='plank-div'>
              <div className='switch-div' style={{backgroundImage:'url(imgs/swith.png)'}}>

              </div>
            </div>
            <div className='img-div animate'>
              <div className='cd-bg' style={{ background: `url(imgs/cd-mine.png)`, backgroundSize: '100%' }}></div>
              <img src={this
                .props
                .musicData
                .imgUrl
                .replace(/{size}/g, 200)} />
            </div>
            <div className='op-div'></div>
          </div>
          <div className='Lyrics-div' style={{
            display: 'none'
          }}>
            Lyrics
          </div>
          <footer className="music-detail-footer">
            <div className='range-div'>
              <span className='curTime'>00.00</span>
              <Range />
              <span className='totalTime'>00.00</span>
            </div>
            <div className='ctrl-div'>
              <i className="icon icon-music-shunxu"></i>
              <i className="icon icon-prevdetail"></i>
              <i className="icon icon-playdetail"></i>
              <i className="icon icon-nextdetail"></i>
              <i className="icon icon-list-music"></i>
            </div>

          </footer>
        </div>
      </div>
    )
  }
}
