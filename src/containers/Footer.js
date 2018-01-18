import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => ({
  musicData:state.getCurrPlayMusic,
  isShowMusicDetail:state.showPopReducer.isShowMusicDetail,
  musicIsPlay:state.playMusic.musicIsPlay,
  currentTime:state.updataMusicTime.time
})


export default connect(mapStateToProps)(Footer)