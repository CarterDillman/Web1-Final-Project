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
    background-color: #0f0f0f;
    padding: 20px;
    margin: 20px 0px;
    border: 2px solid #734e32;
    border-radius: 4px;

    h2 {
        margin: 0px 50px 0px 50px;
        padding: 20px 0px 20px 0px;
        border-bottom: 1px solid #734e32;
        font-size: 32px;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

`;