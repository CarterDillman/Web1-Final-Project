import React, { useState }  from 'react';
import styled from 'styled-components';

import { gwennenData } from 'UI/common/data/gwennenData';

import LesserTable from './LesserTable/LesserTable';

const RegexGen = () => {

    const [checkState, checkStateUpdate] = useState(
        new Array(gwennenData.length).fill(false)
    );

    const [itemList, setItemList] = useState();
    const [regex, setRegex] = useState();

    const onChange = (position) => {
        const updatedCheck = checkState.map((item, idx) =>
            idx === position ? !item : item
        );
        checkStateUpdate(updatedCheck);

        const checkedList = updatedCheck.map((item, idx) =>{
            if(item === true){
                return gwennenData[idx].base;
            }
            return item;
        })
        setItemList(checkedList);
    }
    const onClick = () => {
        const regex = itemList.map((item) => {
            if(item === false){
                return 'pink';
            }else{
                return 'blue';
            }
        });
        setRegex(regex);
    }

    return (
        <RegexGenStyled className='RegexGen'>
            <p>{regex} recieved.</p>
            <button type='button' onClick={onClick}>Generate String</button>
            <LesserTable data={gwennenData} checkState={checkState} onChange={onChange}/>
        </RegexGenStyled>
    );
}

export default RegexGen;

const RegexGenStyled = styled.div`

`;