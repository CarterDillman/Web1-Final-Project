import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm.jsx';

const Forms = () => {

    const onSubmit = ({fields, payload}) => {
        console.group('Class Work Forms');
            console.log('fields', fields);
            console.log('payload', payload);
        console.groupEnd();
    }

    return (
        <FormsStyled className='Forms'>
            <h2>Forms</h2>

            <UniversalForm
                displayName='UF: ClassWork Form'
                onSubmit={ onSubmit }
            >
                <Input
                    label='FirstName'
                    id='first'
                    type='text'
                    placeholder='First Name'
                    defaultValue='Carter'
                    rules={ [ 'required' ] }
                />
                <Input
                    label='LastName'
                    id='last'
                    type='text'
                    placeholder='Last Name'
                    defaultValue='Dillman'
                    rules={ [ 'required' ] }
                />
                <Input
                    label='Email'
                    id='email'
                    type='text'
                    placeholder='Email'
                    defaultValue='carter.dillman@example.com'
                    rules={ [ 'required', 'email' ] }
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