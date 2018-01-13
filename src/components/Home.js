import React, {Component} from 'react'
import TypeList from './TypeList'
import MusicSheet from './MusicSheet'
import {fetchMainData} from '../actions/musicDataAction'

export default class Home extends Component {
  render() {
    return (
      <div className='content-div'>
        <TypeList/>
        <MusicSheet
          sheetData={this
          .props
          .musicSheetData
          .slice(0, 3)}/>
        <MusicSheet
          sheetData={this
          .props
          .musicSheetData
          .slice(3, 4)}/>
      </div>
    )
  }
  componentWillMount() {

    const {dispatch} = this.props;
    dispatch(fetchMainData());

  }
  componentDidUpdate() {
    console.log(this.props)
  }
}
