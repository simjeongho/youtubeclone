import React from 'react';

const Videoitem = (props) => (
    <>
            <h1>{props.video.snippet.title}</h1>
            <img src={props.video.snippet.thumbnails.url} alt={props.video.snippet.channelTitle} />
    </>
    );

export default Videoitem;