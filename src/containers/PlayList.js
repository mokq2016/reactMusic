import { connect } from 'react-redux'
import PlayList from '../components/PlayList'

function mapStateToProps(state){
  return {
    tracks:state.getMusicDataReducer.tracks,
    showPlayList:state.showPopReducer.showPlayList,
  }
}

export default connect(mapStateToProps)(PlayList)