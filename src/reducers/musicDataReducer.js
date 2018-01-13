import * as actionTypes from '../constants/constant'

export  function getMainDataReducer(state={playlist:[]},action){
  switch(action.type){
    case actionTypes.GET_MAIN_ALL:
    return Object.assign({},state,{playlist:action.data.playlist})
    default:
    return state;
  }
}

export function getMusicDataReducer(state={tracks:[]},action){
  switch(action.type){
    case actionTypes.GET_MUSIC_DATA:
    return Object.assign({},state,{tracks:action.data.playlist.tracks})
    default:
    return state;
  }
}

export function getMusicUrlDataReducer(state = [],action){
  switch(action.type){
    case actionTypes.GET_MUSIC_URL_DATA:
    return state.concat(action.data);
    default:
    return state;
  }
}
