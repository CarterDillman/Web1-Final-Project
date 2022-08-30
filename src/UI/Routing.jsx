import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Incursion from './Pages/Mechanics/Incursion/Incursion.jsx';
import Expedition from './Pages/Mechanics/Expedition/Expedition.jsx';
import Heist from './Pages/Mechanics/Heist/Heist.jsx';
import Login from './Pages/Login.jsx';

const Routing = () => {
    return (
        <RoutingStyled className='Routing'>
            <Routes>
                <Route element={ <Home /> }                  path=''/>
                <Route element={ <Incursion /> }             path='/incursion'/>
                <Route element={ <Expedition /> }            path='/expedition'/>
                <Route element={ <Heist /> }                 path='/heist'/>
                <Route element={ <Login /> }                 path='login'/>
            </Routes>
        </RoutingStyled>
    );
}

export default Routing;

const RoutingStyled = styled.div`

`;