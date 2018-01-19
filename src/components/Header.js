import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <div className='header-wrap'>
        <i className='icon icon-menu'></i>
        <div className='center-div'>
        <Link to="/home"><i className={this.props.pathName === '/home'?'icon icon-music actived':'icon icon-music '}></i></Link>
        <Link to="/find"><i className={this.props.pathName === '/find'?'icon icon-wangyi actived':'icon icon-wangyi '}></i></Link>
        <Link to="/community"><i className={this.props.pathName === '/community'?'icon icon-community actived':'icon icon-community '}></i></Link>
        </div>
        <i className='icon icon-search'></i>
      </div>
    )
  }
}
