import { connect } from 'react-redux'
import Home from '../components/Home'

function mapStateToProps(state){
  return {
    musicSheetData:state.getMainDataReducer.playlist
  }
}

export default connect(mapStateToProps)(Home)