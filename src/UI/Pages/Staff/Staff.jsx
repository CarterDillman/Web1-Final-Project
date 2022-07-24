import React from 'react';
import styled from 'styled-components';

/* Componenets -----------------------------*/
import StaffList from './StaffList.jsx';

const Staff = () => {
    return (
        <StaffStyled className='Staff inset'>
            <h1>Staff</h1>
            <StaffList />
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`

`;