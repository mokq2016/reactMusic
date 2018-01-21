import React from 'react'
import Animation from './Animation';

export default class Slidebar extends Animation {
  render() {
    return super.render(
      <div className='slidebar' onClick={e => this.hideSlidebar(e)}>
        <div className='slide-wraper'>
          <div
            style={{
            overflowY: 'auto',
            height: 'calc(100vh - 41px)'
          }}>
            <div className='slide-header'>
              <div className='user-info'>
                <img
                  src='http://p1.music.126.net/WkNExC-PcMHsIzJ38_1Wlg==/1375489054294428.jpg'
                  alt=''/>
                <div className='user-detail'>
                  <span className='name'>哥只是个传说</span>
                  <span className='level'>Lv.9</span>
                </div>
                <span className='sign'>
                  <i className='icon icon-coin'></i>
                  签到
                </span>
              </div>
            </div>
            <div className='slide-content'>
              <div className='slide-item'>
                <i className='icon icon-message'/>
                <span className='title'>我的消息</span>

              </div>
              <div className='slide-item'>
                <i className='icon icon-vip'/>
                <span className='title'>我的会员</span>
                <span className='desc'>2018.08.18到期</span>
              </div>
              <div className='slide-item'>
                <i className='icon icon-market'/>
                <span className='title'>商城</span>

              </div>
              <div className='split-div'></div>
              <div className='slide-item'>
                <i className='icon icon-friend'/>
                <span className='title'>我的好友</span>

              </div>
              <div className='slide-item'>
                <i className='icon icon-place'/>
                <span className='title'>附近的人</span>

              </div>
              <div className='split-div'></div>
              <div className='slide-item'>
                <i className='icon icon-theme'/>
                <span className='title'>个性换肤</span>
                <span className='desc'>官方红</span>
              </div>
              <div className='slide-item'>
                <i className='icon icon-set-time'/>
                <span className='title'>定时播放</span>

              </div>
              <div className='slide-item'>
                <i className='icon icon-lock'/>
                <span className='title'>音乐闹钟</span>

              </div>
              <div className='slide-item'>
                <i className='icon icon-car'/>
                <span className='title'>驾驶模式</span>

              </div>
              <div className='slide-item'>
                <i className='icon icon-cloud'/>
                <span className='title'>音乐云盘</span>

              </div>
            </div>
          </div>
          <div className='slide-footer'>
            <div className='nightmode'>
              <i className='icon-night'/>
              <span>夜间模式</span>
            </div>
            <div className='setting'>
              <i className='icon-setting'/>
              <span>设置</span>
            </div>
            <div className='exit'>
              <i className='icon-exit'/>
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>,this.props.showSlidebar, 'slide-left'
    )
  }
  hideSlidebar(e) {}
}
