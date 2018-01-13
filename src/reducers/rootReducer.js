import { combineReducers } from 'redux'
import { getMainDataReducer , getMusicDataReducer,getMusicUrlDataReducer} from './musicDataReducer'
import { showPopReducer} from './popCtrlReducer'
import { getCurrPlayMusic} from './playMusicReducer'

const rootReducer = combineReducers({
  getMusicUrlDataReducer,
  getMainDataReducer,
  getCurrPlayMusic,
  getMusicDataReducer,
  showPopReducer
})

export default rootReducer