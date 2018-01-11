import React, { Component } from 'react'
import RecommendItem from './RecommendItem'
export default class Find extends Component {
  PLUBLICURL = process.env.PUBLIC_URL;
  recommendMenu = [{
    imgUrl:'imgs/privateFM.jpg',
    recommendDes:'私人FM'
  },{
    imgUrl:'imgs/everyDayRecommend.jpg',
    recommendDes:'每日推荐'
  },{
    imgUrl:'imgs/musicSheet.jpg',
    recommendDes:'歌单'
  },{
    imgUrl:'imgs/rank.jpg',
    recommendDes:'排行榜'
  }];
  recommendArr =[{
    itemName:'推荐歌单',
    musicList:[{
      imgUrl:'imgs/recommend1.jpg',
      musicDes:'分手后再次与前任相见你会怎么办？'
    },{
      imgUrl:'imgs/recommend2.jpg',
      musicDes:'如何舒服地瘫在沙发上'
    },{
      imgUrl:'imgs/recommend3.png',
      musicDes:'2017年度热议单曲TOP100'
    },{
      imgUrl:'imgs/recommend4.png',
      musicDes:'聆听话语里百听不厌R&B'
    },{
      imgUrl:'imgs/recommend5.png',
      musicDes:'国语古风中国风神曲，细腻地抚摸你的心灵'
    },{
      imgUrl:'imgs/recommend6.png',
      musicDes:'【剑网三】天光乍破-暮雪白头'
    }]
  },{
    itemName:'主播电台',
    musicList:[{
      imgUrl:'imgs/radio-station1.png',
      musicDes:'影响你未来的100次心理谈话'
    },{
      imgUrl:'imgs/radio-station2.png',
      musicDes:'帮你寻找最有品质的音乐'
    },{
      imgUrl:'imgs/radio-station3.png',
      musicDes:'焦元薄古典音乐入门指南'
    },{
      imgUrl:'imgs/radio-station4.png',
      musicDes:'知性女神陈一发的空灵音色'
    },{
      imgUrl:'imgs/radio-station5.png',
      musicDes:'明星驾到记录音乐人的音乐故事'
    },{
      imgUrl:'imgs/radio-station6.png',
      musicDes:'听她的声音，会上瘾'
    }]
  }]
  render() {
    return (
      <div className='content-div'>
        <div className='find-menu'>
          <div className='menu-item actived'>音乐</div>
          <div className='menu-item'>视频</div>
          <div className='menu-item'>电台</div>
        </div>
        <div className='find-music'>
          <div className='swiper-container'>
            <img className='swiper-img' src={this.PLUBLICURL+'imgs/swiper1.jpg' } alt=''/>
          </div>
          <div className='recommend-menu'>
            {this.recommendMenu.map((item,index) => 
            <div key={index} className='recommend-type'>
              <img className='recommend-img' src={this.PLUBLICURL+item.imgUrl } alt=''/>
              <span className='recommend-des'>{item.recommendDes}</span>
            </div>
          )}
          </div>
          {this.recommendArr.map((item,index) => 
            <RecommendItem key={index} {...item} PLUBLICURL={this.PLUBLICURL}/>
          )}
        </div>
      </div>
    )
  }
}
