import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { itemData } from 'UI/common/data/rogueData.js';

/* Components ---------------------------*/
import ToolRow from './ToolRow.jsx';

const ToolTable = () => {

    return (
        <ToolTableStyled className='ToolTable'>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Tool</th>
                        <th>Brooch</th>
                        <th>Cloak</th>
                        <th>Gear</th>
                    </tr>
                    {
                        itemData.map((data, idx) => {
                            return <ToolRow key={idx} data={data}/> ;
                        })
                    }
                </tbody>
            </table>
        </ToolTableStyled>
    );
}

export default ToolTable;

const ToolTableStyled = styled.div`
    margin: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    table {
        th {
            background-color: #332f24;
            color: #dfcf99;
        }
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
            border-bottom: 1px solid #1a1812;
            border-right: 1px solid #1a1812;

            :last-child {
                border-right: 0;
            }
        }
    }
    .modifier{
        font-weight: bold;
    }
`;