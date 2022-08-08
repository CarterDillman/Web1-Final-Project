import React from 'react';
import styled from 'styled-components';

const ControlFeedback = () => {
    return (
        <ControlFeedbackStyled className='ControlFeedback'>
            Control Feedback
        </ControlFeedbackStyled>
    );
}

export default ControlFeedback;

const ControlFeedbackStyled = styled.div`
    color: #b10202;
    padding: 5px 0px;
    font-weight: bold;

    ul{
        padding: 0px;
        margin: 5px 0px 0px;
        li{
            list-style-type: none;
        }
    }
`;