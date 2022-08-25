import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { itemData } from 'UI/common/data/rogueData';

/* Components ---------------------------*/
import HeistTable from './HeistTable.jsx';

const ToolTable = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Recommended Tool Modifiers',
                columns: [
                    {
                        Header: 'Modifiers',
                        accessor: 'modifiers',
                    },
                    {
                        Header: 'Tool',
                        accessor: 'tool',
                    },
                    {
                        Header: 'Brooch',
                        accessor: 'brooch',
                    },
                    {
                        Header: 'Cloak',
                        accessor: 'cloak',
                    },
                    {
                        Header: 'Gear',
                        accessor: 'gear'
                    },
                ]
            }
        ]
    )

    return (
        <ToolTableStyled className='ToolTable'>
            <HeistTable columns={columns} data={itemData} />
        </ToolTableStyled>
    );
}

export default ToolTable;

const ToolTableStyled = styled.div`

`;