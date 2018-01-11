import React, { Component } from 'react'

export default class TypeItem extends Component {
  
  render() {
    return (
      <div>
        <div className='type-list'>
          <div className='type-item'>
            <i className={this.props.iconName + ' icon'}/>
            <div className='item-des-div'>
              <span className='item-des'>{this.props.typeDes}</span>
              <span className='count'>({this.props.count})</span>
              <HasBorder hasBorder={this.props.hasBorder}/>
              <IsPlaying isPlaying={this.props.isPlaying}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
function HasBorder(props){
  if(props.hasBorder){
    return (<p className= 'border-1px'></p>)
  }
  return null;
}
function IsPlaying(props){
    if(props.isPlaying){
      return (<i className= 'icon icon-volume-medium'/>)
    }
    return null;
  }