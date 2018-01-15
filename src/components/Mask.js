import React, {Component} from 'react'
import {showPop} from '../actions/popAction'

export default class Mask extends Component {
    statusName = 'fade-enter'
    render() {
        return (
            <div
                ref='maskDiv'
                className = {this.props.isShowPop?'':''}
                onClick={e=> this.clickHandle(e)}></div>
        )
    }
    
    componentDidMount() {
        this.refs.maskDiv.className = 'mask fade-enter';
    }
    
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.isShowPop){
            this.refs.maskDiv.className = 'mask fade-enter-active'
        }else{
            this.refs.maskDiv.className = 'mask fade-leave-active'
        }
        setTimeout(()=>{
            if(nextProps.isShowPop){
                //this.refs.maskDiv.className = 'mask fade-enter';
            }else{
                this.refs.maskDiv.className = 'mask fade-leave';
            }
        },600)
    }
    
    clickHandle(e) {
       
        const {dispatch} = this.props;
        dispatch(showPop(false))
    }
   
}
