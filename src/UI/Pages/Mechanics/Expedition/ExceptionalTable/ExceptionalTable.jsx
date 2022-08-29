import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ExceptionalRow from './ExceptionalRow.jsx';

const ExceptionalTable = ({data, checkState, onChange}) => {
    return (
        <ExceptionalTableStyled className='ExceptionalTable'>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>Exceptional Broken Circle Artifact</th>
                    </tr>
                    <tr>
                        <th>Selected</th>
                        <th>Base</th>
                        <th>Items</th>
                    </tr>
                    {
                        data.map((base, idx) => {
                            return <ExceptionalRow key={idx} data={base} checked={checkState[idx]} onChange={() => onChange(idx)} />
                        })
                    }
                </tbody>
            </table>
        </ExceptionalTableStyled>
    );
}

export default ExceptionalTable;

const ExceptionalTableStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
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
    .items {
        flex-direction: row;
        justify-content: center;
    }
    .check {
        width: 5%;
    }
`;