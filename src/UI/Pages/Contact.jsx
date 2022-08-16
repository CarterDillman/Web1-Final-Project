import React from 'react';
import styled from 'styled-components';


/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm';

const Contact = () => {

    const onSubmit = ({fields, payload}) => {
        console.group('Contact Forms');
            console.log('fields', fields);
            console.log('payload', payload);
        console.groupEnd();
    }

    return (
        <ContactStyled className='Contact inset'>
            <h2>Contact</h2>

            <UniversalForm
                displayName='UF: Contact Form'
                onSubmit={ onSubmit }
            >
                <Input
                    label='Email'
                    id='username'
                    type='email'
                    placeholder='Email'
                    defaultValue='example@example.com'
                    rules={ [ 'required', 'email'] }
                />
                <Textarea
                    label='Message'
                    id='message'
                    placeholder='Message'
                    defaultValue='I would like to tell you something about your website.'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Contact Us</SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

`;