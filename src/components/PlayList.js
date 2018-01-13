import React, {Component} from 'react'
import {fetchMusicData} from '../actions/musicDataAction'
import {showPop} from '../actions/popAction'
import Animation from './Animation'
import {selectSong} from '../actions/playMusicAction'
export default class PlayList extends Animation {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  render() {
    //return (
    return super.render(
      <div className='play-list-wraper' onClick={e => this.clickHandle(e)}>
      <div
        className={this.props.isShowPop
        ? 'play-list '
        : 'play-list '}>
        <div className='header-bar'>
          <div className='play-type'>
            <i className='icon icon-music-random'/>
            <span>{'列表循环'}({33})</span>
          </div>
          <div className='op-div'>
            <label>
              <i className='icon-add-project'/>
              <span>收藏</span>
            </label>
            <label>
              <i className='icon-delete'/>
              <span>清空</span>
            </label>
          </div>
        </div>
        <div className='play-content'>
          {this
            .props
            .tracks
            .map((item, index) => <div key={index} onClick={e=> this.playSong(e,item.hash)} className='music-item'>
              <div className='music-name'>
                <label>{item.filename}</label>
                <span></span>
              </div>
              <div className='music-name'></div>
            </div>)}

        </div>
      </div>
    </div>, this.props.isShowPop, 'slide')
  }
  clickHandle(e) {
    if (e.target.className.indexOf('play-list-wraper') !== -1) {
      const {dispatch} = this.props;
      dispatch(showPop(false))
    }

  }
  playSong(e,index){
    const {dispatch} = this.props;
    dispatch(selectSong(index));
  }
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchMusicData());
  }
}
