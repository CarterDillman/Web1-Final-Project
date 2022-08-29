import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { roomData } from 'UI/common/data/roomData.js';

/* Components ---------------------------*/
import Room from './Room.jsx';

const RoomList = () => {
    return (
        <RoomListStyled className='RoomList'>
            <h2>Temple of Axoatl</h2>
            <div className='wrapper'>
                {
                    roomData.map((room, idx) => {
                        return <Room key={ idx } room={ room }/>
                    })
                }
            </div>
        </RoomListStyled>
    );
}

export default RoomList;

const RoomListStyled = styled.div`
    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

`;