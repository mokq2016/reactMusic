import { combineReducers } from 'redux'
import { getMainDataReducer , getMusicDataReducer,getMusicUrlDataReducer} from './musicDataReducer'
import { showPopReducer} from './popCtrlReducer'
import { getCurrPlayMusic,playMusic,updataMusicTime,getPlayMode} from './playMusicReducer'

const rootReducer = combineReducers({
  getMusicUrlDataReducer,
  getMainDataReducer,
  getCurrPlayMusic,
  getMusicDataReducer,
  showPopReducer,
  playMusic,
  updataMusicTime,
  getPlayMode
})

export default rootReducer