import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({children}) => {
    return (
        <SubmitButtonStyled className='SubmitButton'>
            <button type='submit'>
                { children }
            </button>
        </SubmitButtonStyled>
    );
}

export default SubmitButton;

const SubmitButtonStyled = styled.div`
    padding: 10px;
    text-align: right;

    button {
        background-color: #332f24;
        color: #dfcf99;
        padding: 10px 20px;
        border: 1px solid #734e32;
        border-radius: 5px;
        cursor: pointer;

        &:hover, &:focus {
            background-color: #013f3f;
        }
    }
`;