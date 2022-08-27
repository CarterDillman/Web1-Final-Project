import React from 'react';
import styled from 'styled-components';

const ExceptionalRow = ({ data, checked, onChange }) => {
    return (
        <ExceptionalRowStyled className='ExceptionalRow'>
            <td><input
                type='checkbox'
                data={data}
                checked={checked}
                onChange={onChange}
                />
            </td>
            <td>{data.base}</td>
            <td><img src={data.item} /></td>
        </ExceptionalRowStyled>
    );
}

export default ExceptionalRow;

const ExceptionalRowStyled = styled.tr`
    img {
        max-width: 50%;
    }
`;