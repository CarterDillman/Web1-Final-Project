import React from 'react';
import styled from 'styled-components';

import { rogueData } from 'UI/common/data/rogueData.js';

import TableRow from './TableRow.jsx';

//Target rogue name for logic on changing color of cell
//Move modifiers into array
const HeistTable = () => {

    return (
        <HeistTableStyled className='HeistTable'>
            <table>
                <thead>
                    <th>Test</th>
                </thead>
                <tbody>
                    <tr>
                        {
                        rogueData.map((skill, idx) => {
                            return <TableRow key={idx} data={skill}/> ;
                        })
                        }
                    </tr>
                </tbody>
            </table>
        </HeistTableStyled>
    );
}

export default HeistTable;

const HeistTableStyled = styled.div`
    margin: 30px;

`;