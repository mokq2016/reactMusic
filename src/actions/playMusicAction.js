import * as actionTypes from '../constants/constant'
import {showPop} from './popAction'
import http from '../utils/http';

function playSong(data){
  return {
    type:actionTypes.PLAY_MUSIC,
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
      dispatch(playSong(data))
    })
  }
}


