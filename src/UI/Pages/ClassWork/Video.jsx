import React from 'react';
import styled from 'styled-components';
import Youtube, { YouTubeProps } from 'react-youtube';

const Video = () => {
    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    };

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <VideoStyled className='Video'>
            <h2>Video</h2>
            <Youtube videoId='2g811Eo7K8U' opts={opts} onReady={onPlayerReady} />
        </VideoStyled>
    );
}

export default Video;

const VideoStyled = styled.div`

`;