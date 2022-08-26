import React from 'react';
import styled from 'styled-components';

const TableRow = ({data}) => {

    return (
        <TableRowStyled className='TableRow'>
            <td className={ data.rogue }>{data.agility}</td>
        </TableRowStyled>
    );
}

export default TableRow;

const TableRowStyled = styled.tr`
    .whatever{
        background-color: red;
    }
`;