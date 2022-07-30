/*
 * @Author: mkq 873302396@qq.com
 * @Date: 2018-01-07 11:36:04
 * @LastEditors: mkq 873302396@qq.com
 * @LastEditTime: 2022-07-30 15:32:26
 * @FilePath: \workPlace_reactMusic\react-music\src\components\MusicSheet.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
          <img src={item.coverImgUrl} alt="图片"/>
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
