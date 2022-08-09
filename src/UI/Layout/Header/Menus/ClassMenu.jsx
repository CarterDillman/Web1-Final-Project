import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ClassMenu = ({showMenuUpdate}) => {

    const onClick = () => {
        if (showMenuUpdate) {
            showMenuUpdate(false);
        }
    }

    return (
        <ClassMenuStyled className='ClassMenu'>
            <h2>Class Menu</h2>
            <NavLink onClick={ onClick }to={'/class'}>Class</NavLink>
        </ClassMenuStyled>
    );
}

export default ClassMenu;

const ClassMenuStyled = styled.div`

`;