import React, { Component } from 'react'

export default class Animation extends Component {
  render(slot,isShow,name) {
    return (
      <div className={isShow?'animation '+name+'-enter-active':'animation '+name+'-leave-active'}>
          {slot}
      </div>
    )
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
  }
  
}
