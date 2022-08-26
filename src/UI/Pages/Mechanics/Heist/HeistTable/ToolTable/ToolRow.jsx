import React from 'react';
import styled from 'styled-components';

const ToolRow = ({data}) => {
    return (
        <ToolRowStyled className='ToolRow'>
            <td className='modifier'>{ data.modifier }</td>
            <td>{ data.tool }</td>
            <td>{ data.brooch }</td>
            <td>{ data.cloak }</td>
            <td>{ data.gear }</td>
        </ToolRowStyled>
    );
}

export default ToolRow;

const ToolRowStyled = styled.tr`

`;