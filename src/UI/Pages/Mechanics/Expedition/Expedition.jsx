import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import LesserTable from './ExpeditionTable/LesserTable.jsx';
import GreaterTable from './ExpeditionTable/GreaterTable.jsx';
import ExceptionalTable from './ExpeditionTable/ExceptionalTable.jsx';
import GrandTable from './ExpeditionTable/GrandTable.jsx';
import { SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Expedition = () => {
    return (
        <ExpeditionStyled className='Expedition'>
            <h2>Gwennen Regex Generator</h2>
            <p>Select the items you would like to gamble for from Gwennen and paste the result into the trade window search bar.</p>
            <SubmitButton>Generate String</SubmitButton>
            <LesserTable />
            <GreaterTable />
            <GrandTable />
            <ExceptionalTable />
        </ExpeditionStyled>
    );
}

export default Expedition;

const ExpeditionStyled = styled.div`

`;