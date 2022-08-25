import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { memberData, imageData } from 'UI/common/data/syndicateData';

/* Components ---------------------------*/
import BetrayalTable from './BetrayalTable.jsx';

const SyndicateTable = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                Cell: tableProps => (
                    <img
                        src={tableProps.row.original.aisling}
                    />
                )
            }
        ]
    )

    return (
        <SyndicateTableStyled className='SyndicateTable'>
            <BetrayalTable columns={columns} data={memberData} />
        </SyndicateTableStyled>
    );
}

export default SyndicateTable;

const SyndicateTableStyled = styled.div`

`;