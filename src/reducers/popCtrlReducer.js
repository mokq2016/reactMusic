import * as actionTypes from '../constants/constant'

export function  showPopReducer(state = {isShowPop:false,startAnimate:false},action){
  
  switch(action.type){
    case actionTypes.SHOW_PLAYLIST_POP:
    console.log(Object.assign({},state,{isShowPop:action.isShow}))
    return Object.assign({},state,{isShowPop:action.isShow});
    case actionTypes.SHOW_POP:
    return Object.assign({},state,{startAnimate:action.startAnimate});
    default :
    return state;
  }
}