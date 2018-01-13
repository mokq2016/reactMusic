import { connect } from 'react-redux'
import Mask from '../components/Mask'


const mapStateToProps = (state, ownProps) => ({
    isShowPop:state.showPopReducer.isShowPop
})


export default connect(mapStateToProps)(Mask)