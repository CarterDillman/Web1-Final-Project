import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import RoomList from './RoomList.jsx';

const Incursion = () => {
    return (
        <IncursionStyled className='Incursion inset'>
            <RoomList/>
        </IncursionStyled>
    );
}

export default Incursion;

const IncursionStyled = styled.div`

`;