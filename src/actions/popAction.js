import * as actionTypes from '../constants/constant'

export  function showPopAction(showObj){
  return{
    type:actionTypes.SHOW_POP,
    ...showObj
  }
}
export function showPop(showPop){
  return (dispatch,getState) =>{
    if(showPop.isShowPop){ //显示遮罩时
      dispatch(showPopAction(showPop))
    }else{
      dispatch(showPopAction({
        isShowPop: false,
        showPlayList: false,
        showMusicSheetPop:false
      }));
    }
   
  }
}


