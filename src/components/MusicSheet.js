import React, { Component } from 'react'

export default class MusicSheet extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMusicItem:true
    }
  }
  render() {
    return (
      <div className='music-sheet'>
        <div className='music-sheet-title' onClick={e => this.toggleSheets(e)}>
          <i className={this.state.showMusicItem?'icon icon-down':'icon icon-down rotate-icon'} ref='switch'/>
          <div className='sheet-des'>
            <span>我创建的歌单</span>
            <span>({this.props.sheetData.length})</span>
            <i className='icon icon-setting' />
          </div>
        </div>
        <div className='music-sheet-list' style={{display:+this.state.showMusicItem?'block':'none'}}>
        {
          this.props.sheetData.map((item,index)=>
          <div key={index} className='music-item' >
          <img src={item.coverImgUrl}/>
          <div className='music-des'>
            <p className='item-name'>{item.name}</p>
            <span className='count'>{item.trackCount}首歌曲</span>
            <i className='icon icon-list-circle'/>
            <p className='border-1px'/>
          </div>
        </div>
        )
        }
          
          {/* <div className='music-item'>
            <img src={'http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg'}/>
            <div className='music-des'>
              <p className='item-name'>我喜欢的音乐</p>
              <span className='count'>20首歌曲</span>
              <i className='icon icon-list-circle'/>
              <p className='border-1px'/>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
  toggleSheets(e){
    let shoshowMusicItem = this.state.showMusicItem;
    this.setState({
      showMusicItem:!shoshowMusicItem
    })
  }
}
