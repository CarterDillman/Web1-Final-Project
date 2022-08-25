import React from 'react';
import styled from 'styled-components';

import SyndicateTable from './BetrayalTable/SyndicateTable.jsx';

const Betrayal = () => {
    return (
        <BetrayalStyled className='Betrayal'>
            <SyndicateTable />
        </BetrayalStyled>
    );
}

export default Betrayal;

const BetrayalStyled = styled.div`

`;