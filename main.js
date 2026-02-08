/*Defining the data for each article */
const articleData = [
    {
        id: 3,
        title: "escdle Part 1: The Concept",
        date: "9 February, 2026",
        category: ["projects", "coding"],
        content: `<div class="blogpost" id="blog3">
        <div class="filter projects"><b>Projects</b></div> <div class="filter coding"><b>Coding</b></div>
        <h4>9 February 2026</h4>
        <h3>escdle Part 1: The Concept </h3>
        <input type="checkbox" name="read-more" id="read-more-3">
        <div class="blogtext">
        <p>The main surge of popularity for Wordle-style games may have receded for now, but the daily guessing game format is still very much prevalent today. One of these games that has stuck with me the most is Heardle, a game where you have to guess the correct song based on a snippet of the song, which gets progressively longer after more incorrect guesses. I decided one day that I wanted to combine my interest in Eurovision (how someone with zero connection to Europe whatsoever came to like Eurovision is another story entirely) with my interest in Heardle to create a Heardle-style game specifically for Eurovision songs, and that was how escdle was born.</p>
        <p>So there I was, with an idea. It’s great to have an idea, but not so great when you aren’t sure where to start. Thankfully, I had already dabbled in React before, so I figured I would keep things simple and start with the basic React template.</p>
        <p>And then I thought, wouldn’t it be interesting if I tried something new for this project?</p>
        <p>There were, of course, more options given in the command line for different tools that could be used with React. I decided to opt for TypeScript since I had used this in my Blissdraw project before (albeit I was a little rusty), Next.js, and Tailwind CSS to accompany my tech stack. I hadn’t used the latter two before - and I had only heard of them in passing - but I figured I needed to branch out and learn some more web development frameworks, so what better way to do that than learn through a new project?</p>
        <p>Initially, the game only had two components: the game and the music player. Later, I added an information modal to display update logs and additional instructions about the game (<a href="https://www.youtube.com/watch?v=nwJK-jo91vA">this tutorial</a> was extremely helpful in figuring out how to make the modal). Some immediate observations I had:</p>
        <ul>
        <li>Tailwind CSS was extremely helpful in making a clean interface, and once I understood how to add styling through className, it ended up being very easy to use. Of course, my CSS wasn’t very complicated, so I’m sure it would have been harder to use if I had more to work with.</li>
        <li>I initally didn’t understand how seperating sections of my project into components worked, but once I did, I realised it was much cleaner than using raw HTML - no longer was I getting confused about what piece of JavaScript pertained to which section of my project. The useState hook was easy to understand when I thought of it similar to a getter and setter from Java, but useEffect took a little longer to understand. From my research, I’ve also seen that using too many useEffect hooks slows down performance, so I want to try optimising my code to use less of these in the future, excluding where it’s necessary. Reading <a href="https://react.dev/learn/you-might-not-need-an-effect"> this article  </a> helped give me a new perspective on useEffect!</li>
        <li>I like making data structures. Making the song data structure was fun! Although adding aspects such as the year the song was made and the country the song was representing did add more space, I felt it was important to include in the context of Eurovision songs. </li>
        </ul>
        <p>So far, I was hosting all my song clips as .mp3 files locally in the public folder, but I knew it wasn’t scalable (only 16 songs and I was already getting warnings on GitHub!) so I started researching other ways of retrieving songs. Thankfully, the SoundCloud API exists! This will be documented in the next blog post. </p>
        <p>After getting the base functionality of the game in (getting a random song, clicking the play button to play a song, being able to guess, getting results for incorrect and correct guesses and the song increasing in length with each incorrect guess, and the daily timer), the game was finally ready to play!</p>
        <p>…until I realised I had used up all my Netlify credits from enabling automatic deploys on my personal website while testing and all my projects were deactivated. Lesson learned: turn off automatic deploys and don’t commit while you’re still testing something. </p>
        <p>After spending 9 dollars on the Personal plan and configuring all my deploy settings properly, escdle was now ready to actually play! Despite already knowing what songs would appear, I actually had a lot of fun playing around with it, and I was satisfied with how it turned out for the time being, considering all that I had learned (although the game didn’t stay in it’s initial state for very long). </p>
        <p>The next blog post will document the addition of endless mode, switching to SoundCloud for song clips, and adding daily guessing statistics!</p>
        </div>
        <label for="read-more-3"></label>
        </div>`,
    },
    {
        id: 2,
        title: "Plans for the Future (INDN332)",
        date: "7 October, 2025",
        category: ["design"],
        content: `<div class="blogpost" id="blog2">
            <div class="filter design"><b>Design</b></div>
            <h4>7 October 2025</h4>
            <h3>Plans for the Future (INDN332)</h3>
            <input type="checkbox" name="read-more" id="read-more-2">
            <div class="blogtext">
              <p>I have always found it difficult to approach the concept of planning for the future for a multitude of reasons, but mainly due to the fact that I tend to think mostly in the present and in the immediate future, rather than a distant future months or even years into the future. Though spontaneity has always brought the most unexpectedly positive results to my future prospects, I also have to acknowledge that this mindset makes it difficult to plan out a career timeline, especially in a discipline like computer science where technology moves incredibly fast and competition is tight. Therefore, my main difficulty as of late has not only been to enact actions to secure my future career, but to actually acknowledge that these actions need to be taken. It is easy for many to see reports of exemplary candidates receiving multiple offers with no offers of their own and subsequently believe that recruitment is just a numbers game; while it can be true to some extent that securing a job can be influenced by luck, employment prospects are bolstered much more with enough effort and strategy the candidate puts behind their craft. Still, there are some challenges - what could I or any other candidate do to stand out, when it seems like every other candidate is using the same wide breadth of tactics to get hired?</p>
              <p>Due to there only being so much one candidate can learn before their list of skills becomes exhaustive, and with various side projects and internships becoming the norm for computer science students rather than the sign of a particularly dedicated candidate, the separation between rejection and non-rejection is often having connections with those in the hiring team. Especially in the Wellington region, developer teams tend to prioritise hiring those who have pre-established relationships. While this does make it easier for students to prioritise networking over other skills, I find myself uncomfortable with the fact that anyone, even a perfect candidate or a candidate with incredible motivation and drive to learn, could be rejected solely because they do not personally know anyone on the hiring team. This anti-meritocratic mindset rewarding those based off who they know rather than what they know or their potential especially worries me due to the risk of teams slowly becoming homogenous and turning down those with unconventional mindsets who could provide a unique perspective and methodology to the team, especially regarding the influx of AI integration in existing applications. If a team completely composed of one kind of individual develops a machine learning model that can give information about other kinds of individuals, what guarantee is there that others will be represented fairly and equally if they did not have an input in the creation of the model at all? While I have been discussing these topics broadly so far, it does serve as context for many of my misgivings with the tech industry in its current form.</p>
              <p>While I do still love programming, many of these factors surrounding the industry make me feel hesitant about continuing to pursue this field, especially considering the outlook of new graduates trying to break into an industry that seems closed off from the very beginning. A dangerous 'hustle culture' is normalised simply to get your first job out of university - nobody in any industry should have to send over 300 applications just to land a single offer, and nobody should have to create dozens of completely polished, exceptional projects to stand out in the hiring process either. Unfortunately, many anecdotes coming out of friends who have struggled in this industry resemble these statements almost to the letter, and it makes me feel disillusioned seeing friends who have leagues more experience than me still struggle to even find a short-term summer internship. </p>
              <p>Coming to the topic of what I actually want to do for the future, I'd like to keep upskilling with the latest technology, building another side project or networking, but there's really only so much one person can do before it just turns into a numbers game, and jobs in numbers isn't something New Zealand has. I do have faith that an opportunity will come my way, but as of right now, I do feel somewhat directionless with my career prospects. I wouldn't want to go into a completely unrelated field where my degree feels like it wasn't worth anything, but at the same time, I have to wonder whether it's worth it to continue when the chances of getting a role in tech are still growing slimmer, especially with AI beginning to replace some of the workforce. While I don't know if I was able to use this course to the fullest extent, as my degree is not a design discipline, many of the things design students already have to do to get jobs feels reminiscent of the current state of technology graduates right now, which I can definitely learn from going forward.</p>
              <p>In the end, I will have to evaluate whether continuing this path will lead to something fruitful in the future sooner rather than later. I am aware that I may seem overly negative throughout this post, but I feel it's important to be realistic and acknowledge these struggles rather than continue pretending and possibly be stuck on a sinking ship. Recently I have been making narrative games, comics, and art for other classes, and I have felt much more passionate about creating now than anytime else. While I have never truly considered pursuing this full-time as society has always had this narrative that artists and creators will always struggle financially, and financial stability is important to me, it may be time to consider investing more into this side, even if it doesn't become a main source of income.</p>
            </div>
        <label for="read-more-2"></label>
     </div>
       `,
    },
    {
        id: 1,
        title: "Blog 1",
        date: "17 January, 2025",
        category: ["projects", "misc"],
        content: `<div class="blogpost" id="blog1">
            <div class="filter projects"><b>Projects</b></div> <div class="filter misc"><b>Misc.</b></div>
            <h4>6 October 2025</h4>
            <h3>First Blog!</h3>
            <input type="checkbox" name="read-more" id="read-more-1">
            <div class="blogtext">
              <p>This is my first blog post on my new portfolio website. While this mainly serves as a test article, I also want to highlight some projects I have been working on at the conception of this website.</p>
              <p>I have recently been interested in exploring the implementation of servlets in Java projects - though I could simply use Apache Tomcat to deploy a servlet application, I would like to refresh my knowledge of AWS by deploying a servlet application with AWS. </p>
              <p>In terms of projects which are already in progress, I am continuing to develop Frill, a web-forum where students can discuss graduate programs and the recruitment process. </p>
              <p>I have also recently continued development on my Python-based search engine. I have decided to migrate the database gradually to Supabase as the data my web crawler connects has grown too big to host on GitHub. </p>
              <p>Going forward, I hope this blog continues to serve as an effective documentation process for my learning and development. My next step for this website will be to improve the descriptions and add more projects to my projects page.</p>
            </div>
        <label for="read-more-1"></label>
     </div>
       `,
    }
    
];

document.addEventListener('DOMContentLoaded', () => {
    const articleContainer = document.querySelector('.blogs');

    displayArticleData(articleData);  //Display all articles initially
    
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



