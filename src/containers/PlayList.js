import { connect } from 'react-redux'
import PlayList from '../components/PlayList'

function mapStateToProps(state){
  return {
    tracks:state.getMusicDataReducer.tracks,
    showPlayList:state.showPopReducer.showPlayList,
    playMode:state.getPlayMode.playMode, //palyMode:0单曲循环1：列表循环2：随机播放
    curIndex:state.getCurrPlayMusic.index
  }
}

export default connect(mapStateToProps)(PlayList)