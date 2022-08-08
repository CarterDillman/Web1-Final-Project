import React from 'react';
import styled from 'styled-components';

import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Forms = () => {

    const onSubmit = () => {
        console.log('classwork form has been submitted');
    }

    return (
        <FormsStyled className='Forms'>
            <h2>Forms</h2>

            <UniversalForm
                displayName='UF: ClassWork Form'
                onSubmit={ onSubmit }
            >
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