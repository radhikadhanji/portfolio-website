/*Defining the data for each article */
const articleData = [
    {
        id: 1,
        title: "Quiz 1",
        date: "17 January, 2025",
        category: ["quiz", "misc"],
        content: `<div class="blogpost" id="quiz1">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter misc"><b>Misc.</b></div>
            <h4>17 January, 2025</h4>
            <h3>Quiz 1: Folder Setup</h3>
            <input type="checkbox" name="read-more" id="read-more-1">
            <div class="blogtext">
              <p>I created a folder with the following content inside it: a blog page, a main page, a CSS folder for my style.css file, an empty images folder, and a scripts.js file.</p>
              <p>I have created a CSS folder as I may have differing CSS on different pages of my website and need somewehere to store it all. Additionally, my images folder will likely have some subfolders in the future if there are any sections that need a lot of images.</p>
              <img src="images/quizzes/quiz1.png" alt="Setup of my basic website files and folders">
            </div>
        <label for="read-more-1"></label>
     </div>
       `,
    },

    {
        id: 2,
        title: "Quiz 2",
        date: "17 January, 2025",
        category: ["quiz", "coding"],
        content: `<div class="blogpost" id="quiz2">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter coding"><b>Coding</b></div>
            <h4>17 January, 2025</h4>
            <h3>Quiz 2: Images</h3>
            <input type="checkbox" name="read-more" id="read-more-2">
            <div class="blogtext">
                <p>I added images to my website by using the img tags. At first, it was a bit tricky having to type in the whole file path, but my IDE VSCode also has an autocorrect feature that will get the right path of the image, which makes it very convenient to use.</p>
                <img src="images/quizzes/quiz2.png" alt="A split view desktop screen containing the homepage code on the left and the results of that code in a web browser on the right" height="250" width="600">
            </div>
            <label for="read-more-2"></label>
        </div>
        `,
    },

    {
        id: 2.5,
        title: "Colour/Aesthetic Research",
        date: "20 January, 2025",
        category: ["design"],
        content: `<div class="blogpost" id="colourresearch">
        <div class="filter design"><b>Design</b></div>
        <h4>20 January, 2025</h4>
        <h3>Colour/Aesthetic Research</h3>
        <input type="checkbox" name="read-more" id="read-more-colour">
        <div class="blogtext">
            <p>When deliberating on what I want my website to look like, I often found myself struggling on whether I should prioritise my own personal aesthetic or the more minimal and clean looks that I have seen used in typical computer science portfolios. While these reflect what employers want to see in portfolio websites, I didn't find the typical styles very appealing, and wanted to incorporate some aspects of styles I liked as well as keeping it professional.</p>
            <p>In the end, I decided on a middle ground - I would have a colour scheme more evocative of a personal style, while keeping the layout minimalistic and clean in a subtle nod to my preferences, although I made sure to take on a rounded, gentler style in each section to avoid the website seeming too sharp, angular and unwelcoming.</p>
            <p>I collected some reference images for a colour palette I liked the look of which primarily takes inspiration from the <b>tenshi kawaii</b> (angelic) style:</p>
            <img src="images/tenshikawaii.png" alt="A moodboard based on the tenshi kawaii aesthetic.">
            <p>This soft, dreamlike style is one I hope to subtly invoke while designing my website. In the past, I have found that many websites I have used have been cluttered with information or use overly bright colours, which causes overstimulation and anxiety. Instead, I want to make sure that my website is perceived as a peaceful, welcoming environment - as well as making text bigger to read than it would usually be, as I also often find myself having to zoom in to read articles online. </p>
            <p>The only thing I noticed which could be problematic is the fact that the colour contrast in a lot of these images is hard to notice, as the soft white and blue colour scheme can easily blend into each other. Therefore, I still should try to use colours that are easy to read, even if they don't entirely suit the aesthetic I enjoy.</p>
        </div>
        <label for="read-more-colour"></label>
        </div>`,
    },

    {
        id: 3,
        title: "Quiz 3",
        date: "24 January, 2025",
        category: ["quiz", "coding", "design"],
        content: `<div class="blogpost" id="quiz3">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter coding"><b>Coding</b></div> <div class="filter design"><b>Design</b></div>
            <h4>24 January, 2025</h4>
            <h3>Quiz 3: Navigation</h3>
            <input type="checkbox" name="read-more" id="read-more-3">
            <div class="blogtext">
            <p> I followed the CSS tutorial page to create a working navigation bar for my website as well as styling it a little.</p>
            <p> While I am unsure as to what aesthetic I want to achieve with my website yet, I liked a blue theme and so used that while creating my navigation bar.</p>
            <p> I found that I had a bit of trouble figuring out why the text of the links was stacking on top of each other, however I eventually realised it was because I was writing navigation-a instead of navigation a for the CSS headings and so on and so forth for the other style blocks.</p>
            <p> I have also been exploring the different fonts that are available for the Web - this font is Franklin Gothic Medium, which I enjoy, but I do want to find a different font to replace it later on to suit my website aesthetic.</p>    
            <img src="images/quizzes/quiz3css1.png" height="250" width="200" alt="Code for my navigation bar - headers, body, and nav bar styling.">
            <img src="images/quizzes/quiz3css2.png" alt="Code for my navigation bar - interaction code to change the colour of the background upon hovering.">
            <img src="images/quizzes/quiz3indexcode.png" alt="The HTML code for my navigation bar.">
            <img src="images/quizzes/quiz3.png" alt="The result of my HTML and CSS code to style the navigation bar.">
            </div>
            <label for="read-more-3"></label>
        </div>
        `,
    },

    {
        id: 4,
        title: "Quiz 4",
        date: "24 January, 2025",
        category: ["quiz", "design"],
        content: `<div class="blogpost" id="quiz4">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter design"><b>Design</b></div>
            <h4>24 January, 2025</h4>
            <h3>Quiz 4: Accessibility</h3>
            <input type="checkbox" name="read-more" id="read-more-4">
            <div class="blogtext">
                <p> Over the past week, we have been learning more about accessibility and how to make our websites easily useable for anyone who uses them, as accessibility benefits both able-bodied and disabled people.</p>
                <p> While styling my basic CSS (my background and text colours) I had to consider a few different colour combinations so that the contrast made the text easily readable for most situations.</p>
                <p> I ended up using the <a href="https://www.siegemedia.com/contrast-ratio">Siegemedia contrast checker</a> to decide on my colours, aiming to keep the contrast ratio above 4.5:1 as this is the general minimum contrast ratio needed to make items on the screen visible. I chose the colours shown below, and as depicted, they have an 11.09:1 contrast ratio, which results in this text being very easy to read.</p>
                <img src="images/quizzes/contrastratio.png" alt="Using the Siegemedia contrast checker using the background and text blue colours of my website." width="700" height="500">
                <p>In the future, to continue to make my website more accessible, I should try to choose colours using this contrast checker as a guide to make sure that the content of the website is still consistently legible and complies with the 4.5:1 minimum ratio. It could also be a good accessibility idea to add a border around images to make them stand out, especially if an image happens to be very similar to the background colour, to help users differentiate between the image and the background of the website.</p>
                <p> If in the future I change my website background to be an image, I should make sure that the image isn't bright and busy so the text on top can still be very legible, or add a box behind the text so that both can be seen at once.</p>
            </div>
            <label for="read-more-4"></label>
         </div>
        `,
    },

    {
        id: 4.5,
        title: "CSS Slowfade into website loading",
        category: ["design", "misc"],
        content: `<div class="blogpost" id="slowfade">
        <div class="filter design"><b>Design</b></div> <div class="filter misc"><b>Misc</b></div>
        <h4>25 January, 2025</h4>
        <h3>CSS Slowfade into website load</h3>
        <input type="checkbox" name="read-more" id="slow-fade">
        <div class="blogtext">
            <p>One of the sub-goals I had when going into this course was to try to step out of my comfort zone and experiment with interesting interactions in order to give my website some personality amongst many websites which had the same sort of content. To emphasise the 'angelic' inspirations of the website, I wanted the user to load in and see the content gently fading onto the screen, although I wanted to also make sure it was subtle and didn't go too overboard with it.</p>
            <p>In regards to keyframes, I found an extremely simple <a href="https://dev.to/tiaeastwood/super-simple-css-animation-for-fade-in-on-page-load-2p8m ">tutorial</a> by Tia Eastwood for a CSS animation that would fade content inwards and upwards. This was the code for it on their website:</p>
            <img src="images/slowfadecode.png" alt="Code by Tia Eastwood to make a page fade in upon load.">
            <p>Of course, the speed was quite fast given that at 0%, it starts from the very bottom of the screen before going to the top. Therefore, I had to tweak the code slightly to make the transform start from very close to the top, so that the effect was more subtle.</p>
            <img src="images/issues/slowfadecode.png" alt="The original code that I used for the slow fade, which was different for every page">
            <p>There was only one issue - originally, I had been starting from around 5% with translateY at 0% animation progress. This worked perfectly on my homepage, but on the blog and research reports, they would both move up very fast from the middle of the page, which I didn't like the look of. As shown above, I did try to add the visibility keywords as well, as I had read that visibility and opacity together might smooth out some of the issues I faced here, but it didn't work. In the end, I changed the translateY value to start at 1%, making the slowfade effect a lot more subtle, but ultimately the animation does now look seamless on every page. Unfortunately, I was not able to figure out why exactly the issue was happening in the first place, and I simply settled for 'ignoring the problem,' which isn't a good attitude to have when it comes to fixing code issues in the long run. </p>
            <img src="images/fixedslowfade.png" alt="The fixed slow fade code, with 1% fade in.">
        </div>
        <label for="slow-fade"></label>
     </div>`,
    },

    {
        id: 5,
        title: "Quiz 5",
        date: "28 January, 2025",
        category: ["quiz", "design"],
        content: `<div class="blogpost" id="quiz5">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter design"><b>Design</b></div>
            <h4>28 January, 2025</h4>
            <h3> Quiz 5: Fonts</h3>
            <input type="checkbox" name="read-more" id="read-more-5">
            <div class="blogtext">
                <p>Pictured below is my homepage with the original font that I was using, Franklin Gothic, a default web font that can be used easily. I changed the font by adding the font-family declaration in the body ruleset, specifying which font to use, and VSCode autocorrects the default fonts when typed in. While this was a fairly clear font, I found it didn't suit the softer aesthetic I wanted to capture with my website, therefore, I went to search for a different font to use in the body of my website. </p>
                <img src="images/quizzes/quiz5originalfont.png" height="40%" width="40%" alt="The original font code, which set the font to Franklin Gothic.">
                <p>I used Google Fonts to search up fonts, which also provides some sample code to use when importing fonts. I decided to use Arapey for the time being, as it was both readable and had some charm to it.</p>
                <img src="images/quizzes/quiz5arapey.png" height="50%" width="50%" alt="The Google fonts page for Arapey.">
                <p>After picking my font and adding it in the Google Fonts website, I was directed to the import screen, where code for each font to be imported from Google's API and the CSS classes for it were provided. There were two ways to import the font - using link or @import, and I decided to use @import as it would take up less lines of code. I pasted the importing code as well as the CSS classes at the top of my CSS file to make referencing it later more orderly.</p>
                <img src="images/quizzes/quiz5topcode.png" alt="The code I used to import Arapey into my stylesheet.">
                <p>Finally, as I only wanted this font in my body text and not the navigation bar, I specified the font family in the contentbox class, which will contain the body text on every page of my website, unlike the body tag which would have also styled the navbar.</p>
                <img src="images/quizzes/quiz5finalcode.png" alt="Styling the contentbox so only this has the Arapey font.">
                <p>Below is the result of this code change:</p>
                <img src="images/quizzes/quiz5result.png" height="50%" width="50%" alt="The result of changing the font to Arapey.">
            </div>
            <label for="read-more-5"></label>
        </div>
        `,
    },

    {
        id: 6,
        title: "Quiz 6",
        date: "28 January, 2025",
        category: ["quiz", "design"],
        content: `<div class="blogpost" id="quiz6">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter design"><b>Design</b></div>
            <h4>28 January, 2025</h4>
            <h3>Quiz 6: Colours</h3>
            <input type="checkbox" name="read-more" id="read-more-6">
            <div class="blogtext">
                <p>At this point of the design process, I noticed that the background felt slightly washed out compared to the colours of inner elements, and I decided to make the background a lighter colour to make the contrast between background and content more noticeable.</p>
                <p>Pictured below, my IDE VSCode has an extension that allows you to see the corresponding hex code when you hover over a hex code and change the colour simply by selecting areas on the colour square, as well as the hex code updating when areas are selected, which is very convenient.</p>
                <img src="images/quizzes/quiz6vscodecolours.png" alt="Showing the colour pallete feature on VSCode that automatically selects hex colours">
                <p>Upon realising that making the background lighter would make the contentbox background and the webpage's background extremely similar, I decided to also tweak the colour of the contentbox to make it darker. In comparison to the background, which is styled under the body selector using background-color, the text is changed simply using colour, and the border I created can have the colour specified under the border declaration.</p>
                <p>This is the finished code of how I tweaked the background and contentbox:</p>
                <img src="images/quizzes/quiz6code.png" height="25%" width="25%" alt="The finished code that has been altered into a light blue colour scheme">
                <p>This is the result of those code changes:</p>
                <img src="images/quizzes/quiz6result.png" height="50%" width="50%" alt="The homepage, with the colour scheme changed to light blue">
                <p>In the future, to comply with colour contrast standards, it may be a good idea to have a colour palette pre-checked before tweaking any colours on my website, as otherwise I might unintentionally choose colours with a poor contrast ratio. </p>
            </div>
            <label for="read-more-6"></label>
        </div>
        `,
    },

    {
        id: 6.5,
        title: "Portfolio Research",
        date: "30 January, 2025",
        category: ["design", "misc"],
        content: ` <div class="blogpost" id="portfolio">
        <div class="filter design"><b>Design</b></div><div class="filter misc"><b>Misc</b></div>
        <h4>30 Jan, 2025</h4>
        <h3>Portfolio Example Research</h3>
        <input type="checkbox" name="read-more" id="portfolios">
        <div class="blogtext">
            <p>While re-examining my website, I realised that the aesthetic and feel of my website didn't align with my end goal of trying to impress a potential employer with it's design. I found the fonts to be somewhat mismatching, and in terms of the main font used for the body text, it didn't feel particularly professional at all, as well as the content boxes looking somewhat strange. In an attempt to fix this, I decided to search for other developer portfolios to see how they handled their individual approaches to their website and collated some that I wanted to use as inspiration, with notes:</p>
            <img src="images/portfolios.png" alt="A moodboard of computer science portfolios with notes about their designs.">
            <p>One particular website that stood out was <a href="https://gigigimay.github.io/#about-me">gigigimay's</a>, which perfectly encapsulated her personal style as well as an air of professionalism that made her website stand out. Being a beginner at CSS, HTML and Javascript, I knew I couldn't exactly achieve that same balance, but I did want to use the same font, which looked much sleeker in comparison. Therefore, I made the switch from Arapey to Bai Jamjuree, which did take a bit more space due to all the different styles of the font, but I found that just that simple change enhanced the website's polish by a lot.</p>
        </div>
        <label for="portfolios"></label>
    </div> `,
    },

    {
        id: 6.7,
        title: "Creating a contact form",
        date: "31 January, 2025",
        category: ["coding"],
        content: `<div class="blogpost" id="contactform">
        <div class="filter coding"><b>Coding</b></div>
        <h4>31 January, 2025</h4>
        <h3>Creating a working contact form</h3>
        <input type="checkbox" name="read-more" id="contact-form">
        <div class="blogtext">
            <p>While researching other portfolios, one commonality that I came across in a lot of websites was a contact form built-in to their website. This provides versatility and ease of use, especially as it takes less steps for the user to contact you than if they had to open their email app of choice to send one. Therefore, I wanted to create a working form - however, I soon found that it was easy to make the form itself, but making it send emails to myself required extra steps.</p>
            <p>I began by following the <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form ">Mozilla developer's guide</a> to create the skeleton code for my web form and styled it in accordance with my website, which was simply structured like so:</p>
            <img src="images/formsketch.png" alt="A sketch by Mozilla of a simple website contact form.">
            <p>I created a label for the user's name, email address, and the message they wanted to send, using two text input areas and a textarea section. When defining a form, it contains an action (sending the user to a certain page) as well as specifying that we are using the HTTP POST method to send our message to the server. As I had previously done network engineering before, this made it easier to understand the concept of using POST to direct the form to server-side code. Below is a diagram of how the networking would work in regards to the contact form:</p>
            <img src="images/networkarchitecture.png" alt="A diagram of the network processes a client/server pair go through when a form is submitted.">
            <p>I had already created the client-side code, which was the styled form. To create the server-side code, which would actually transmit the information, there were two methods - either to code it myself using PHP, which would have required learning a whole new language and much more code, or using an external API and putting it in the action section of my form. I chose the second route for ease of access and used <a href="https://web3forms.com">Web3Forms</a>, which simply provides a unique access key corresponding to my email address which is placed in the header, and the only other thing I have to do is redirect to the Web3Forms success page at the top. In the end, deliberating over the network architecture ended up being much simpler due to the API, although if I were to recreate this form, I would want to explore PHP in order to create a custom success page instead of redirecting users to Web3Forms's page and making them click the back button to return, which is slightly jarring. </p>
        </div>
        <label for="contact-form"></label>
    </div>`,
    },

    {
        id: 7,
        title: "Quiz 7",
        date: "4 February, 2025",
        category: ["quiz", "coding", "design"],
        content: `<div class="blogpost" id="quiz7">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter coding"><b>Coding</b></div> <div class="filter design"><b>Design</b></div>
            <h4>4 February, 2025</h4>
            <h3>Quiz 7: Layout and Responsive Design</h3>
            <input type="checkbox" name="read-more" id="read-more-7">
            <div class="blogtext">
                <p>So far, I have aimed to achieve a more rounded, softer look with my website design in order to give it a more welcoming look, as well as using thematically calm colours in the shades of blue and the choice of font. Pictured here are some examples where my navigation bar, content boxes and buttons are styled with these rounded corners: </p>
                <img src="images/quizzes/quiz7homepage.png" height="50%" width="50%" alt="My original homepage before the changes of Quiz 7.">
                <img src="images/quizzes/quiz7blog.png" height="50%" width="50%" alt="My original blog before the changes of Quiz 7.">
                <p>The first experiment I wanted to do was to see what my website would look like if the navigation bar was sticky - I had highlighted this as an example of good design in my research report, and found it convenient to use in the website I discovered the feature in, so wanted to see if this would help on my website, especially in the longer articles such as my research report.</p>
                <p>Pictured below, I began by setting the top to 0 and using position: sticky to create a navbar that stayed at the top of the page as you scrolled down. While it was convenient for longer pages such as the research report, I didn't like how it would appear solid, and wanted to make it disappear when the user stopped scrolling so it wouldn't obstruct their view of the report or a blog post. In the end, I decided to remove the code and keep the navigation bar as is until I found a better workaround for it.</p>
                <img src="images/quizzes/quiz7navcode.png"  alt="CSS code to create a sticky navbar.">
                <p>The next experiment I wanted to conduct is to create a properly stylised blog page. I felt that my current blog was disorderly, and in order to get to recent blog pages, the user had to scroll down very far. Instead, I wanted a blog page with an index that would simply scroll down for the user to get to each post, and if I had time to, a tag system so users could differentiate between quiz blog posts, general design notes and other miscellaneous blog posts.</p>
                <p>I began by using last week's layout design tutorial and created two columns for my content. There would be a main column in the center containing the actual blog, and a left column on the side containing the filter section and an archival list of links corresponding to the date of each entry.</p>
                <img src="images/quizzes/quiz7bloglayoutcode.png" alt="CSS code to create a left sidebar and a main area for blog content">
                <img src="images/quizzes/quiz7layoutinit.png" height="50%" width="50%" alt="Initial blog layout with the CSS">
                <p>However, I soon realised that with the width of each box, I needed to allow proper spacing in order to accomodate the sizes of the boxes and for the borders, as well as allowing space beneath to stack each blog entry. I then added spacing in order to differentiate each post, made the blog aside sticky so the user could access the filtering and archive system anytime, and added headings to see how it would look as an actual blog post. Below, I used my contentbox div I have been using previously in place of each filter icon, but I plan to style the filter icons seperately.</p>
                <img src="images/quizzes/quiz7finalblogcode.png" alt="Final CSS blog code to stack blog posts on top of each other">
                <img src="images/quizzes/quiz7finalblog.png" height="50%" width="50%" alt="Final product of blog code changes, with a left sidebar and stacked blog posts to the right.">
                <p>I find this layout much cleaner than my previous design, creating an orderly and clear split between the blog sidebar and each post. I will be transitioning my blog to use this layout shortly, however I may look into a method of being able to expand and shrink each blog post as it's still a long-winded process to scroll through all the text at the moment.</p>
                <p>Finally, I wanted to experiment with responsivity - while it would be difficult to completely emulate a mobile user's experience, I periodically shrank my screen to see how each page would look at various resolutions. While my home page was still completely visible at minimum width, I found that some images and text in the blog and research project were overflowing out of the page. This was partly due to the fact that I had made my paragraph text fairly large for readability, but this jeopardised mobile users' experience.</p>
                <p>I still wanted my page to be large enough for everyone to read, as I often struggle with reading small font on websites, so I wanted to refrain from changing the text size as much as possible. Instead, I decided to use CSS media queries - these would shrink the size of images and text whenever the screen was 600px or less wide, ensuring that mobile users were able to see the exact same content as desktop users without obstruction.</p>
                <p>In the beginning, I was confused as to why my code wasn't working when I resized it - however, I didn't realise the hashtag is supposed to reference the ID of an element instead of what it is directly, so my code was trying to reference the element IDs h1 and img that didn't exist. Once I removed the hashtags before each ruleset, the code worked perfectly, meaning that a mobile user can now see all the images and text clearly just like a desktop user would.</p>
                <img src="images/quizzes/quiz7cssquery.png" alt="CSS code for a media query to shrink content for mobile users">
                <img src="images/quizzes/quiz7queryresult.png"  alt="A shrunk version of my website with the media queries in effect">
            </div>
            <label for="read-more-7"></label>
        </div>
        `,
    },

    {
        id: 8,
        title: "Quiz 8",
        date: "4 February, 2025",
        category: ["quiz", "misc"],
        content: `<div class="blogpost" id="quiz8">
            <div class="filter quiz"><b>Quizzes</b></div> <div class="filter misc"><b>Misc</b></div>
            <h4>4 February, 2025</h4>
            <h3>Quiz 8: User Testing</h3>
            <input type="checkbox" name="read-more" id="read-more-8">
            <div class="blogtext">
                <p>I tested my website with 5 people, and my main aim with testing was to see if the current layout of my website was simple and easy to use - I want to add some more advanced features such as the blog filtering system later on, but what is more important at this stage is that the foundations of my website are in place and clear for users thus far.</p>
        <p>I asked these questions to all testers of my website:</p>
        <ul>
            <li>What mood/emotions does this website evoke?</li>
            <li>After seeing the home page, where are you inclined to click next?</li>
            <li>If you were visiting the portfolio of a computer science student as a recruiter or company (my target audience), what would you look for first and what do you think is missing? </li>
            <li>Is there anything you think was too difficult to understand/unnecessary/generally made you annoyed or angry?</li>
            <li>What do you feel a typical journey through this website would be like?</li>
        </ul>
        <p>For me, the most important question was the third question - I intend to use this website as a portfolio for computer science projects in order to stand out to a recruiter or a company looking to hire me, therefore it's important for me to see from the perspective of not only a general user, but a recruiter who actually has a purpose in accessing my website and is looking for specific information. The results of the experiment are displayed below in a table:</p>
        <table>
            <tr>
                <td><b>Person</b></td>
                <td><b>What mood/emotions does the website evoke?</b></td>
                <td><b>After seeing the home page, where do you want to go next?</b></td>
                <td><b>From a recruiter's perspective, what would you look for first? What is missing?</b></td>
                <td><b>Any annoying/unnecessary/aggravating aspects?</b></td>
                <td><b>What is a typical journey through this website like?</b></td>
            </tr>
            <tr>
                <td>Person 1</td>
                <td>Gentle, not striking, lots of blue and rounded edges</td>
                <td>To click the big 'contact me' button</td>
                <td>They would look for projects, which are missing right now. But there's also not too much that's technically impressive about the website, but a computer science portfolio should have something to make it impressive</td>
                <td>Lots of blocks of text to scroll through for the research report and blogs.</td>
                <td>When going through the website, I first wanted to go for the 'contact me' button. When I realised it didn't work yet, I wanted to look at the blog. However, I immediately saw the scroll bar for the page was so small because the blog was so long and I felt intimidated by it, so I wanted to go see the research report, but that looked even more like a wall of text - the blog posts at least have a little space between each other to split them up.</td>
            </tr>
            <tr>
                <td>Person 2</td>
                <td>Feels sleek but also a bit bland because it's all just blue and white, there aren't any other colours or many different shades that would stand out</td>
                <td>I'd want to check everything on the top bar from left to right, although the contact me button does take some attention</td>
                <td>Some recruiters want to see a CV on the website. Also, the homepage looks kind of bleak because the background behind is just white? Might be intentioanl though</td>
                <td>Just personal peeve but the right icons are higher than they should be and it's really apparent when hovering over them... also again some colour to break up the samey aesthetic would look good</td>
                <td>I tried to click on the contact me button first, then tried the right icons for email and Github links. Finally, I checked out the research project and blog. These were okay to read because the font was so big.</td>
            </tr>
            <tr>
                <td>Person 3</td>
                <td>Kind of cold, kind of feels unfinished because there's nothing going on in the background, even though it is an unfinished website</td>
                <td>I want to keep scrolling down the homepage to see if there's any other important info there, the contact form was there</td>
                <td>Cool projects and some evidence you actually know what you're doing, like some cool standout feature on your website. Also want to see some work experience sections. Having the contact info everywhere is good because the recruiters' first instinct will be to contact you</td>
                <td>Stuff in the blog is really long and there's not much space in between the blog posts so it kind of just looks like a lot of blue.</td>
                <td>I began by trying to investigate the homepage for any cool effects, but felt disappointed when there weren't any. After that, I went up so I could check each page in the navigation one by one, but I got bored trying to read all the text in the blog.</td>
            </tr>
            <tr>
                <td>Person 4</td>
                <td>Bouncy. Lots of curves, feels like the 'corporate artystyle' but also more professional looking than that </td>
                <td>I went to go check the right icons on the screen since I didn't know that the cat one was for Github.</td>
                <td>Maybe a sharper style of design is better for professional settings and will make it look more modern, this website still looks modern but maybe too far into minimalism</td>
                <td>Some of the headings in the blog are in a different font than everything else which make it look weird, especially since the fonts aren't similar</td>
                <td>My attention was first drawn by the contact me button, which is super big and stands out in colour so caught my attention quickly. Then, I went down to see the web form and try to look for more of the homepage. Only then did I look back at the blog and research pages afterwards, which I wasn't completely engaged in since it wasn't my kind of topic and was a bit long.</td>
            </tr>
            <tr>
                <td>Person 5 (who also tested for responsivity)</td>
                <td>Reminded of the clean, minimalistic, Pinterest-like aesthetic. It feels as if someone has searched up 'website design' examples and this comes up, it does kind of feel like it has more personality to it though</td>
                <td>I immediately noticed the Github and email icon, as I was told to shrink my screen and these icons became really big when I shrank my screen for some reason.</td>
                <td>Since this is supposed to be a computer science portfolio, it would be good to make it able to use for mobile since some recruiters might just be looking on their phones at the website in their commute or something along those lines. At the moment, there are a few text areas and images getting too close to the edge of the screen and cutting off, this might just make a recruiter disinterested and think you don't know what you're doing.</td>
                <td>Again, what has already been said before about some of the text cutting off on smaller screens, it's annoying since I can just scroll to the right or expand my screen but mobile users will have a hard time doing so</td>
                <td>Since on a smaller screen my attention was immediately drawn to the Github and email icons that were now huge, I investigated those before going onto the next biggest thing, the contact me button, which in turn enticed me to go down to the contact form as I wanted to explore and discover new areas of the site.</td>
            </tr>
        </table>

        <p>In conclusion, I have gathered a lot from this research, but the main points I have noted are as follows:</p>
        <ul>
            <li>More reconsideration around colours - the same blue and white pattern gets monotonous even if it is intended to be calming</li>
            <li>The contact me button immediately grabs peoples' attention most times. This is good as I'd like the idea of contacting me to get recruited to be the first thing in the recruiters' minds always</li>
            <li>Add something (maybe using Javascript) to bring some technical interest to the website, but of course be conscious of overdesigning</li>
            <li>Lots of mentions on how the blog and research page was long and hard to read. Find ways to condense these or put them in a friendlier layout for those who actually want to read the blog and research project.</li>
            <li>Work majorly on responsivity, right now mobile users will not be getting the same experience as desktop users. Find out why those right icons are getting so big and use CSS media queries to make the text even smaller when screens are smaller</li>
            <li>Consider trying a more angular and eye catching design</li>

            <p>I anticipate taking this feedback into consideration in the future, especially points that will maintain engagement and attention span on my website such as creating a more dynamic looking blog so nobody gets bored or daunted by reading it.</p>
        </ul>
            </div>
            <label for="read-more-8"></label>
        </div>
        `,
    },

    {
        id: 8.5,
        title: "Footers and Misc",
        date: "5 February, 2025",
        category: ["design", "misc"],
        content:` <div class="blogpost" id="footers">
        <div class="filter design"><b>Design</b></div> <div class="filter misc"><b>Misc</b></div>
        <input type="checkbox" name="read-more" id="footer-misc">
        <h4>5 February, 2025</h4>
        <h3>Footers and Miscellaneous Contrast</h3>
        <div class="blogtext">
            <p>One aspect of my website that I did get feedback for from the user testing report was a certain blandness and a lack of contrast. Even though there are some areas with high contrast that stand out, such as the navigation bar with a much darker background compared to the lighter colours used everywhere else, some areas felt a bit too similar too each other, and there was nothing to break it up in between. An example of this is the contrast between the right icons and the hover background below:</p>
            <img src="images/issues/badlinkhighlight.png" alt="Highlighting the nav bar icons">
            <p>The most glaring area where this occurred is the research project, where there are long paragraphs, and little to break these up besides images, which don't provide much respite. To alleviate this, I decided to style each question as a big, dark heading, to bring attention to the topic whilst also providing something to break up the monotony of the research report slides. I decided to continue using the navigation bar colours, as this has become somewhat of a signature colour for my website:</p>
            <img src="images/reportheading.png" alt="The report headings on the research report">
            <p>Additionally, another element I found in the portfolio websites I researched previously where contrast was done well was in the footer, which many websites had simply to denote who made it. Thankfully, the footer is a default tag, so this did not require too much tweaking and simply sat at the bottom of the page regardless of what changes I made to it. Again, I made this the same dark blue colour with a white background:</p>
            <img src="images/footer.png" alt="The footer">
            <p>As it stands, this dark blue appears to be becoming a staple of my website. Not only does it contrast well against the lighter, softer shades of the background for readability, but due to how many times it has been used, it almost appears to have a monochromatic look, tying the website together. </p>
        </div>
        <label for="footer-misc"></label>

        </div>`,
    },

    {
        id: 9,
        title: "Quiz 9",
        date: "9 February, 2025",
        category: ["quiz", "design"],
        content: `
        <div class="blogpost" id="quiz9">
        <div class="filter quiz"><b>Quizzes</b></div> <div class="filter design"><b>Design</b></div>
        <input type="checkbox" name="read-more" id="read-more-9">
        <h4>9 February, 2025</h4>
        <h3>Quiz 9: CSS Interactions</h3>
        <div class="blogtext">
            <p>In terms of CSS interactions, I wanted the area of my website that would display the technologies I use to be interactive, to attract attention to that section instead of simply listing everything out. Originally, I had planned for the icons to appear in a list one by one, and hovering over each icon would make it move to the left and expose the text associated with it.</p>
            <p>This was what my list of technologies looked like initially:</p>
            <img src="images/quizzes/quiz9org.png" height="50%" width="50%" alt="My homepage with a descending grid of icons for programming languages">
            <p>I began by using the CSS interactions guide for this week to dynamically animate the icons to create a background around them upon hovering, just to test how the code worked. This was successful, as follows:</p>
            <img src="images/quizzes/quiz9firstcode.png" alt="CSS code following the Quiz 9 PDF guide for CSS interactions">
            <img src="images/quizzes/quiz9initial.png" height="50%" width="50%" "Result of the CSS code following the Quiz 9 PDF guide, icons are highlighted on hover">
            <p>However, as I approached the second part of what I wanted to achieve, which was having the text appear to the right of the image, I quickly ran into some issues, the most major being that having the text invisible there made each div off-center, and with the right alignment I couldn't figure out a way to bring the text closer to the image. An example of this happening is below:</p>
            <img src="images/quizzes/quiz9issue.png" height="50%" width="50%" alt="The technologies area, the icons being too far to the left">
            <p>Although I experimented with the alignment and values of each item in order to try and rectify the issue, I soon realised that fixing it would require much more work than I previously anticipated. Knowing I did not have much time left to work on my website, I decided to scrap this idea and instead use a tool tip, where users would hover over an image and a text bubble would simply appear over top with the associated text. I learned how to implement tool tips using <a href="https://www.w3schools.com/howto/howto_css_tooltip.asp">W3School's tutorial,</a> linked here.</p>
            <p>After implementing the initial code, I styled the tool tip to make it more cohesive with the rest of the website, and in the end, I like the versatility of the tool tip, even though my original idea would have been interesting to implement if I had more time. The results of this experiment are below.</p>
            <img src="images/quizzes/quiz9result.png" height="50%" width="50%" alt="The fixed result. Icons are highlighted and a tool tip text appears above them with info.">
            <img src="images/quizzes/quiz9css1.png" alt="CSS code to style the tool tip and text">
            <img src="images/quizzes/quiz9css2.png" alt="CSS code to style the icons and their background">
        </div>
        <label for="read-more-9"></label>
        </div>
        `,
    },

    {
        id: 10,
        title: "Tagging and Filter System",
        date: "10 February, 2025",
        category: ["coding"],
        content: `<div class="blogpost" id="tagging">
        <div class="filter coding"><b>Coding</b></div>
        <input type="checkbox" name="read-more" id="tags">
        <h4>10 February, 2025</h4>
        <h3>Tagging and Filter System</h3>
        <div class="blogtext">
            <p>The most ambitious concept for my website I had in mind was creating a blog with a working filter system. I wanted the articles to appear down the right side with a space of some sort containing some tags. Each article had tags to show what themes it would discuss (e.g. design, coding, etc) and users could click a tag to filter through the articles and only display those on the sidebar that had that specific tag. Below are the conceptual sketches for both wide screen and mobile devices:</p>
            <img src="images/blogsketch.png" alt="A rough sketch for my blog layout, both for desktop and mobile">
            <p>At first, I believed this concept was going to be fairly simple - however, it ended up taking many days of tweaking just to get it to work, and nearly did not make it into the final website at all.</p>
            <p>I began by searching online for other examples of a 'filter' system done for a website, and eventually found <a href="https://www.youtube.com/watch?v=DfUHpQIjVsg">this Youtube video</a> by OnlineITTuts Tutorials describing the process of creating a filter system using HTML, CSS and JS. I also decided to style the filters in various colours to create clear visual associations in users between the colour and the category it corresponds to, making it more accessible for users to identify articles.</p>
            <img src="images/filters.png" alt="A depiction of the sidebar with my filters.">
            <p>The first challenge I came across was that the video's filtering system could only handle articles that only had one tag at a time. This was easy initially to remedy - in each data structure corresponding to the articles in Javascript, I would simply have an array of tags instead of one tag, and could just use the includes() method to check if the array contains the given tag, instead of using equals. </p>
            <img src="images/articledata.png" alt="Javascript code for an array of article data">
            <p>While having to copy and paste the content into every single article was a burden, it still ended up being necessary, as once filtered, the articles required the exact body code in order to be redisplayed on screen. However, after reworking, when clicking a tag, the blog post div would simply say 'No articles were found', and upon investigation in the console and logging each interaction with console.log statements in the code, I was getting this SyntaxError: </p>
            <img src="images/issues/syntaxerror.png" alt="A syntax error in the HTML console, saying articleData is already defined.">
            <p>Not only that, but I was also noticing that when the console logged the filter that the user clicked, it would always say 'undefined'. The code would then look for any articles with an 'undefined' tag, and since there weren't any, no articles would be returned. I struggled for a long time in order to figure out what was wrong, as my Javascript code looked correct, as well as asking ChatGPT to identify the potential error in my code. While the code I got from ChatGPT did clean up some of the features, such as using EventListeners and simplifying the if statements, this attempt did not make the blog work, and on the final day, I was prepared to scrap the tagging system entirely.</p>
            <img src="images/issues/blogcode.png" alt="The Javascript code I used to create the tag/filter system.">
            <p>However, while running experiments with the console again, I wanted to try tweaking some of the HTML tags used. Previously, I had all the filter text wrapped in the bold tag, but when I removed the bold tag from each of the filter buttons on the side, the filter system miraculously began to work perfectly. The code uses the ID of the a tag for each filter to discern which one it is, but as I had wrapped everything in bold tags, the code was trying to read that internally rather than search for the ID one tag up. While I preferred the look of the bold filter text, it is a small sacrifice to make in exchange for having a perfectly working filter system. The only thing I needed to make sure of for maintenance now is that I keep updating the blog array with each new article, otherwise the articles won't show up at all once filtered.</p>
            <p>In conclusion, I learned a valuable lesson from developing this system: to always make sure to triple check your code, as the error that's holding it back is most likely almost unnoticeable at first glance. </p>
        </div>
        <label for="tags"></label>
    </div>`,
    },

    {
        id: 11,
        title: "Read More/Read Less button",
        date: "10 February, 2025",
        category: ["coding", "design"],
        content: `<div class="blogpost" id="readmore">
        <div class="filter coding"><b>Coding</b></div><div class="filter design"><b>Design</b></div>
        <input type="checkbox" name="read-more" id="read-more">
        <h4>10 February, 2025</h4>
        <h3>Read More/Read Less button</h3>
        <div class="blogtext">
            <p>After finally finishing the filter system, as I was scrolling through my blog, I quickly noticed that the blog was extremely long to scroll through if a user didn't want to use the filter system and simply wanted to sift through each article. They would have to dredge through long walls of text just to get to an article they wanted to use - not only that, but this would be the only way that those without Javascript access could navigate my blog. Therefore, in order to make my website more accessible and less overwhelming, I wanted a way to be able to have the articles collapsed, and to simply open and close them with a button whenever someone wanted to read it. </p>
            <p>The simplest way I could achieve this was using a bare-bones read more button that would expand each blog div to full height when clicked. I found this tutorial by <a href="https://www.youtube.com/watch?v=4imxQHicyN0">Vladyslavy Dihtiarenko</a> to create a button using only CSS and HTML, controlling the line height to only display one line until clicked, when it expands to automatically encompass all of the text. Additionally, I liked the fact that the text would dynamically change depending on whether the blog post was expanded or contracted, changing to 'Read Less' if it was expanded and serving as a good reminder in case users didn't realise that this button could also shrink the blog posts again.</p>
            <img src="images/readmore.png" alt="An example of a blog post with the read more/read less button.">
            <p>While I was able to implement this swiftly for the first article, I soon stumbled upon an issue - when I copied this code over to the Quiz 2 blog post, clicking 'Read More' on Quiz 2 would instead expand and contract Quiz 1's post, and Quiz 2's remained stationary. Thankfully, the fix for this was easy to identify due to having been paying attention to IDs while creating the filter system. If all the read more checkboxes and labels had the same ID, they would all default to executing the opening and closing code on the first div with those IDs, Quiz 1. Therefore, I needed to give the checkboxes and labels unique IDs for every blog post. Once this was rectified, each blog post could be expanded and contracted as they should have been, providing a much less overwhelming blog reading experience. The only disadvantage, however, was that the transition between opening and closing was very abrupt, and if I had more time I would want to create a smoother transition between the two. </p>
            <img src="images/readmorecode.png" alt="CSS code to style the Read More button dynamically.">
        </div>
        <label for="read-more"></label>
    </div>`,
    },

];

document.addEventListener('DOMContentLoaded', () => {
    const articleContainer = document.querySelector('.blogs');

    //Filter categories based on what filter we clicked
    const links = document.querySelectorAll('.blogaside .filter a');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.id;
            //If the category exists, filter articles based on what categories they have in their array
            if (category) {
                const filteredArticles = articleData.filter(function(data) {
                    return data.category.includes(category);
                });
                displayArticleData(filteredArticles);
            } else {
                console.error('This category does not exist!');
            }
        });
    });

    function displayArticleData(articles) {
        //Show only the filtered articles
        if (articles.length === 0) {
            articleContainer.innerHTML = `<p>Sorry, no articles found!<p>`;
        } else {
            let displayData = articles.map(function(cat_items) {
                return cat_items.content; //returns content string inside the article object
            }).join("");
            articleContainer.innerHTML = displayData;
        }
    }
}); 






