import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import RoomList from './RoomList.jsx';
import IncursionGuide from './IncursionGuide.jsx';

const Incursion = () => {
    return (
        <IncursionStyled className='Incursion inset'>
            <h2>Incursion</h2>
            <IncursionGuide />
            <RoomList />
        </IncursionStyled>
    );
}

export default Incursion;

const IncursionStyled = styled.div`
    background-color: #0f0f0f;
    border: 2px solid #734e32;
    border-radius: 5px;
`;