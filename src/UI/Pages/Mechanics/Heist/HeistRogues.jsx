import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Mechanic from '../Mechanic.jsx';

const HeistRogues = () => {
    return (
        <HeistRoguesStyled className='HeistRogues'>
            <Mechanic>
                <table>
                    <tr>
                        <td>Karst &rarr;</td>
                        <td>Huck &rarr;</td>
                        <td>Niles &rarr;</td>
                        <td>Vinderi &rarr;</td>
                        <td>Gianna</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Tibbs &rarr;</td>
                        <td colSpan={2}>Tullina &rarr;</td>
                        <td>Nenet</td>
                    </tr>
                    <tr>
                        <td colSpan={5}>Isla doesn't have friends so she brings no one.</td>
                    </tr>
                </table>
            </Mechanic>
            <Mechanic title='Setting Up'>
                <p>
                    Prioritize unlocking all rogues and leveling them up to max, so you can run all contracts. Remember that they also gain experience from Grand Heists, so if there is one you can run with their current levels, you might want to pick a less optimal rogue for a job just to level them up. We want them maxed in all their jobs to always be able to take 3 rogues to each wing of a Grand Heist.
                </p>
                <p>
                    You can purchase contracts up to level 67 from Whakano for chance orbs. Check his inventory if there is a job type you need to level up and can't find elsewhere.
                </p>
                <p>
                    Run a trinket grand heist. Touching the statue in the reward room will unlock your trinket slot.
                </p>
                <p>
                    Rogue levels are kept between your characters but you must unlock the trinket slot for each one.
                </p>
                <p>
                    Buy a good trinket and gear up your rogues.
                </p>
            </Mechanic>
        </HeistRoguesStyled>
    );
}

export default HeistRogues;

const HeistRoguesStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    table {
        th {
            background-color: #332f24;
            color: #dfcf99;
        }
        tr {
            :last-child {
                td{
                    border-bottom: 0;
                }
            }
        }
        td {
            font-weight: bold;
            color: #dfcf99;
        }
        th, td {
            margin: 0;
            padding: 10px;
            border-bottom: 1px solid #1a1812;
            border-right: 1px solid #1a1812;
            line-height: 1.25;
            :last-child {
                border-right: 0;
            }
        }
    }
`;