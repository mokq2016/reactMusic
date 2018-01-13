import * as actionTypes from '../constants/constant'
import {showPop} from './popAction'

function playSong(data){
  return {
    type:actionTypes.PLAY_MUSIC,
    ...data
  }
}
export function selectSong(index){
  return (dispatch,getState) =>{
    let musicData = getState().getMusicDataReducer.tracks.filter((item,idx)=>{
      return idx === index;
    })[0];
    let musicUrlData = getState().getMusicUrlDataReducer.filter((item,index)=>{
      return item.data[0].id === musicData.id;
    })[0];
    console.log(musicData,musicUrlData)
    dispatch(showPop(false))
    dispatch(playSong({musicData,musicUrlData}))
  }
}


