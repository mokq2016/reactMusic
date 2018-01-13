import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => ({
  musicData:state.getCurrPlayMusic.musicData,
  musicUrlData:state.getCurrPlayMusic.musicUrlData,
})


export default connect(mapStateToProps)(Footer)