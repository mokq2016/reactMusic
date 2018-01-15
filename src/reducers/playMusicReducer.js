import * as actionTypes from '../constants/constant'

export function getCurrPlayMusic(state = {
  songName: '刚好遇见你',
  singerName: '李玉刚',
  imgUrl: 'http://p1.music.126.net/lDyytkTaPYVTb1Vpide6AA==/18591642115187138.jpg?param=130y130',
  url: 'http://www.mokq.xin/assets/music/111.mp3'

}, action) {
  switch (action.type) { 
    case actionTypes.PLAY_MUSIC:
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}