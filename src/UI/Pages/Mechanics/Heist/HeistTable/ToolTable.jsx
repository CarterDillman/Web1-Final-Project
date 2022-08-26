import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { itemData, rogueHeader } from 'UI/common/data/rogueData';

/* Components ---------------------------*/
import HeistTable from './HeistTable.jsx';

const ToolTable = () => {

    return (
        <ToolTableStyled className='ToolTable'>
            <HeistTable header={ rogueHeader } body={ itemData }/>
        </ToolTableStyled>
    );
}

export default ToolTable;

const ToolTableStyled = styled.div`

`;