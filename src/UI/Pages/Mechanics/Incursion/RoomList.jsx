import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { roomData } from 'UI/common/data/roomData.js';

/* Components ---------------------------*/
import Room from './Room.jsx';

const RoomList = () => {
    return (
        <RoomListStyled className='RoomList'>
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
    background-color: teal;
    padding: 20px;
    margin: 20px 0px;

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;