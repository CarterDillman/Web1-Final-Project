import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { gwennenData } from 'UI/common/data/gwennenData.js';

/* Components ---------------------------*/
import ExpeditionTable from './ExpeditionTable.jsx';

const ExceptionalTable = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Greater Broken Circle Artifact',
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
        <ExceptionalTableStyled className='ExceptionalTable'>
            <ExpeditionTable columns={columns} data={gwennenData} />
        </ExceptionalTableStyled>
    );
}

export default ExceptionalTable;

const ExceptionalTableStyled = styled.div`

`;