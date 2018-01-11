import { combineReducers } from 'redux'
import { getMainDataReducer , getMusicDataReducer} from './musicDataReducer'
import { showPopReducer} from './popCtrlReducer'

const rootReducer = combineReducers({
  getMainDataReducer,
  getMusicDataReducer,
  showPopReducer
})

export default rootReducer