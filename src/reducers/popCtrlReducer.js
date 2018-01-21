import * as actionTypes from '../constants/constant'

export function showPopReducer(state = {
  isShowPop: false,
  showPlayList: false,
  showMusicSheetPop:false,
  isShowMusicDetail:false,
  showSlidebar:false
}, action) {

  switch (action.type) {
    case actionTypes.SHOW_POP:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}