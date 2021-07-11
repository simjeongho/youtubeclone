import React from 'react';
import styles from './video_item.module.css';

const Videoitem = (props) => (
    <li className= {styles.video}>
            
            <img className= {styles.thumbnails} src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.channelTitle} />
            <div >
                <p className= {styles.title}>{props.video.snippet.title}</p>
                <p className= {styles.channel}>{props.video.snippet.channelTitle}</p>
            </div>
    </li>
    );

export default Videoitem;