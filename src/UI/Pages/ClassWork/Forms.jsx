import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
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
                <Input
                    label='Name'
                    id='username'
                    type='text'
                    placeholder='Full Name'
                    defaultValue='Carter Dillman'
                    rules={ [ 'required' ] }
                />
                <Textarea
                    label='Tell us about yourself'
                    id='about'
                    placeholder='All about you...'
                    defaultValue='This is what a bio might look like.'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Submit the Form</SubmitButton>
            </UniversalForm>

        </FormsStyled>
    );
}

export default Forms;

const FormsStyled = styled.div`

`;