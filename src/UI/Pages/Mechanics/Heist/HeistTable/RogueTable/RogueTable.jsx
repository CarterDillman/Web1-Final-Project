import React from 'react';
import styled from 'styled-components';

import { rogueData, rogueHeader } from 'UI/common/data/rogueData.js';

import RogueRow from './RogueRow.jsx';
import RogueHeader from './RogueHeader.jsx';

const RogueTable = () => {

    return (
        <RogueTableStyled className='RogueTable'>
            <table>
                <thead className='rogueHeader'>
                    {
                        rogueHeader.map((data, idx) => {
                            return <RogueHeader key={idx} data={data} />
                        })
                    }
                </thead>
                <tbody>
                    {
                        rogueData.map((data, idx) => {
                            return <RogueRow key={idx} data={data}/> ;
                        })
                    }
                </tbody>
            </table>
        </RogueTableStyled>
    );
}

export default RogueTable;

const RogueTableStyled = styled.div`
    margin: 30px;
    table {
        border-spacing: 0;
        background-color: grey;
        border: 1px solid black;
        text-align: center;
        font-size: 14px;
        thead {
            background-color: darkgreen;
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
    .Vinderi{
        background-color: lightgreen;
    }
    .Karst {
        background-color: lightgreen;
    }
    .Nenet {
        background-color: lightgreen;
    }
    .Tullina {
        background-color: lightgreen;
    }
    .Gianna {
        background-color: yellow;
    }
    .Isla {
        background-color: yellow;
    }
    .Tibbs {
        background-color: red;
    }
    .Niles {
        background-color: red;
    }
    .Huck {
        background-color: red;
    }
`;