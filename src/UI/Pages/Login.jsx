import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'UI/common/UniversalForm/UniversalForm';

const Login = () => {

    const onSubmit = ({fields, payload}) => {
        console.group('Login Form');
            console.log('fields', fields);
            console.log('payload', payload);
        console.groupEnd();
    }

    return (
        <LoginStyled className='Login inset'>
            <h2>Login</h2>

            <UniversalForm
                displayName='UF: Login Form'
                onSubmit={ onSubmit }
            >
                <Input
                    label='Email'
                    id='username'
                    type='email'
                    defaultValue='user@example.com'
                    rules={ [ 'required', 'email' ] }
                />
                <Input
                    label='Password'
                    id='password'
                    type='password'
                    rules={ [ 'required' ] }
                />
                <SubmitButton>Log In</SubmitButton>
            </UniversalForm>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

`;