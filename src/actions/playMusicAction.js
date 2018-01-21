import * as actionTypes from '../constants/constant'
import {showPop} from './popAction'
import http from '../utils/http';

function playSong(data,index){
  return {
    type:actionTypes.GET_CUR_MUSIC,
    data,
    index
  }
}
export function selectSong(hash,index){
  return (dispatch,getState) =>{
    return http.get(`/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}`).then((data)=>{
      dispatch(showPop({
        isShowPop: false,
        showPlayList: false,
      }));
      dispatch(playSong(data,index));
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
export function updateTotalTime(totalTime){
  
  return {
    type:actionTypes.UPDATE_TOTALTIME,
    totalTime
  }
}
export function updateMusicTime(time){
  return {
    type:actionTypes.UPDATE_MUSIC_TIME,
    time
  }
}
function changePlayModeAction(data){
  return {
    type:actionTypes.CHANGE_PLAYMODE,
    palyMode:data
  }
}
//改变播放模式
export function changePlayMode(){
  return (dispatch,getState) => {
    let playMode = getState().getPlayMode.playMode;
    playMode ++;
    if(playMode >2 ){
      playMode = 0;
    }
    dispatch(changePlayModeAction(playMode))
  }
}
//播放下一首歌曲
export function playNextSong(playNext){
  return (dispatch,getState) => {
    let playMode = getState().getPlayMode.playMode;
    let musicList = getState().getMusicDataReducer.tracks;
    let index = getState().getCurrPlayMusic.index;
    
    switch(playMode){
      case 0://单曲循环
        document.querySelector('#myAudio').currentTime = 0;
        dispatch(playMusic(true));
        break;
      case 1://列表循环
        if(playNext){
          index ++;
        }else{
          index --;
        }
        if(index > musicList.length || index < 0){
          index = 0;
        }
        let nextSong = musicList[index];
        dispatch(selectSong(nextSong.hash,index));
        break;
      case 2://随机播放
        let random = Math.floor(Math.random()*musicList.length);
        let selectMusic = musicList[random];
        dispatch(selectSong(selectMusic.hash,random));
        break;
      default:
      break;
    }
  }
}