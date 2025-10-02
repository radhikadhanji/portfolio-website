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
]

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






