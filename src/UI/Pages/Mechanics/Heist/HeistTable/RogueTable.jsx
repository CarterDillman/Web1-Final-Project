import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { rogueData } from 'UI/common/data/rogueData.js';

/* Components ---------------------------*/
import HeistTable from './HeistTable.jsx';

const RogueTable = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Rogue Info',
                columns: [
                    {
                        Header: 'Rogue',
                        accessor: 'rogue',
                    },
                    {
                        Header: 'Agility',
                        accessor: 'agility',
                    },
                    {
                        Header: 'Demolition',
                        accessor: 'demolition',
                    },
                    {
                        Header: 'Lockpicking',
                        accessor: 'lockpicking',
                    },
                    {
                        Header: 'Engineering',
                        accessor: 'engineering',
                    },
                    {
                        Header: 'Deception',
                        accessor: 'deception',
                    },
                    {
                        Header: 'Thaumaturgy',
                        accessor: 'thaumaturgy',
                    },
                    {
                        Header: 'Perception',
                        accessor: 'perception',
                    },
                    {
                        Header: 'Brute Force',
                        accessor: 'bruteForce',
                    },
                    {
                        Header: 'Trap Disarm',
                        accessor: 'trapDisarm',
                    },
                    {
                        Header: 'Effect',
                        accessor: 'effect',
                    },
                ]
            }
        ]
    )

    return (
        <RogueTableStyled className='RogueTable'>
            <HeistTable columns={columns} data={rogueData}/>
        </RogueTableStyled>
    );
}

export default RogueTable;

const RogueTableStyled = styled.div`

`;