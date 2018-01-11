import React, { Component } from 'react'
import TypeItem from './TypeItem'
export default class TypeList extends Component {

  render() {
    const typeArr = [{
      iconName:'icon-music',
      typeDes:'我的音乐',
      count:28,
      isPlaying:true,
      hasBorder:true,
    },{
      iconName:'icon-zuijinplay',
      typeDes:'最近播放',
      count:18,
      isPlaying:false,
      hasBorder:true,
    },{
      iconName:'icon-diantai',
      typeDes:'我的电台',
      count:11,
      hasBorder:true,
      isPlaying:false
    },{
      iconName:'icon-collect',
      typeDes:'我的收藏',
      count:44,
      hasBorder:false,
      isPlaying:false
    }]
    return (
      <div>
        {
          typeArr.map((item,index) => <TypeItem {...item} key={index}/>)
          }
      </div>
    )
  }
}
