import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import RogueTable from './HeistTable/RogueTable.jsx';
import ToolTable from './HeistTable/ToolTable.jsx';

const Heist = () => {
    return (
        <HeistStyled className='Heist'>
            <RogueTable />
            <ToolTable />
        </HeistStyled>
    );
}

export default Heist;

const HeistStyled = styled.div`

    margin: 30px;
    table {
        border-spacing: 0;
        border: 1px solid black;
        text-align: center;
        font-size: 14px;
        tr {
            :last-child {
                td{
                    border-bottom: 0;
                }
            }
        }
        th, td {
            margin: 0;
            padding: 10px;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }

    }
`;