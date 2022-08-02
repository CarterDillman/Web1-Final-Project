import React from 'react';
import styled from 'styled-components';

const Label = () => {
    return (
        <LabelStyled className='Label'>
            <label>
                Label
            </label>
        </LabelStyled>
    );
}

export default Label;

const LabelStyled = styled.div`
    padding: 5px 0px;

    label {
        font-size: 20px;
        font-weight: bold;
    }
`;