import React from 'react';
import styled from 'styled-components';

import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Forms = () => {
    return (
        <FormsStyled className='Forms'>
            <h2>Forms</h2>

            <UniversalForm>
                <Input />
                <Textarea />
                <SubmitButton>Submit the Form</SubmitButton>
            </UniversalForm>

        </FormsStyled>
    );
}

export default Forms;

const FormsStyled = styled.div`

`;