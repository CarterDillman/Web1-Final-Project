import React from 'react';
import styled from 'styled-components';

import GrandRow from './GrandRow.jsx';

const GrandTable = ({data, checkState, onChange}) => {
    return (
        <GrandTableStyled className='GrandTable'>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>Grand Broken Circle Artifact</th>
                    </tr>
                    <tr>
                        <th>Selected</th>
                        <th>Base</th>
                        <th>Items</th>
                    </tr>
                    {
                        data.map((base, idx) => {
                            return <GrandRow key={idx} data={base} checked={checkState[idx]} onChange={() => onChange(idx)} />
                        })
                    }
                </tbody>
            </table>
        </GrandTableStyled>
    );
}

export default GrandTable;

const GrandTableStyled = styled.div`
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