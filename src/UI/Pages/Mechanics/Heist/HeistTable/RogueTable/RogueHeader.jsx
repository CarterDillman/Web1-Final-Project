import React from 'react';
import styled from 'styled-components';

const TableHeader = ({data}) => {
    return (
        <TableHeaderStyled className='TableHeader'>
            <th></th>
            <th>{data.agility}</th>
            <th>{data.demolition}</th>
            <th>{data.lockpicking}</th>
            <th>{data.engineering}</th>
            <th>{data.deception}</th>
            <th>{data.thaumaturgy}</th>
            <th>{data.perception}</th>
            <th>{data.bruteForce}</th>
            <th>{data.trapDisarm}</th>
            <th>{data.effect}</th>
        </TableHeaderStyled>
    );
}

export default TableHeader;

const TableHeaderStyled = styled.tr`
    th {
        border-bottom: 1px solid black;

    }
`;