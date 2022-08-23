import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import RoomList from './RoomList.jsx';

const Room = () => {
    return (
        <RoomStyled className='Room'>
            <RoomList />
        </RoomStyled>
    );
}

export default Room;

const RoomStyled = styled.div`

`;