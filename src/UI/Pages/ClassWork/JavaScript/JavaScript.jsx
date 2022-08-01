import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import alertConsoleScript from './scripts/1.alert-console.js';
import variablesScript from './scripts/2.variables.js';
import objectsScript from './scripts/3.objects.js';
import arraysScript from './scripts/4.arrays.js';
import functionsScript from './scripts/5.functions.js';

const JavaScript = () => {

    alertConsoleScript();
    variablesScript();
    objectsScript();
    arraysScript();
    functionsScript();

    return (
        <JavaScriptStyled className='JavaScript'>
            <h3>JavaScript Fundamentals</h3>
        </JavaScriptStyled>
    );
}

export default JavaScript;

const JavaScriptStyled = styled.div`

`;