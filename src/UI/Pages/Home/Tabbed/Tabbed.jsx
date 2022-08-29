import React, { useState } from 'react';
import styled from 'styled-components';
import Youtube, { YouTubeProps } from 'react-youtube';

/* Scripts ---------------------------*/
import { tabbedData } from 'UI/common/data/tabbedData.js';

/* Components ---------------------------*/
import TabContent from './TabContent.jsx';
import TabMenuList from './TabMenu/TabMenuList.jsx';

const Tabbed = () => {

    const [ curTab, curTabUpdate ] = useState(tabbedData[0]);

    const onPlayerReady = (event) => {
        event.target.pauseVide();
    };

    const opts = {
        height: '600',
        width: '90%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };


    return (
        <TabbedStyled className='Tabbed inset'>

            <TabMenuList curTab={ curTab } curTabUpdate={ curTabUpdate } tabbedData={ tabbedData } />
            <TabContent curTab={ curTab }/>
            <h2>Kalandra League</h2>
            <Youtube className='leagueVideo' videoId='jA0OamQ63Ds' opts={opts} onReady={onPlayerReady} />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    background-color: #0f0f0f;
    border: 2px solid #734e32;
    border-radius: 5px;

    .leagueVideo {
        text-align: center;
        margin-bottom: 20px;
    }

`;