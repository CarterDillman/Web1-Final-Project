import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FormGroup from './FormGroup/FormGroup.jsx';

const Textarea = () => {
    return (
        <TextareaStyled className='Textarea'>
            <FormGroup>
                <textarea />
            </FormGroup>
        </TextareaStyled>
    );
}

export default Textarea;

const TextareaStyled = styled.div`
    textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #eee;
        border-radius: 5px;
        outline: none;

        height: 250px;
        resize: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }

        &.error {
            border: solid 2px red;
        }
    }
`;