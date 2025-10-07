/*Defining the data for each article */
const articleData = [
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
              <p>While I do still love programming, many of these factors surrounding the industry make me feel hesitant about continuing to pursue this field, especially considering the outlook of new graduates trying to break into an industry that seems closed off from the very beginning. A dangerous ‘hustle culture’ is normalised simply to get your first job out of university - nobody in any industry should have to send over 300 applications just to land a single offer, and nobody should have to create dozens of completely polished, exceptional projects to stand out in the hiring process either. Unfortunately, many anecdotes coming out of friends who have struggled in this industry resemble these statements almost to the letter, and it makes me feel disillusioned seeing friends who have leagues more experience than me still struggle to even find a short-term summer internship. </p>
              <p>Coming to the topic of what I actually want to do for the future, I’d like to keep upskilling with the latest technology, building another side project or networking, but there’s really only so much one person can do before it just turns into a numbers game, and jobs in numbers isn’t something New Zealand has. I do have faith that an opportunity will come my way, but as of right now, I do feel somewhat directionless with my career prospects. I wouldn’t want to go into a completely unrelated field where my degree feels like it wasn’t worth anything, but at the same time, I have to wonder whether it’s worth it to continue when the chances of getting a role in tech are still growing slimmer, especially with AI beginning to replace some of the workforce. While I don’t know if I was able to use this course to the fullest extent, as my degree is not a design discipline, many of the things design students already have to do to get jobs feels reminiscent of the current state of technology graduates right now, which I can definitely learn from going forward.</p>
              <p>In the end, I will have to evaluate whether continuing this path will lead to something fruitful in the future sooner rather than later. I am aware that I may seem overly negative throughout this post, but I feel it’s important to be realistic and acknowledge these struggles rather than continue pretending and possibly be stuck on a sinking ship. Recently I have been making narrative games, comics, and art for other classes, and I have felt much more passionate about creating now than anytime else. While I have never truly considered pursuing this full-time as society has always had this narrative that artists and creators will always struggle financially, and financial stability is important to me, it may be time to consider investing more into this side, even if it doesn’t become a main source of income.</p>
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



