import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/

const Expedition = () => {
    // Testing State for string generation
    const [textState, textStateUpdate] = useState('button is not pushed');

    const submitText = () => {
        textStateUpdate('button is pushed');
    }

    return (
        <ExpeditionStyled className='Expedition'>
            <h2>Gwennen Regex Generator</h2>
            <p>Select the items you would like to gamble for from Gwennen and paste the result into the trade window search bar.</p>
            <button onClick={submitText}>Generate String</button>
            <p>{ textState }</p>
        </ExpeditionStyled>
    );
}

export default Expedition;

const ExpeditionStyled = styled.div`

`;