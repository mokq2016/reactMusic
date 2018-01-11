import React, { Component } from 'react'

export default class RecommendItem extends Component {
  render() {
    return (
      <div className='recommend-container'>
        <div className='item-title'>
          <span>{this.props.itemName}</span>
          <i className='icon icon-right'/>
        </div>
        <div className='recommend-list'>
          {
            this.props.musicList.map((item,index) =>  
            <div key={index} className={index%3 === 1?'music-item pd':'music-item'}>
              <img className='music-img' src={this.props.PLUBLICURL+item.imgUrl } alt=''/>
              <div className='music-desc'>{item.musicDes}</div>
            </div>
          )
          }
          
        </div>
      </div>
    )
  }
}
