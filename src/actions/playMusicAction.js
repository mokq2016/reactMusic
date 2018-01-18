import * as actionTypes from '../constants/constant'
import {showPop} from './popAction'
import http from '../utils/http';

function playSong(data){
  return {
    type:actionTypes.GET_CUR_MUSIC,
    data
  }
}
export function selectSong(hash){
  return (dispatch,getState) =>{
    return http.get(`/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}`).then((data)=>{
      dispatch(showPop({
        isShowPop: false,
        showPlayList: false,
      }));
      dispatch(playSong(data));
      dispatch(playMusic(true));
    })
  }
}

export function playMusic(isPlay){
  if(isPlay){
    document.querySelector('#myAudio').play()
  }else{
    document.querySelector('#myAudio').pause()
  }
  return {
    type:actionTypes.PLAY_MUSIC,
    playMusic:isPlay
  }
}

export function updateMusicTime(time){
  return {
    type:actionTypes.UPDATE_MUSIC_TIME,
    time
  }
}