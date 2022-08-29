import React from 'react';
import styled from 'styled-components';

const Mechanic = ({title, children}) => {
    return (
        <MechanicStyled className='Mechanic'>
            <h3>{title}</h3>

            <div className='explanation'>
                { children }
            </div>
        </MechanicStyled>
    );
}

export default Mechanic;

const MechanicStyled = styled.div`

`;