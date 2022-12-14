import React, { useState }  from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { lesserData, greaterData, grandData, exceptionalData, stringData } from 'UI/common/data/gwennenData.js';

/* Components ---------------------------*/
import LesserTable from './LesserTable/LesserTable.jsx';
import GreaterTable from './GreaterTable/GreaterTable.jsx';
import GrandTable from './GrandTable/GrandTable.jsx';
import ExceptionalTable from './ExceptionalTable/ExceptionalTable.jsx';

const StringGen = () => {

    // Generate state for each table checkbox
    const [checkLesserState, checkLesserStateUpdate] = useState(
        new Array(lesserData.length).fill(false)
    );
    const [checkGreaterState, checkGreaterStateUpdate] = useState(
        new Array(greaterData.length).fill(false)
    );
    const [checkGrandState, checkGrandStateUpdate] = useState(
        new Array(grandData.length).fill(false)
    );
    const [checkExceptionalState, checkExceptionalStateUpdate] = useState(
        new Array(exceptionalData.length).fill(false)
    );

    // Generate a total list to store all checkbox values and initialize with false
    const [lesserItemList, setLesserItemList] = useState([false]);
    const [greaterItemList, setGreaterItemList] = useState([false]);
    const [grandItemList, setGrandItemList] = useState([false]);
    const [exceptionalItemList, setExceptionalItemList] = useState([false]);

    // Convert true/false values into their "ngram" value
    const [string, setString] = useState('No items have been selected.');
    const [showString, setshowString] = useState(false);

    // Check to see if the checkbox is checked
    const onChangeLesser = (position) => {
        const updatedCheck = checkLesserState.map((item, idx) =>
            idx === position ? !item : item
        );
        checkLesserStateUpdate(updatedCheck);

        const checkedList = updatedCheck.map((item, idx) =>{
            if(item === true){
                return lesserData[idx].base;
            }
            return item;
        })
        setLesserItemList(checkedList);
    }

    // Check to see if the checkbox is checked
    const onChangeGreater = (position) => {
        const updatedCheck = checkGreaterState.map((item, idx) =>
            idx === position ? !item : item
        );
        checkGreaterStateUpdate(updatedCheck);

        const checkedList = updatedCheck.map((item, idx) =>{
            if(item === true){
                return greaterData[idx].base;
            }
            return item;
        })
        setGreaterItemList(checkedList);
    }

    // Check to see if the checkbox is checked
    const onChangeGrand = (position) => {
        const updatedCheck = checkGrandState.map((item, idx) =>
            idx === position ? !item : item
        );
        checkGrandStateUpdate(updatedCheck);

        const checkedList = updatedCheck.map((item, idx) =>{
            if(item === true){
                return grandData[idx].base;
            }
            return item;
        })
        setGrandItemList(checkedList);
    }

    // Check to see if the checkbox is checked
    const onChangeExceptional = (position) => {
        const updatedCheck = checkExceptionalState.map((item, idx) =>
            idx === position ? !item : item
        );
        checkExceptionalStateUpdate(updatedCheck);

        const checkedList = updatedCheck.map((item, idx) =>{
            if(item === true){
                return exceptionalData[idx].base;
            }
            return item;
        })
        setExceptionalItemList(checkedList);
    }

    // Generate the full list of checked boxes when button is clicked and push "ngram" state
    const onClick = () => {
        const getList = lesserItemList.concat(greaterItemList, grandItemList, exceptionalItemList);
        const string = getList.map((item) => {
            const stringItem = stringData.map((string) => {
                if(item === string.base){
                    return string.string;
                }
            })
            return stringItem;
        })
        setString(string.flat().filter(nonChar => nonChar !== undefined).join(" | "));
        setshowString(true);
    }

    return (
        <StringGenStyled className='StringGen'>
            {!showString && (
                <p className='stringFormat'>No items have been selected yet.</p>
            )}
            {showString && (
                <p className='stringFormat'>" {string} "</p>
            )}
            <button type='button' onClick={onClick}>Generate String</button>
            <LesserTable data={lesserData} checkState={checkLesserState} onChange={onChangeLesser}/>
            <GreaterTable data={greaterData} checkState={checkGreaterState} onChange={onChangeGreater}/>
            <GrandTable data={grandData} checkState={checkGrandState} onChange={onChangeGrand}/>
            <ExceptionalTable data={exceptionalData} checkState={checkExceptionalState} onChange={onChangeExceptional}/>
        </StringGenStyled>
    );
}

export default StringGen;

const StringGenStyled = styled.div`
    background-color: #0f0f0f;

    .stringFormat {
        background-color: #332f24;
        border: 1px solid #734e32;
        border-radius: 5px;
        padding: 20px;
    }
    button {
        background-color: #332f24;
        border: 1px solid #734e32;
        border-radius: 5px;
        padding: 10px;
        color: #dfcf99;
        cursor: pointer;
        :hover {
            background-color: #26231b
        }
    }

`;