import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h3>Essays</h3>

            <Essay q='Q1: Explain the difference between HTML, CCS, and JavaScript.'>
                <p>
                    HTML stands for HyperText Mark-Up Language and is the base that every other language sits on. When a webpage loads it will always be able to load the bare functioning components even if the user's device is unable to read CSS or JavaScript. HTML is what builds the site's base structure and gives content meaning. Such as, telling screen readers whether emphasis should be placed on a word or if a word is simply italicized, what is a heading and what is a paragraph. It also can embed videos and images and give meaning to those images behind the scenes for screen readers to describe images to the visually impaired.
                </p>
                <p>
                    CSS stands for Cascading Style Sheets and is used to design how a webpage looks. It controls things like: how big is the font, should there be a shadow box behind this image, or the color of a background of a specific element. It also controls how much padding and margin is on each element of the page and can either be designed in a grid-style layout or a box-style layout depending on how the page is designed. CSS helps us make webpages dynamic to different device layouts by controlling how much space a piece of content is allowed when someone is on the webpage via a phone or desktop.
                </p>
                <p>
                    JavaScript is the brains of the webpage. It manages things like: animating images, dynamically update content based on user input, or control multimedia. JavaScript is the most versatile of these languages because it allows you to manipulate almost anything you want with just a few lines of code. Almost every webpage these days makes use of JavaScript in some way and is a great way for developers to make their websites more interactive and useful for their site's users.
                </p>
            </Essay>

            <Essay q='Q2: What is the difference between Git, GitHub, and Heroku?'>
                <p>
                    Git is a version control system that has become standard in many tech industries as a way to ensure that they are developing clean code before pushing updates to their products. Git is local to your system and keeps a record of changes made to your code. Git allows for the creation of branches, which are local branches of code for implementing new solutions without affecting the main program. These branches allow you to take parts that worked from one branch and add it to another branch or remove entire branches if needed. When a design is decided a user can merge that branch onto the main program without having to retype lines of code.
                </p>
                <p>
                    GitHub is a Git repository hosting service. Unlike Git where it is completely local to your system, GitHub allows you to upload your local Git repository to the cloud for collaboration in real time or general public access for open source projects. Another main difference between Git and GitHub is that Git does not have a graphical user interface. GitHub offers a graphic interface making it more versatile than Git for things like task-management tools.
                </p>
                <p>
                    Heroku is a cloud service platform that allows for the hosting of customer focused apps. Developers can host their app on Heroku and Heroku will manage the infrastructure allowing developers to focus on their apps design. If Git is used for version control and GitHub allows for a graphical interpretation of Git while also allowing real time collaboration. Then Heroku would be where the final product is deployed. Developers use Git and GitHub to create the app and Heroku to actually see the product in action.
                </p>
            </Essay>

            <Essay q='Q3: What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <p>A single page app (SPA) is a web app that loads only a single web document. It then updates the body content on that single document via JS APIs such as Fetch when different content needs to be shown. This allows users to use websites without loading new pages from the server. This allows for better performance and a more dynamic experience. Downsides to SPAs are more effort required to maintain state, implement navigation and do meaningful performance monitoring.</p>
                <p>A multi page app (MPA) is a web app consisting of a large number of pages completely refreshed every time data is changed on them. Any data change or transfer to the server leads to a new page being displayed in the browser. This is the classic approach to web app development, requiring multi level navigation and a greater focus on speed and performance. This allows for ease of scaling, ready-made solutions, and allows for meaningful analytic capabilities. Downsides to MPAs are potential performance issues, deep front-end and back-end integration, and potential difficulties with maintenance and updates.</p>
            </Essay>

            <Essay q='Q4: What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <p>My answer will go here</p>
            </Essay>

        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;