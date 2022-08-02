import React from 'react';
import styled from 'styled-components';

const Form = ({children}) => {
    return (
        <FormStyled className='Form'>
            <form>
                { children }
            </form>
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.div`

`;