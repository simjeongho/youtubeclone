import React from 'react';
import styles from './video_item.module.css';

const Videoitem = ({video , onVideoClicktoitem , display}) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
    <li className= {`${styles.container} ${displayType}`} onClick = {() => {onVideoClicktoitem(video); console.log('onvideoclicktoitem')}}>
            <div className={styles.video}>
            <img className= {styles.thumbnails} src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle} />
            <div className= {styles.metadata} >
                <p className= {styles.title}>{video.snippet.title}</p>
                <p className= {styles.channel}>{video.snippet.channelTitle}</p>
            </div>
            </div>
    </li>
    )
};
    //아래와 같은 과정을 deconstructing이라고 부른다. 이름이 동일해야 한다. 
//인자에서 {video}는 props 안에 있는 비디오를 바로 받아온다. 
//이름 변경하고 싶을 때는 {video : 바꾸고 싶은 이름 }
//snippet이 반복되므로 그냥 쓰고 싶을 때는 {video : {sniippet}} 과 같이 사용하면 video.snippet을 바로 받아올 수 있다. video를 안 쓸 수 있다.
//onclick이 되면 onVideoClick에서 video를 전달하면 된다.  
export default Videoitem;