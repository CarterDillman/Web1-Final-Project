import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import StringGen from './StringGen.jsx';

const Expedition = () => {
    // Testing State for string generation

    return (
        <ExpeditionStyled className='Expedition'>
            <div className='generator'>
            <h2>Gwennen Search String Generator</h2>
            <p>Select the items you would like to gamble for from Gwennen and paste the result into the trade window search bar.</p>
            </div>
            <StringGen />
        </ExpeditionStyled>
    );
}

export default Expedition;

const ExpeditionStyled = styled.div`
    max-width: 1200px;
    margin: auto;
    background-color: #0f0f0f;
    border: 2px solid #734e32;
    border-radius: 5px;
    padding: 20px auto;

    .generator{
        margin: auto;
        width: 75%;
    }

    h2 {
        margin: 20px auto;
        padding: 20px 0px 20px 0px;
        border-bottom: 1px solid #734e32;
        font-size: 32px;
    }
`;