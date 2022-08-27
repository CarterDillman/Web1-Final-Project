import React from 'react';
import styled from 'styled-components';

const LesserRow = ({ data, checked, onChange }) => {
    return (
        <LesserRowStyled className='LesserRow'>
            <td><input
                type='checkbox'
                data={data}
                checked={checked}
                onChange={onChange}
                />
            </td>
            <td>{data.base}</td>
            <td><img src={data.item} /></td>
        </LesserRowStyled>
    );
}

export default LesserRow;

const LesserRowStyled = styled.tr`

`;