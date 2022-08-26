import React from 'react';
import styled from 'styled-components';
import { Outlet, Navlink } from 'react-router-dom';

const Mechanics = () => {
    return (
        <MechanicsStyled className='Mechanics'>
            <nav className='sublinks'>
                <Navlink to='/mechanics'>Heist</Navlink>
            </nav>

            <Outlet />
        </MechanicsStyled>
    );
}

export default Mechanics;

const MechanicsStyled = styled.div`

`;