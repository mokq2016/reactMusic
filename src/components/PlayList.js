/*
 * @Author: mkq 873302396@qq.com
 * @Date: 2018-01-15 20:25:04
 * @LastEditors: mkq 873302396@qq.com
 * @LastEditTime: 2022-07-30 15:32:06
 * @FilePath: \workPlace_reactMusic\react-music\src\components\PlayList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { fetchMusicData } from '../actions/musicDataAction'
import { showPop } from '../actions/popAction'
import Animation from './Animation'
import { selectSong, changePlayMode } from '../actions/playMusicAction'
export default class PlayList extends Animation {
    render() {
        //return (
        return super.render(
            <div className='play-list-wraper' onClick={e => this.clickHandle(e)}>
                <div className={this.props.showPlayList ? 'play-list ' : 'play-list '}>
                    <div className='header-bar' >
                        <div className='play-type'
                            onClick={
                                e => {
                                    // eslint-disable-next-line no-unused-expressions
                                    e.stopPropagation;
                                    this
                                        .props
                                        .dispatch(changePlayMode())
                                }
                            } > < i className={
                                this.props.playMode === 0 ?
                                    'icon icon-music-danqu1' : this.props.playMode === 1 ?
                                        'icon icon-music-shunxu' : 'icon icon-music-random'
                            } />
                            <span>{this.props.playMode === 0 ?
                                '单曲循环' :
                                this.props.playMode === 1 ?
                                    '列表循环' :
                                    '随机播放'
                            }({this.props.tracks.length})
                            </span>
                        </div >
                        <div className='op-div' >
                            <label>
                                < i className='icon-add-project' />
                                <span > 收藏 </span>
                            </label >
                            < label > < i className='icon-delete' />
                                < span > 清空 </span>
                            </label >
                        </div>
                    </div >
                    <div className='play-content' > {
                        this
                            .props
                            .tracks
                            .map((item, index) => < div key={
                                index
                            }
                                onClick={
                                    e => this.playSong(e, item.hash, index)
                                }
                                className='music-item' > < div className='music-name' > < label > {
                                    item.filename
                                } </label> <span > </span > </div >
                                <div className='music-name' > </div>
                            </div>)
                    }

                    </div >
                </div>
            </div >, this.props.showPlayList, 'slide')
    }
    clickHandle(e) {
        if (e.target.className.indexOf('play-list-wraper') !== -1) {
            const { dispatch } = this.props;
            dispatch(showPop({ isShowPop: false }));
        }

    }
    playSong(e, hash, index) {
        const { dispatch } = this.props;
        dispatch(selectSong(hash, index));
    }
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchMusicData());
    }
}