import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Modifiers from './Modifiers.jsx';

const ModifiersList = ({modifiers}) => {
    return (
        <ModifiersListStyled className='ModifiersList'>
            {
                modifiers.map((modifier, idx) => {
                    return <Modifiers key={idx} modifier={ modifier } />
                })
            }
        </ModifiersListStyled>
    );
}

export default ModifiersList;

const ModifiersListStyled = styled.div`

`;