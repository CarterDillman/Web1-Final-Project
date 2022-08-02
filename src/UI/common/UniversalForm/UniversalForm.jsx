import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Form from './Form.jsx';
import Feedback from './Feedback.jsx';

/* Exported Components ---------------------------*/
export { default as Input } from './Controls/Input.jsx';
export { default as Textarea } from './Controls/Textarea.jsx';
export { default as SubmitButton } from './Controls/SubmitButton.jsx';

const UniversalForm = ({children}) => {
    return (
        <UniversalFormStyled className='UniversalForm'>
            <Feedback />
            <Form>
                { children }
            </Form>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`

`;