document.addEventListener("DOMContentLoaded", function() {
    const newsArticles = [
        {
            title: "New Research Lab Inaugurated",
            date: "August 15, 2024",
            content: "Our college has inaugurated a new state-of-the-art research lab in the Computer Science department...",
            link: "#",
            image: "/a.jpg"
        },
        {
            title: "Annual Sports Day Announced",
            date: "August 10, 2024",
            content: "The college's Annual Sports Day is set to take place on September 25th. Students are encouraged to participate...",
            link: "#",
            image: "/Sports.jpg"
        },
        {
            title: "Guest Lecture by Dr. Emily Johnson",
            date: "August 8, 2024",
            content: "Dr. Emily Johnson, a renowned physicist, will be delivering a guest lecture on Quantum Mechanics...",
            link: "#",
            image: "/s.jpg"
        }
        // Add more articles as needed
    ];

    const newsContainer = document.getElementById("news-articles");

    newsArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("news-article");

        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="news-article-content">
                <h3>${article.title}</h3>
                <p><em>${article.date}</em></p>
                <p>${article.content}</p>
                <a href="${article.link}">Read more</a>
            </div>
        `;

        newsContainer.appendChild(articleElement);
    });
});