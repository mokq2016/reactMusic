import React, {Component} from 'react'
import {updateMusicTime} from '../actions/playMusicAction'
export default class Range extends Component {
    bodyWidth = document.body.clientWidth;
    percent = 0;
    render() {
        return (
            <div
                className='range-wraper'
                onClick={e => {
                this.setProgress(e)
            }}>
                <span
                    className='curprogress'
                    style={{
                    width: 'calc(' + ((this.props.curTime / this.props.totalTime) * 100).toFixed(2) + '% - 7px)'
                }}></span>
                <span
                    className='ball'
                    style={{
                    left: `calc(${ ((this.props.curTime / this.props.totalTime) * 100).toFixed(2)}% - 7px)`
                }}
                    onTouchEnd=
                    {e => { this.touchEnd(e) }}
                    onTouchMove={e => {
                    this.touchMove(e)
                }}></span>
            </div>
        )
    }
    touchMove(e) {
        let pageX = e.touches[0].pageX;
        let percent = Math.floor((pageX / this.bodyWidth) * 100);
        this.percent = percent > 100
            ? 100
            : percent;
        this.percent = percent < 0
            ? 0
            : percent;
        this
            .props
            .dispatch(updateMusicTime(this.percent * this.props.totalTime / 100))
    }
    touchEnd(e) {

        document
            .querySelector('#myAudio')
            .currentTime = this.percent * this.props.totalTime / 100;
    }
    setProgress(e) {
        let wraper = document.querySelector('.range-wraper');
        let pageX = e.pageX - wraper.offsetLeft;
        let percent = Math.floor((pageX / wraper.clientWidth) * 100);
        percent = percent > 100
            ? 100
            : percent;
        percent = percent < 0
            ? 0
            : percent;
        document
            .querySelector('#myAudio')
            .currentTime = percent * this.props.totalTime / 100;
    }
}
