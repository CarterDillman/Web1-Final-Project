import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import StringGen from './StringGen.jsx';

const Expedition = () => {
    // Testing State for string generation

    return (
        <ExpeditionStyled className='Expedition inset'>
            <h2>Gwennen Search String Generator</h2>
            <p className='instruction'>Select the items you would like to gamble for from Gwennen and paste the result into the trade window search bar.</p>
            <StringGen />

        </ExpeditionStyled>
    );
}

export default Expedition;

const ExpeditionStyled = styled.div`
    background-color: #0f0f0f;
    border: 2px solid #734e32;
    border-radius: 5px;
    padding-bottom: 50px;
`;