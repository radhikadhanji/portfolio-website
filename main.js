/*Defining the data for each article */
const articleData = [
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



