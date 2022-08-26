import React from 'react';
import styled from 'styled-components';

const RogueRow = ({data}) => {

    return (
        <RogueRowStyled className='RogueRow'>
            <td className={ data.rogue }>{data.rogue}</td>
            <td className={ data.agility === '-' ? 'noMod' : data.rogue }>{data.agility}</td>
            <td className={ data.demolition === '-' ? 'noMod' : data.rogue }>{data.demolition}</td>
            <td className={ data.lockpicking === '-' ? 'noMod' : data.rogue }>{data.lockpicking}</td>
            <td className={ data.engineering === '-' ? 'noMod' : data.rogue }>{data.engineering}</td>
            <td className={ data.deception === '-' ? 'noMod' : data.rogue }>{data.deception}</td>
            <td className={ data.thaumaturgy === '-' ? 'noMod' : data.rogue }>{data.thaumaturgy}</td>
            <td className={ data.perception === '-' ? 'noMod' : data.rogue }>{data.perception}</td>
            <td className={ data.bruteForce === '-' ? 'noMod' : data.rogue }>{data.bruteForce}</td>
            <td className={ data.trapDisarm === '-' ? 'noMod' : data.rogue }>{data.trapDisarm}</td>
            <td>{data.effect}</td>
        </RogueRowStyled>
    );
}

export default RogueRow;

const RogueRowStyled = styled.tr`
    td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
    }


`;