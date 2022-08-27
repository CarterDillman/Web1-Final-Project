import React, { useState } from 'react';
import styled from 'styled-components';

import LesserRow from './LesserRow.jsx';


const LesserTable = ({data, checkState, onChange}) => {
    return (
        <LesserTableStyled className='LesserTable'>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>Lesser Broken Circle Artifact</th>
                    </tr>
                    <tr>
                        <th>Selected</th>
                        <th>Base</th>
                        <th>Items</th>
                    </tr>
                    {
                        data.map((base, idx) => {
                            return <LesserRow key={idx} data={base} checked={checkState[idx]} onChange={() => onChange(idx)} />
                        })
                    };
                </tbody>
            </table>
        </LesserTableStyled>
    );
}

export default LesserTable;

const LesserTableStyled = styled.div`
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