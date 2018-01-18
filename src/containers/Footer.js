import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => ({
  musicData:state.getCurrPlayMusic,
  isShowMusicDetail:state.showPopReducer.isShowMusicDetail,
  musicIsPlay:state.playMusic.musicIsPlay
})


export default connect(mapStateToProps)(Footer)