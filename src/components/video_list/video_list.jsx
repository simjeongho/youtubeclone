import React from 'react';
import Videoitem from '../video_item/video_item';
import styles from './video_list.module.css';
const Videolist = ({videos, onVideoClick , display}) => (
            <ul className = {styles.videos} >
                {videos.map(video => 
                    <Videoitem key = {video.id} video = {video} onVideoClick = {onVideoClick} display = {display}/>)}
            </ul>
    );

export default Videolist;

//prop으로 전달 받은 videos를 빙글빙글 돌면서 video에 있는 아이템을 video컴포넌트로 만들 것임 
//컴포넌트에는 무조건 id가 존재해야 함 