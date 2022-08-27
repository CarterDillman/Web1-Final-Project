import React from 'react';
import styled from 'styled-components';

import GreaterRow from './GreaterRow.jsx';

const GreaterTable = ({data, checkState, onChange}) => {
    return (
        <GreaterTableStyled className='GreaterTable'>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>Greater Broken Circle Artifact</th>
                    </tr>
                    <tr>
                        <th>Selected</th>
                        <th>Base</th>
                        <th>Items</th>
                    </tr>
                    {
                        data.map((base, idx) => {
                            return <GreaterRow key={idx} data={base} checked={checkState[idx]} onChange={() => onChange(idx)} />
                        })
                    }
                </tbody>
            </table>
        </GreaterTableStyled>
    );
}

export default GreaterTable;

const GreaterTableStyled = styled.div`
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
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }
    }
`;