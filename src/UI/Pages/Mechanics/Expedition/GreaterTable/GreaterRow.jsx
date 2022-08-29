import React from 'react';
import styled from 'styled-components';

const GreaterRow = ({ data, checked, onChange }) => {
    return (
        <GreaterRowStyled className='GreaterRow'>
            <td className='check'><input
                type='checkbox'
                data={data}
                checked={checked}
                onChange={onChange}
                />
            </td>
            <td>{data.base}</td>
            <td className='items'><img src={data.item} /></td>
        </GreaterRowStyled>
    );
}

export default GreaterRow;

const GreaterRowStyled = styled.tr`
    img {
        max-width: 10%;
    }
`;