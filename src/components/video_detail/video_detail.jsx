import React from 'react';
import styles from './video_detail.module.css'

const Video_detail = ({video}) => (
        <section className={styles.detail}>
            <iframe className = {styles.video} 
            type="text/html" 
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0" allowFullScreen></iframe>
            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            <pre className = {styles.description}>{video.snippet.description}</pre>
        </section>
    );

export default Video_detail;

// video detail이 화면에 보여지게 되는 과정은 다음과 같다. 
// 1.onClick이라는 event가 video_item component에서 이루어지면
// 2.그 선택된 video를 app.jsx에 존재하는 selectvideo함수에 매개 변수로 전달하게 된다. 
// 3. 전달되는 과정은 prop을 타고 전달 되고 prop에 콜백함수를 통해 전달이 된다. 
// 4. onclick -> onClickVideotoitem -> onClickVideotoList -> selectvideo 