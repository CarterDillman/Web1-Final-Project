import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { gwennenData } from 'UI/common/data/gwennenData.js';

/* Components ---------------------------*/
import ExpeditionTable from './ExpeditionTable.jsx';

const GreaterTable = () => {

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
        <GreaterTableStyled className='GreaterTable'>
            <ExpeditionTable columns={columns} data={gwennenData} />
        </GreaterTableStyled>
    );
}

export default GreaterTable;

const GreaterTableStyled = styled.div`

`;