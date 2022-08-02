import React from 'react';
import styled from 'styled-components';

const Feedback = () => {
    return (
        <FeedbackStyled className='Feedback error'>
            Form Feedback
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
    padding: 20px;

    &.error{
        margin-bottom: 30px;
        background-color: #f9c76b;
    }

    &.success {
        background-color: #7df9a8;
    }
`;