import React, { Component } from 'react'

export default class Range extends Component {
  bodyWidth = document.body.clientWidth;
  constructor(props){
    super(props);
    this.state = {
        left:'calc(0% - 7px)'
    }
  }
    render() {
        return (
            <div className='range-wraper'>
                <span className='curprogress' style={{width:this.state.left}}></span>
                <span className='ball' style={{left:this.state.left}} onTouchMove={e =>{this.touchMove(e)}}></span>
            </div>
        )
    }
    touchMove(e){
        let pageX = e.touches[0].pageX;
        let percent = Math.floor((pageX / this.bodyWidth)*100);
        percent = percent > 100 ? 100:percent;
        percent = percent < 0 ? 0:percent;
        this.setState({
            left:`calc(${percent}% - 7px)`
        })
    }
}
