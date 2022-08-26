import React from 'react';
import styled from 'styled-components';



/* Components ---------------------------*/
import RogueTable from './HeistTable/RogueTable/RogueTable.jsx';
import ToolTable from './HeistTable/ToolTable.jsx';

const Heist = () => {
    return (
        <HeistStyled className='Heist'>
            <RogueTable />
        </HeistStyled>
    );
}

export default Heist;

const HeistStyled = styled.div`

`;