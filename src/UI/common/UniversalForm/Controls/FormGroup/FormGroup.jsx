import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Label from './Label.jsx';
import Control from './Control.jsx';

const FormGroup = ({children}) => {
    return (
        <FormGroupStyled className='FormGroup'>
            <Label />

            <Control>
                { children }
            </Control>

        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    margin-bottom: 20px;

    &.error {
        input, textarea {
            border: solid 2px red;
        }
    }
`;