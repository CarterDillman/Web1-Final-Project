import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { gwennenData } from 'UI/common/data/gwennenData.js';

/* Components ---------------------------*/
import ExpeditionTable from './ExpeditionTable.jsx';

const LesserTable = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Lesser Broken Circle Artifact',
                columns: [
                    {
                        Header: 'Base',
                        accessor: 'base',
                    },
                    {
                        Header: 'Item(s)',
                        accessor: 'items',
                        Cell: tableProps => (
                            <img
                                src={tableProps.row.original.item}
                            />
                        ),
                    },
                ]
            }
        ]
    )

    return (
        <LesserTableStyled className='LesserTable'>
            <ExpeditionTable columns={columns} data={gwennenData}/>
        </LesserTableStyled>
    );
}

export default LesserTable;

const LesserTableStyled = styled.div`

`;