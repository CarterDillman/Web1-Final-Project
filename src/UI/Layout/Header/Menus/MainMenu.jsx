import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMenu = ({showMenuUpdate}) => {

    const onClick = () => {
        if (showMenuUpdate) {
            showMenuUpdate(false);
        }
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <h2>Main Menu</h2>
            <NavLink onClick={ onClick }to={'/'}>Home</NavLink>
            <NavLink onClick={ onClick }to={'/staff'}>Staff</NavLink>
            <NavLink onClick={ onClick }to={'/contact'}>Contact</NavLink>
            <NavLink onClick={ onClick }to={'/login'}>Login</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`

`;