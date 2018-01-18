import { combineReducers } from 'redux'
import { getMainDataReducer , getMusicDataReducer,getMusicUrlDataReducer} from './musicDataReducer'
import { showPopReducer} from './popCtrlReducer'
import { getCurrPlayMusic,playMusic} from './playMusicReducer'

const rootReducer = combineReducers({
  getMusicUrlDataReducer,
  getMainDataReducer,
  getCurrPlayMusic,
  getMusicDataReducer,
  showPopReducer,
  playMusic
})

export default rootReducer