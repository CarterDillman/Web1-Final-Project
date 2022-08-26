import React from 'react';
import styled from 'styled-components';
//Target rogue name for logic on changing color of cell
//Move modifiers into array
const HeistTable = () => {

    return (
        <HeistTableStyled className='HeistTable'>

        </HeistTableStyled>
    );
}

export default HeistTable;

const HeistTableStyled = styled.div`
    margin: 30px;
    table {
        border-spacing: 0;
        background-color: grey;
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