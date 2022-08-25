import React from 'react';
import styled from 'styled-components';

const Modifiers = ({ modifier }) => {
    return (
        <ModifiersStyled className='Modifiers'>
            { modifier }
        </ModifiersStyled>
    );
}

export default Modifiers;

const ModifiersStyled = styled.div`

`;