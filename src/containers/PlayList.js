import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayList from '../components/PlayList'

function mapStateToProps(state){
  console.log(state)
  return {
    tracks:state.getMusicDataReducer.tracks,
    isShowPop:state.showPopReducer.isShowPop,
    startAnimate:state.showPopReducer.startAnimate
  }
}

export default connect(mapStateToProps)(PlayList)