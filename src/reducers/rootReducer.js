import { combineReducers } from 'redux'
import { getMainDataReducer , getMusicDataReducer,getMusicUrlDataReducer} from './musicDataReducer'
import { showPopReducer} from './popCtrlReducer'
import { getCurrPlayMusic,playMusic,updataMusicTime} from './playMusicReducer'

const rootReducer = combineReducers({
  getMusicUrlDataReducer,
  getMainDataReducer,
  getCurrPlayMusic,
  getMusicDataReducer,
  showPopReducer,
  playMusic,
  updataMusicTime
})

export default rootReducer