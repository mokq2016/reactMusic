import React, { Component } from 'react'
import {fetchMusicData} from '../actions/musicDataAction'
import {showPop} from '../actions/popAction'

export default class PlayList extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShow:false
    }
  }
  render() {
    return (
      <div className={this.props.isShowPop?'play-list-wraper':'play-list-wraper hide'} onClick={e=> this.clickHandle(e)}>
        <div className={this.props.startAnimate?'play-list slideUp':'play-list slideDown'}>
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
          {this.props.tracks.map((item,index)=>
          <div key={index} className='music-item'>
          <div className='music-name'>
            <label>{item.name}</label>
            <span>-{item.ar[0].name}</span>
          </div>
          <div className='music-name'></div>
        </div>
          )}
            
          </div>
        </div>
      </div>
    )
  }
  count = 1;
  clickHandle(e){
    console.log(e.target)
    this.count ++;
    const { dispatch } = this.props;
    dispatch(showPop(false))
  }
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(fetchMusicData());
  }
  componentDidUpdate(){
    console.log(this.props)
  }
}
