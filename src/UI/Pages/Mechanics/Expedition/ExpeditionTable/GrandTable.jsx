import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { gwennenData } from 'UI/common/data/gwennenData.js';

/* Components ---------------------------*/
import ExpeditionTable from './ExpeditionTable.jsx';

const GrandTable = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Grand Broken Circle Artifact',
                columns: [
                    {
                        Header: 'Base',
                        accessor: 'base',
                    },
                    {
                        Header: 'Item(s)',
                        accessor: 'items',
                    },
                ]
            }
        ]
    )

    return (
        <GrandTableStyled className='GrandTable'>
            <ExpeditionTable columns={columns} data={gwennenData}/>
        </GrandTableStyled>
    );
}

export default GrandTable;

const GrandTableStyled = styled.div`

`;