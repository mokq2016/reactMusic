import { connect } from 'react-redux'
import Slidebar from '../components/Slidebar'

function mapStateToProps(state){
  return {
    showSlidebar:state.showPopReducer.showSlidebar
  }
}

export default connect(mapStateToProps)(Slidebar)