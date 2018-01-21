import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { showPopAction} from '../actions/popAction'
export default class Header extends Component {
  render() {
    return (
      <div className='header-wrap'>
        <i className='icon icon-menu' onClick={e => this.showSlidebar(e)}></i>
        <div className='center-div'>
        <Link to="/home"><i className={this.props.pathName === '/home'?'icon icon-music actived':'icon icon-music '}></i></Link>
        <Link to="/find"><i className={this.props.pathName === '/find'?'icon icon-wangyi actived':'icon icon-wangyi '}></i></Link>
        <i className='icon icon-community'></i>
        </div>
        <i className='icon icon-search'></i>
      </div>
    )
  }
  showSlidebar(e){
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(showPopAction({isShowPop:true,showSlidebar:true}))
  }
}
