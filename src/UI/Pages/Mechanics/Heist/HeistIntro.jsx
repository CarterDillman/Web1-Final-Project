import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Mechanic from '../Mechanic.jsx';

const HeistIntro = () => {
    return (
        <HeistIntroStyled className='HeistIntro'>
            <Mechanic title='Heist Basics'>
                <p>
                    Beginning in Act 6, monsters can start dropping Rogue Markers. Right clicking these in town or your hideout will open a portal to the Rogue Harbor. Talk with Kurai and each NPC in the harbor. Kurai will give you your first contract. Contracts are turned in to Adiyah. Talking with Adiyah will open a window where you will need to select the rogue who will be joining you on the heist. The first contract will only have Karst available. After clicking "Sign Contract", Adiyah will open a portal to the heist.
                </p>
            </Mechanic>
            <Mechanic title='Running Contracts'>
                <p>
                    At the bottom of the screen you will see a bar for the "Alert Level". Every chest you open will increase the Alert Level by a certain amount. Small chests, marked on the map with a small chest icon, will raise it less than large reward chests. Large reward chests are marked on the map with a icon showing the specific reward. Each contract is tied to a specific level job and a specific reward (<i>See table below</i>). Hovering over a chest will show you how much the alert level will raise by if opened. The goal is to open as many chests as possible before the bar fills and the area goes into lockdown. Make sure you get the target item before the area finishes going into lockdown or you will not receive credit for the contract. The case the target item is in requires two clicks so you can still loot more if you accidentally misclick. There will be icons throughout the map representing the job type for the rogue to resolve. Pressing V near these areas will make the rogue start performing their action and is better than clicking the actual icon.
                </p>
            </Mechanic>
            <Mechanic title='Dying in Heist'>
                <p>
                    Dying in heist is bad. Items picked up during a heist are marked as "Contraband" and will be removed from your inventory upon death. Contraband status is cleared when leaving the heist so if a big item drops like a divine orb, you can leave the heist and immediately return to save those items.
                </p>
            </Mechanic>
            <Mechanic title='Lockdown'>
                <p>
                    Once the alert level is full, a timer replaces the alert level bar, showing how long you have before lockdown starts. You can still open chests at this point, but be aware that doing so reduces the timer. After the timer ends, or at any point once you open the target item, lockdown begins. In lockdown you can no longer open chests, and enemies begin to spawn in large amounts. This includes a high density of magic and rare monsters. Some doors can lock or new hazards appear that require the rogue to handle.
                </p>
            </Mechanic>
            <Mechanic title='Completing a Contract'>
                <p>
                    Once you leave with the target item, your rogue gains experience in the job that they did and you will receive a blueprint reveal from Whakano. Failing the contract, either by dying or failing to grab the target item, will mean you get neither of these things.
                </p>
            </Mechanic>
        </HeistIntroStyled>
    );
}

export default HeistIntro;

const HeistIntroStyled = styled.div`

`;