import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Header from './Header/Header.jsx';
import Main from './Main.jsx';

const Light = ({children}) => {
    return (
        <LightStyled className='Light'>
            <Header/>
            <Main>
                {children}
            </Main>
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 2;

    background-color: #0f0f0f;

    width: 400px;
    height: auto;

`;