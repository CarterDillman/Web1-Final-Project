import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FormGroup from './FormGroup/FormGroup.jsx';

const Input = () => {
    return (
        <InputStyled className='Input'>
            <FormGroup>
                <input />
            </FormGroup>
        </InputStyled>
    );
}

export default Input;

const InputStyled = styled.div`
    input {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #eee;
        border-radius: 5px;
        outline: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }

        &.error {
            border: solid 2px red;
        }
    }
`;