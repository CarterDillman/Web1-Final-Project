import React from 'react';
import styled from 'styled-components';

const RogueRow = ({data}) => {

    return (
        <RogueRowStyled className='RogueRow'>
            <td className={`rogueName ${data.rogue}` }><img src={data.image} alt={data.rogue}/><br/>{data.rogue}</td>
            <td className={`agiMod ${data.agility === '-' ? 'noMod' : data.rogue}` }>{data.agility} {data.agiRewards}</td>
            <td className={`demoMod ${data.demolition === '-' ? 'noMod' : data.rogue}` }>{data.demolition} {data.demoRewards}</td>
            <td className={`lockMod ${data.lockpicking === '-' ? 'noMod' : data.rogue}` }>{data.lockpicking} {data.lockRewards}</td>
            <td className={`engiMod ${data.engineering === '-' ? 'noMod' : data.rogue}` }>{data.engineering} {data.engiRewards}</td>
            <td className={`decepMod ${data.deception === '-' ? 'noMod' : data.rogue}` }>{data.deception} {data.decepRewards}</td>
            <td className={`thauMod ${data.thaumaturgy === '-' ? 'noMod' : data.rogue}` }>{data.thaumaturgy} {data.thauRewards}</td>
            <td className={`percepMod ${data.perception === '-' ? 'noMod' : data.rogue}` }>{data.perception} {data.percepRewards}</td>
            <td className={`bruteMod ${data.bruteForce === '-' ? 'noMod' : data.rogue}` }>{data.bruteForce} {data.bruteRewards}</td>
            <td className={`trapMod ${data.trapDisarm === '-' ? 'noMod' : data.rogue}` }>{data.trapDisarm} {data.trapRewards}</td>
            <td className='effect'>{data.effect}</td>
        </RogueRowStyled>
    );
}

export default RogueRow;

const RogueRowStyled = styled.tr`
    width: 100%;
    td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
    }
    img {
        max-width: 30%;
    }
`;