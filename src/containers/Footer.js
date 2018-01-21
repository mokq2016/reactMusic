import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => ({
  musicData:state.getCurrPlayMusic,
  isShowMusicDetail:state.showPopReducer.isShowMusicDetail,
  musicIsPlay:state.playMusic.musicIsPlay,
  currentTime:state.updataMusicTime.time,
  totalTime:state.updataMusicTime.totalTime,
  playMode:state.getPlayMode.playMode //palyMode:0单曲循环1：列表循环2：随机播放
})


export default connect(mapStateToProps)(Footer)