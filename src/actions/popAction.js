import * as actionTypes from '../constants/constant'

export  function showPlayListAction(isShow){
  return{
    type:actionTypes.SHOW_PLAYLIST_POP,
    isShow
  }
}
function startAnimate(startAnimate){
  return{
    type:actionTypes.SHOW_POP,
    startAnimate
  }
}
export function showPop(showPop){
  return (dispatch,getState) =>{
    if(showPop){
      dispatch(showPlayListAction(showPop))
      dispatch(startAnimate(showPop));
    }else{
      dispatch(startAnimate(showPop));
      setTimeout(() => {
        dispatch(showPlayListAction(showPop))
      }, 600);
    }
   
  }
}


