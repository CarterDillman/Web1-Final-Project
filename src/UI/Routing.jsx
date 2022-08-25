import React from 'react';
import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Incursion from './Pages/Mechanics/Incursion/Incursion.jsx';
import Expedition from './Pages/Mechanics/Expedition/Expedition.jsx';
import Heist from './Pages/Mechanics/Heist/Heist.jsx';
import Betrayal from './Pages/Mechanics/Betrayal/Betrayal.jsx';
import Login from './Pages/Login.jsx';

import ClassWork from './Pages/ClassWork/ClassWork.jsx';
import Homework from './Pages/ClassWork/Homework/Homework.jsx';
import Swapper from './Pages/ClassWork/Swapper/SwapList.jsx';
import JavaScript from './Pages/ClassWork/JavaScript/JavaScript.jsx';
import ControlledInput from './Pages/ClassWork/ControlledInput.jsx';
import Forms from './Pages/ClassWork/Forms.jsx';
import Video from './Pages/ClassWork/Video.jsx';

const Routing = () => {
    return (
        <RoutingStyled className='Routing'>
            <Routes>
                <Route element={ <Home /> }                  path=''/>
                <Route element={ <Incursion /> }             path='/incursion'/>
                <Route element={ <Expedition /> }            path='/expedition'/>
                <Route element={ <Heist /> }                 path='/heist'/>
                <Route element={ <Betrayal /> }              path='/betrayal'/>
                <Route element={ <Login /> }                 path='login'/>

                <Route element={ <ClassWork /> }             path='/class'>
                    <Route element={ <Homework /> }          path='' />
                    <Route element={ <Swapper /> }           path='swapper'/>
                    <Route element={ <JavaScript />}         path='javascript'/>
                    <Route element={ <ControlledInput /> }   path='controlled-input'/>
                    <Route element={ <Forms /> }             path='forms'/>
                    <Route element={ <Video /> }             path='video'/>
                </Route>
            </Routes>
        </RoutingStyled>
    );
}

export default Routing;

const RoutingStyled = styled.div`

`;