import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

/* Components ---------------------------*/
import Lightbox, { ActiveArea, Modal } from 'UI/common/Lightbox/Lightbox.jsx';
import ModifiersList from './Modifiers/ModifiersList.jsx';

const Room = ({room}) => {
    return (
        <RoomStyled className='Room'>
            <Lightbox
                title={ room.name }
                displayName='Incursion Room Lightbox'
            >
                <ActiveArea>
                    <img src={ room.image } alt={ room.name } />
                    <h3>{ room.name }</h3>
                </ActiveArea>

                <Modal>
                    <img src={ room.image } alt={ room.name } />
                    <p><b>Tier:</b> { room.tier }</p>

                    <ModifiersList modifiers={ room.modifiers } />
                </Modal>

            </Lightbox>
        </RoomStyled>
    );
}

export default Room;

const RoomStyled = styled.div`

    width: 100%;
    margin: 5px 0px;

    @media ${defaultMediaQueries.smUp}{
        width: 45%;
        margin: 5px;
    }

    @media ${defaultMediaQueries.mdUp}{
        width: 30%;
        margin: 15px;
    }

    @media ${defaultMediaQueries.lgUp}{
        width: 20%;
        margin: 20px;
    }

    img {
        width: 100%;
        display: block;
        min-height: 150px;
    }

    h3 {
        color: white;
        background-color: #014444;
        margin: 0px;
        padding: 5px 10px;
    }
`;