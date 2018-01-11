import * as actionTypes from '../constants/constant'
import http from '../utils/http';

function getMainAll(data){
  return {
    type:actionTypes.GET_MAIN_ALL,
    data
  }
}
function getMusicData(data){
  return {
    type:actionTypes.GET_MUSIC_DATA,
    data
  } 
}
export function fetchMainData(){
  return (dispatch, getState) =>{
    return http.get('./data/homeData.json').then((data)=>{
      dispatch(getMainAll(data))
    })
  }
}
export function  fetchMusicData(){
  return (dispatch,getState) =>{
    return http.get('./data/musicData.json').then((data)=>{
      dispatch(getMusicData(data))
    })
  }
}