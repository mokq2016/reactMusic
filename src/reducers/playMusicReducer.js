import * as actionTypes from '../constants/constant'

export function getCurrPlayMusic(state = {
  songName: '刚好遇见你',
  singerName: '李玉刚',
  imgUrl: 'http://p1.music.126.net/lDyytkTaPYVTb1Vpide6AA==/18591642115187138.jpg?param=130y130',
  url: 'http://www.mokq.xin/assets/music/111.mp3',
  index:-1
}, action) {
  switch (action.type) { 
    case actionTypes.GET_CUR_MUSIC:
      return {
        ...state,
        ...action.data,
        index:action.index
      }
    default:
      return state;
  }
}

export function playMusic(state = {musicIsPlay:false},action){
  switch (action.type) { 
    case actionTypes.PLAY_MUSIC:
      return {
        ...state,
        ...{musicIsPlay:action.playMusic}
      }
    default:
      return state;
  }
}

export function updataMusicTime(state = {time:0,totalTime:0},action){
  switch (action.type) { 
    case actionTypes.UPDATE_MUSIC_TIME:
      return {
        ...state,
        time:action.time,
      }
      case actionTypes.UPDATE_TOTALTIME:
      return {
        ...state,
      totalTime:action.totalTime
      }
    default:
      return state;
  }
}
//palyMode:0 //palyMode:0单曲循环1：列表循环2：随机播放
export function getPlayMode(state = {playMode:2},action){
  switch (action.type) { 
    case actionTypes.CHANGE_PLAYMODE:
      return {
        ...state,
        ...{playMode:action.palyMode}
      }
    default:
      return state;
  }
}