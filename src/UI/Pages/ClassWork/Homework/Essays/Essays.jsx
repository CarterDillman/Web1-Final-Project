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

            <Essay q='Q7: Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
                <p>Project managers are responsible for planning, budgeting, monitoring and reporting of a project or multiple projects. They act as a bridge between upper management and the people who are responsible for the creation of the project. They ensure that a project runs smoothly and remains on schedule by creating detailed work plans, managing various teams and achieve milestones.</p>
                <p>Business analysts act as communicators, facilitators, and mediators. They look to improve processes and increase effectiveness through technology, strategy and analytic solutions. They also analyze and communicate data as it relates to trends in the company. They work with business leaders and users to understand how data-driven changes to process, products, services, software and hardware can improve efficiencies and add value.</p>
                <p>Scrum masters manage timelines, resolve problems and coach team members on Agile methodologies. They work to increase team efficiency and provide motivation and guidance for process improvement. They also function as a buffer between the scrum team and product owner and maintain a safe working environment for the team by helping with conflict resolution.</p>
                <p>UX designers are responsible for turning applications into something that people enjoy using. They study the user experience and measure how easy it is to complete tasks in an efficient manner while improving ease-of-use capabilities through many different approaches. They research, design and implement all user experiences when interacting with a digital product or tool. In addition, they consult with clients to better understand their needs and goals, conduct usability testing, create product prototypes and conduct competitor and user analyses.</p>
                <p>Web developers are responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring that they look good, run smoothly, and offer easy access points with no loading issues between pages or error messages. They also collaborate with website and graphic designers, monitor website traffic, troubleshoot website problems when they arise and update websites when necessary.</p>
                <p>QA Testers are responsible for developing test plans to test new and existing software, debug code, and improve the usability of software programs. A QA tester works with the dev team to produce top-quality software.</p>
                <p>DevOps work with developers and the IT staff to oversee code releases, combining an understanding of both engineering and coding. From creating and implementing systems software to analyzing data to improve existing ones. They help increase productivity in the workplace. They understand the software development lifecycle and have a clear understanding of various automation tools for developing digital pipelines.
</p>
            </Essay>
            <Essay q='Q8: What is considered the right size for an image or video asset?'>
                <p>The correct image size for a video asset or image varies based on how a designer wants to show their content. For optimal website performance, images should be as large as needed to fill their containers, based on layout. One thing that needs to be considered is to make sure that assets are larger than the minimum to ensure that retina displays see a crisp image.</p>
                <p>Full-width slideshows that cover the entirety of the browser should be about 2560px in width since this is the standard resolution size for 27" and 30" monitors. The height of these images can vary based on what aspect ratio the designer is wanting to use. Gallery images or light box images should be around 1500px wide so they look good on desktops and tablets. On mobile devices, images get resized by the browser so a designer shouldn't need to consider the image looking poorly on high-PPI screens.</p>
                <p>Blog images or other static images should be sized to match the width of the page content and then the image size be doubled to ensure that retina displays still see a clear image. Same concept goes for thumbnail images. Video assets should be a minimum 720p or 1080p as that has become the standard video size across multiple platforms. Ideally you use a format that can scale resolution to accommodate for users who might have poor internet so they can still watch the video at a lower resolution.</p>
            </Essay>
            <Essay q='Q9: What does it mean for a company to be Agile? How is it different from Waterfall? What are the pros and cons of being agile?'>
                <p>Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches. An agile team delivers work in small, but consumable, increments. Requirements, plans, and results are evaluated continuously so teams have a natural mechanism for responding to change quickly. Agile is an umbrella term for a set of frameworks and practices that focuses on the people doing the work and how they work together.</p>
                <p>Waterfall is a sequential development process that flows through all phases of a project with each phase completely wrapping up before the next phase begins. The success of the Waterfall method depends on the amount and quality of the work done on the front end, documenting everything in advance, including the user interface, user stories, and all the features' variations and outcomes. With the majority of the research done upfront, estimates of the time needed for each requirement are more accurate, and this can provide a more predictable release date. If parameters change along the way, it's harder to change course than it is with the Agile method.</p>
                <p>Each method has its pros and cons and each has its scenarios where one will excel over the other.</p>
                <p>Pros and cons of the waterfall method:</p>
                <ul>
                    <li>Pros
                        <ul>
                            <li>Waterfall method's meticulous upfront planning results in detailed project plans</li>
                            <li>The project scope, cost, and timeline are clearly outlined, so clients will know exactly what will be delivered</li>
                            <li>With a clear outline a new member can step in and contribute without derailing the timeline</li>
                        </ul>
                    </li>
                    <li>Cons
                        <ul>
                            <li>Waterfall is rigid with a strict blueprint</li>
                            <li>Testing is done at the end of development and QA takes significant time</li>
                            <li>Once a waterfall project is started, changes to the project are very hard to implement</li>
                        </ul>
                    </li>
                </ul>
                <p>Pros and cons of the agile method:</p>
                <ul>
                    <li>Pros
                        <ul>
                            <li>Revisits and rewrites of steps are encouraged to achieve the desired results</li>
                            <li>Agile projects are tested throughout development allowing for faster delivery and a better project</li>
                            <li>Frequent delivery allows for quick changes in project direction while maintaining scope</li>
                        </ul>
                    </li>
                    <li>Cons
                        <ul>
                            <li>Agile doesn't set a strict schedule which can be difficult to hit a tight deadline</li>
                            <li>Changing project requirements may cause problems in other areas of the organization</li>
                            <li>Agile requires a consistent team</li>
                        </ul>
                    </li>
                </ul>
            </Essay>
            <Essay q='Q10: What are testing environments? What is the difference between Local, Dev, QA and Production?'>
                <p>A test environment is where testing teams analyze the quality of the application/program. This also allows programmers to identify and fix any bugs that may impact smooth functioning of the applications or impair the user experience. A test environment is built by setting aside storage, computing and additional resources required for testing. This may include new devices, physical or virtual, provisioned for testing use cases as defined by developers.</p>
                <p>Local test environments are usually local to a machine that has no connection to the actual product a developer is working on. It's a copy of the product where a developer can test any changes they'd like to make without affecting the main product or any of the other testing environments. This allows a developer to make changes freely without worrying about affecting other developers on the project.</p>
                <p>Dev environments are the location of the main branch of a software application. This is where developers spend their time writing the building blocks of code for their application. From here, an application transforms from concept to the minimum variable product. The dev environment is usually hosted on platforms like GitHub, as it provides enough features to manage the starting phase of most applications.</p>
                <p>A QA environment is meant to mimic production and is used by QA analysts and other testing professionals to perform many forms of functional and non-functional testing. Regression testing takes place in the QA environment, making sure new features are not breaking any existing functionalities or test regression bug fixes. This also allows testers to ensure that the product meets the project requirements.</p>
                <p>Production environments are the live product. The production environment is where the intended users can finally interact with the final product. There is no active development or testing done on this environment, only finalized and tested updates can be pushed to this environment to ensure that users don't encounter any major bugs or issues.</p>
            </Essay>
            <Essay q='Q11: Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'>
                <p>Web images are considered part of the content when they are implemented into html using the <code>{'<img>'}</code> tag. These images provide context to the webpage either by adding a visual component to the related content or some form of supplementary information to the content. This means that the content of the page would either be missing important information or the content would be lesser if the image wasn't present.</p>
                <p>Web images are considered part of the appearance when they are used purely to improve the look of a page. Things like background images, icons, and logos. They are used to set a site apart from another by adding a unique look. These items could be removed from the page and the content itself would not lose any information or context for a visitor of the site.</p>
            </Essay>
            <Essay q="Q12: What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
                <p>A HTML tag is what a programmer uses to tell the HTML language what a certain element in their page represents. <code>{'<p>'}</code> the paragraph tag is used to tell HTML that all content within the tag is a single paragraph. Tags are what create a webpage and manage the very basic look of the page. CSS can target a tag to change how it looks so any time that tag is used throughout the webpage it applies those stylings to them.</p>
                <p>A class is given to a tag or a group of tags to group them together under a common name. This is used by CSS and JS to target certain elements of a page. CSS uses these class names to target all tags with that class name and apply stylings specific to those tags with those class names and not the generic tag. This means that if a tag is not given that class name then CSS won't apply stylings to it.</p>
                <p>An ID is given to a tag to give it a unique identifier from all class names and all tags. ID's can only be used once. This allows CSS and JS to target that specific element. If a tag has been given a class name and ID and CSS is applying styling to both the class name and the specific ID then CSS will override any settings that overlap from the tag down to the ID being the most specific.</p>
                <p>Specificity is the algorithm used by browsers to determine the CSS declaration that is most relevant to an element, which determines the property value to apply to the element. The weight is determined by the number of selectors of each weight category in the selector matching element. Since JS can use CSS selectors it follows similar specificity rules however it does not cascade so it isn't controlled by the specificity rules of CSS.</p>
            </Essay>
            <Essay q='Q13: What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?'>
                <p>CSS preprocessors are programs that let you generate CSS from the preprocessors own unique syntax. CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, etc.. These features make the CSS structure more readable and easier to maintain. To use a preprocessor, the CSS compiler must be installed on the web server or use the preprocessor to compile in the dev environment then upload the compiled CSS file to the web server. Some examples of CSS preprocessors are Sass, Less, and Stylus.</p>
                <p>Styled components is a popular library that is used to style React applications. It allows developers to build custom components by writing CSS in JS. Styled components allow for automatic critical CSS. Styled Components mix CSS and JS which is against the separation of concerns. Styled Components uses conditional rendering, meaning it can decide a style at render time based on props.</p>
            </Essay>
            <Essay q='Q14: What is the difference between Web Hosts, Domains, and FTP?'>
                <p>A domain is typically the first step in creating a website. It is the URL that customers type to go to a website, without it there is no way for customers to access the site. Domains are purchased from a domain registrar like Google Domains. Through this registrar you can purchase new domains, renew current ones, and sell domains you no longer want/need.</p>
                <p>Hosting is physically where a website lives, typically billed monthly or annually by a hosting provider. Websites live as a database and files that get uploaded to the hosting server. The method to upload and update the files of a website is done through FTP. </p>
                <p>FTP (File Transfer Protocol) is the most common way to access and transfer files between computers. FTP has built in access control to prevent unauthorized persons from adding, removing or transferring files. FTP is specifically for updating and changing a website, it doesn't affect how a site renders or appears.</p>
            </Essay>
            <Essay q='Q15: Final Project: Pick a Subject Matter'>
                <p>I've decided to create a resource site similar to a wiki for the game Path of Exile (PoE). The game is notorious for its complexity and depth of systems. The community has created resource sites for various mechanics but not many look modern or allow for interactivity within the site. Rather than go through multiple sites, my site would provide a modern browser experience and hopefully reduce the initial complexity of this game.</p>
                <p>The client for this site would mostly be for me and my benefit, however, this resource could help the community as a whole as well if I did decide to make this website public. I've chosen this because I've always been bothered by the antiquated sites that have been used by the community because there is no other reliable, up to date resource available to them. I know a lot about this game and the community and wanted to give a shot at an initial draft of what a modern resource could look like.</p>
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;