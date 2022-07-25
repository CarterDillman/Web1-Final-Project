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
                <p>Web designers are responsible for big-picture decisions, like menus and font styles. They are responsible for things like layout and design. They also deal with the overall user experience of the website and making the site as easy for a customer to use and navigate.</p>
                <p>A front-end developer creates the front end portion of websites and applications using languages like HTML/CSS/JS. Front-end developers create the user interface that determines what the application does when a user interacts with an application. They deal with client side information of the website.</p>
                <p>A back-end developer writes code that is the backbone of a website or app. They build and maintain mechanisms that process data and perform actions on websites. They control everything involved with data storage, security, and other server-side functions that the users of a website or application never see.</p>
            </Essay>

            <Essay q='Q5: Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
                <p>Relative paths shows where you are already located. They do not contain information about the domain and only show part of the path to the page. Relative paths take into account the argument that the server already knows where the page is located. They are useful within a site to transfer a user from point to point within the same domain.</p>
                <p>Document relative paths are used for local links for most apps. They are most useful when the current document and the linked document or asset are in the same folder and are likely to remain together. You can use a document-relative path to link to a document or asset in another folder by specifying the path through the folder hierarchy from the current document to the linked document.</p>
                <p>Absolute paths provide the complete path of the linked document. Absolute paths have to be used to link a document or asset that is on a different server. Using absolute paths for local links is discouraged because moving the site to another domain will break all the local absolute path links. Absolute paths are much less flexible than document relative paths and relative paths.</p>
            </Essay>

            <Essay q='Q6: What is the difference between jpg, gif, png and svg images?'>
                <p>.jpg is a raster image format that uses a lossy compression algorithm, meaning that the image can lose some of it's data when saved in this format, potentially lowering the quality of the image as a whole. .jpg is the most common file format and is typically used in photography.</p>
                <p>.gif is another type of image format that uses a lossless compression algorithm, meaning that the image does not lose any data when saved in this format, and keeps the original quality of the image. This translates to a larger file size. .gif also supports animation and uses a smaller range of colors compared to other image formats. .gif is typically best for logo or animated image creation.</p>
                <p>.png is another type of image format that uses a lossless compression algorithm, meaning that the image does not lose any data when saved in this format, and keeps the original quality of the image. This translates to a larger file size. Unlike .gif's however, .png is only for static images and is typically used for icon's or digital art.</p>
                <p>.svg is a vector image format that is text based and uses mathematical structures to represent an image and is highly scalable. This means this format is best used for high density or high resolution images where loss of information is not an option. This format also tends to be larger than the standard .jpg format.</p>
            </Essay>

            <Essay q='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
                <p>Project managers are responsible for planning, budgeting, monitoring and reporting of a project or multiple projects. They act as a bridge between upper management and the people who are responsible for the creation of the project. They ensure that a project runs smoothly and remains on schedule by creating detailed work plans, managing various teams and achieve milestones.</p>
                <p>Business analysts act as communicators, facilitators, and mediators. They look to improve processes and increase effectiveness through technology, strategy and analytic solutions. They also analyze and communicate data as it relates to trends in the company. They work with business leaders and users to understand how data-driven changes to process, products, services, software and hardware can improve efficiencies and add value.</p>
                <p>Scrum masters manage timelines, resolve problems and coach team members on Agile methodologies. They work to increase team efficiency and provide motivation and guidance for process improvement. They also function as a buffer between the scrum team and product owner and maintain a safe working environment for the team by helping with conflict resolution.</p>
                <p>UX designers are responsible for turning applications into something that people enjoy using. They study the user experience and measure how easy it is to complete tasks in an efficient manner while improving ease-of-use capabilities through many different approaches. They research, design and implement all user experiences when interacting with a digital product or tool. In addition, they consult with clients to better understand their needs and goals, conduct usability testing, create product prototypes and conduct competitor and user analyses.</p>
                <p>Web developers are responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring that they look good, run smoothly, and offer easy access points with no loading issues between pages or error messages. They also collaborate with website and graphic designers, monitor website traffic, troubleshoot website problems when they arise and update websites when necessary.</p>
                <p>QA Testers are responsible for developing test plans to test new and existing software, debug code, and improve the usability of software programs. A QA tester works with the dev team to produce top-quality software.</p>
                <p>DevOps work with developers and the IT staff to oversee code releases, combining an understanding of both engineering and coding. From creating and implementing systems software to analyzing data to improve existing ones. They help increase productivity in the workplace. They understand the software development lifecycle and have a clear understanding of various automation tools for developing digital pipelines.
</p>
            </Essay>
            <Essay q='What is considered the right size for an image or video asset?'>
                <p>The correct image size for a video asset or image varies based on how a designer wants to show their content. For optimal website performance, images should be as large as needed to fill their containers, based on layout. One thing that needs to be considered is to make sure that assets are larger than the minimum to ensure that retina displays see a crisp image.</p>
                <p>Full-width slideshows that cover the entirety of the browser should be about 2560px in width since this is the standard resolution size for 27" and 30" monitors. The height of these images can vary based on what aspect ratio the designer is wanting to use. Gallery images or light box images should be around 1500px wide so they look good on desktops and tablets. On mobile devices, images get resized by the browser so a designer shouldn't need to consider the image looking poorly on high-PPI screens.</p>
                <p>Blog images or other static images should be sized to match the width of the page content and then the image size be doubled to ensure that retina displays still see a clear image. Same concept goes for thumbnail images. Video assets should be a minimum 720p or 1080p as that has become the standard video size across multiple platforms. Ideally you use a format that can scale resolution to accommodate for users who might have poor internet so they can still watch the video at a lower resolution.</p>
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;