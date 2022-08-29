import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';


const Home = () => {

    return (
        <HomeStyled className='Home'>
            <h1>Home</h1>

            <Tabbed />

        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    h1 { display: none; }
`;