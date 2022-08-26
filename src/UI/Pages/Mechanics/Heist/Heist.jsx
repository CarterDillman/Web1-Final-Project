import React from 'react';
import styled from 'styled-components';



/* Components ---------------------------*/
import RogueTable from './HeistTable/RogueTable/RogueTable.jsx';
import ToolTable from './HeistTable/ToolTable/ToolTable.jsx';

const Heist = () => {
    return (
        <HeistStyled className='Heist'>
            <RogueTable />
            <ToolTable />
        </HeistStyled>
    );
}

export default Heist;

const HeistStyled = styled.div`
    max-width: 1400px;
    margin: auto;

`;