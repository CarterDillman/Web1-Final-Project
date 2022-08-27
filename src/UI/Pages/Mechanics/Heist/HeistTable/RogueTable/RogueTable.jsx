import React from 'react';
import styled from 'styled-components';

import { rogueData, rogueHeader } from 'UI/common/data/rogueData.js';

import RogueRow from './RogueRow.jsx';
import RogueHeader from './RogueHeader.jsx';

const RogueTable = () => {

    return (
        <RogueTableStyled className='RogueTable'>
            <table>
                <tbody>
                    {
                        rogueHeader.map((data, idx) => {
                            return <RogueHeader key={idx} data={data} />
                        })
                    }
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
    display: flex;
    justify-content: center;
    width: 100%;
    table {
        thead {
            background-color: #332f24;
            color: #dfcf99;
        }
        tr {
            line-height: 1;
            :last-child {
                td{
                    border-bottom: 0;
                }
            }
        }
        th {
            padding: 10px;
            margin: 0;
        }
        th, td {
            border-bottom: 1px solid #1a1812;
            border-right: 1px solid #1a1812;
            :last-child {
                border-right: 0;
            }
        }
    }
    .rogueName{
        font-weight: bold;
        font-size: 18px;
    }
    .Vinderi, .Karst, .Nenet, .Tullina {
        background-color: lightgreen;
        color: #332f24;
    }
    .Gianna {
        background-color: lightgreen;
        color: #332f24;
        :nth-child(7){
            background-color: yellow;
        }
        :nth-child(8){
            background-color: red;
        }
    }
    .Isla, .Tibbs {
        background-color: yellow;
        color: #332f24;
    }
    .Niles, .Huck {
        background-color: red;
        color: #332f24;
    }
    .effect{
        white-space: nowrap;
        color: #8888ff;
    }
`;