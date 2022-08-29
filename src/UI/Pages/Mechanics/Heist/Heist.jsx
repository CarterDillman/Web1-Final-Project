import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import RogueTable from './HeistTable/RogueTable/RogueTable.jsx';
import ToolTable from './HeistTable/ToolTable/ToolTable.jsx';
import TrinketTable from './HeistTable/TrinketTable/TrinketTable.jsx';
import HeistIntro from './HeistIntro.jsx';
import HeistRogues from './HeistRogues.jsx';
import HeistTools from './HeistTools.jsx';
import HeistTrinket from './HeistTrinket.jsx';

const Heist = () => {
    return (
        <HeistStyled className='Heist inset'>
            <h2>Heist</h2>
            <HeistIntro />
            <h2>Rogues</h2>
            <p>
                There are nine total rogues in the game, however, you only start with Karst, Tibbs, and Isla. In order to unlock more rogues, you need to run a contract with an existing one. The tutorial contract with Karst does not count for this. The order is:
            </p>
            <HeistRogues />
            <RogueTable />
            <HeistTools />
            <ToolTable />
            <HeistTrinket />
            <TrinketTable />
        </HeistStyled>
    );
}

export default Heist;

const HeistStyled = styled.div`
    background-color: #0f0f0f;
    border: 2px solid #734e32;
    border-radius: 5px;
`;