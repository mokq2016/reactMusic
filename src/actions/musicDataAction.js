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
    //./data/musicData.json
    return http.get('/rank/info/?rankid=6666&page=1&json=true').then((data)=>{
      dispatch(getMusicData(data))
      console.log(data)
    })
  }
}
function getMusicUrlData(data){
  return {
    type:actionTypes.GET_MUSIC_URL_DATA,
    data
  }
}
export function fetMusicUrlData(){
  return (dispatch, getState) =>{
    return http.get('./data/musicUrlData.json').then((data)=>{
      dispatch(getMusicUrlData(data))
    })
  }
}