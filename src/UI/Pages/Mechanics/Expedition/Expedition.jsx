import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import LesserTable from './LesserTable/LesserTable.jsx';
import RegexGen from './RegexGen.jsx';

const Expedition = () => {
    // Testing State for string generation
    const [state, updateState] = useState();

    const changeState = () => {
        updateState(LesserTable.itemList);
    }

    return (
        <ExpeditionStyled className='Expedition'>
            <h2>Gwennen Regex Generator</h2>
            <p>Select the items you would like to gamble for from Gwennen and paste the result into the trade window search bar.</p>
            <RegexGen />
        </ExpeditionStyled>
    );
}

export default Expedition;

const ExpeditionStyled = styled.div`

`;