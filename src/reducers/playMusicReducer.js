import * as actionTypes from '../constants/constant'

export function getCurrPlayMusic(state = {
  musicData: {
    name:'成都',
    ar:[{
      name:'赵雷'
    }],
    al: {
      picUrl: 'http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg'
    }
  },
  musicUrlData: {
    data:[{
      url:'http://www.mokq.xin/assets/music/111.mp3'
    }]
  }
}, action) {
  switch (action.type) {
    case actionTypes.PLAY_MUSIC:
      return {
        ...state,
        ...action
      }
    default:
      return state;
  }
}