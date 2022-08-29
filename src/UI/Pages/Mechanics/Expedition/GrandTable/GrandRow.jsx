import React from 'react';
import styled from 'styled-components';

const GrandRow = ({ data, checked, onChange }) => {
    return (
        <GrandRowStyled className='GrandRow'>
            <td className='check'><input
                type='checkbox'
                data={data}
                checked={checked}
                onChange={onChange}
                />
            </td>
            <td>{data.base}</td>
            <td className='items'><img src={data.item} /></td>
        </GrandRowStyled>
    );
}

export default GrandRow;

const GrandRowStyled = styled.tr`
    img {
        max-width: 10%;
    }
`;