document
  .getElementById("contentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const promptText = document.getElementById("prompt").value.trim();

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "OpenAI's text generation models provide text outputs in response to their inputs.",
          },
          { role: "user", content: promptText },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const outputContainer = document.getElementById("outputContainer");
        const article = formatArticle(data.choices);
        outputContainer.innerHTML = article;

        // Save the new article to local storage
        const newArticle = generateNewArticle(data.choices, promptText);
        saveArticleToStorage(newArticle);

        // Schedule displaying saved articles after 5 seconds
        setTimeout(() => {
          displaySavedArticles();
        }, 1000);
      })
      .catch((error) => console.error("Error:", error));
  });

function formatArticle(choices) {
  let formattedContent = "";
  choices.forEach((choice) => {
    if (choice.message.role === "assistant") {
      formattedContent += formatParagraph(choice.message.content);
    }
  });
  return formattedContent;
}

function formatParagraph(content) {
  const lines = content.split("\n");
  let paragraph = '<div class="paragraph">';
  lines.forEach((line) => {
    if (line.trim() !== "") {
      if (line.startsWith("- ")) {
        paragraph += `<ul><li>${line.substring(2)}</li></ul>`;
      } else {
        paragraph += `<p>${line}</p>`;
      }
    }
  });
  paragraph += "</div>";
  return paragraph;
}

function generateNewArticle(choices, promptText) {
  let newArticle = `<h3 class="article-title">${promptText}</h3>`; // Use class "article-title" for styling
  choices.forEach((choice) => {
    if (choice.message.role === "assistant") {
      newArticle += formatParagraph(choice.message.content);
    }
  });
  return newArticle;
}

function saveArticleToStorage(article) {
  /*Keyword*/
  const keywords = [
    "technology",
    "artificial intelligence",
    "machine learning",
    "students",
    "tech",
    "AI",
    "programming",
    "javascript",
    "HTML",
    "css",
    "php",
    "java",
    "TypeScript",
    "chatgpt",
    "student-help",
    "textcorrector",
    "grammar",
    "code",
    "learning",
    "algorithms",
    "data science",
    "web development",
    "software engineering",
    "computer science",
    "neural networks",
    "deep learning",
    "natural language processing",
    "computer vision",
    "frontend",
    "backend",
    "full-stack",
    "development tools",
    "frameworks",
    "libraries",
    "coding bootcamps",
    "online learning",
    "education technology",
    "coding challenges",
    "debugging",
    "version control",
    "agile methodology",
    "object-oriented programming",
    "functional programming",
    "cloud computing",
    "cybersecurity",
    "digital transformation",
    "Internet of Things (IoT)",
    "blockchain",
    "virtual reality",
    "augmented reality",
    "game development",
    "mobile development",
    "user experience (UX)",
    "user interface (UI)",
    "responsive design",
    "cross-platform development",
    "scalability",
    "performance optimization",
    "data structures",
    "databases",
    "APIs",
    "microservices",
    "serverless architecture",
    "agile methodology",
    "project management",
    "continuous integration",
    "continuous deployment",
    "test-driven development",
    "pair programming",
    "code review",
    "tech communities",
    "tech events",
    "online forums",
    "mentorship",
    "career development",
    "job opportunities",
    "freelancing",
    "remote work",
    "work-life balance",
    "professional networking",
    "personal branding",
    "technical interviews",
    "resume building",
    "job search strategies",
    "graduate programs",
    "internships",
    "hackathons",
    "conferences",
    "workshops",
    "webinars",
    "meetups",
    "blogs",
    "podcasts",
    "YouTube channels",
    "online courses",
    "tutorials",
    "documentation",
    "open-source projects",
    "developer communities",
    "developer tools",
    "developer conferences",
    "online resources",
    "coding challenges",
    "coding competitions",
    "code repositories",
    "programming languages",
    "software development methodologies",
    "technology trends",
    "industry insights",
    "best practices",
    "coding standards",
    "performance metrics",
    "debugging techniques",
    "error handling",
    "software architecture",
    "design patterns",
    "refactoring",
    "unit testing",
    "integration testing",
    "end-to-end testing",
    "continuous monitoring",
    "security protocols",
    "compliance regulations",
    "data privacy",
    "ethical considerations",
    "project documentation",
    "technical writing",
    "presentation skills",
    "communication skills",
    "team collaboration",
    "leadership skills",
    "emerging technologies",
    "innovation",
    "startups",
    "entrepreneurship",
    "venture capital",
    "angel investors",
    "business models",
    "market research",
    "product development",
    "user feedback",
    "prototyping",
    "Minimum Viable Product (MVP)",
    "user testing",
    "product launch",
    "growth hacking",
    "scaling",
    "business strategy",
    "financial management",
    "legal considerations",
    "intellectual property",
    "patents",
    "trademarks",
    "copyright",
    "licensing agreements",
    "contract negotiation",
    "risk assessment",
    "regulatory compliance",
    "corporate governance",
    "sustainability",
    "social responsibility",
    "community engagement",
    "diversity and inclusion",
    "workplace culture",
    "employee well-being",
    "mental health awareness",
    "employee benefits",
    "career advancement",
    "professional development",
    "leadership development",
    "talent acquisition",
    "employee retention",
    "performance management",
    "compensation and rewards",
    "workplace policies",
    "employee training",
    "remote collaboration",
    "hybrid work models",
    "flexible work arrangements",
    "remote team management",
    "virtual meetings",
    "collaboration tools",
    "productivity tips",
    "time management",
    "stress management",
    "work-life integration",
    "digital skills",
    "adaptive learning",
    "remote education",
    "online learning platforms",
    "educational resources",
    "e-learning",
    "blended learning",
    "educational technology",
    "distance learning",
    "remote teaching",
    "virtual classrooms",
    "student engagement",
    "academic support",
    "learning management systems",
    "online assessments",
    "digital literacy",
    "21st-century skills",
    "critical thinking",
    "problem-solving",
    "creative thinking",
    "collaborative learning",
    "project-based learning",
    "self-directed learning",
    "personalized learning",
    "adaptive learning",
    "competency-based education",
    "inclusive education",
    "special education",
    "educational psychology",
    "pedagogy",
    "andragogy",
    "educational neuroscience",
    "learning theories",
    "behavioral psychology",
    "cognitive psychology",
    "constructivism",
    "connectivism",
    "social constructivism",
    "schema theory",
    "multiple intelligences",
    "learning styles",
    "experiential learning",
    "reflective practice",
    "metacognition",
    "motivation theories",
    "goal setting",
    "self-regulation",
    "positive psychology",
    "growth mindset",
    "grit",
    "resilience",
    "emotional intelligence",
    "social-emotional learning",
    "character education",
    "mindfulness",
    "student-centered learning",
    "teacher professional development",
    "education policy",
    "curriculum design",
    "assessment and evaluation",
    "standardized testing",
    "educational standards",
    "education reform",
    "global education",
    "international education",
    "cross-cultural communication",
    "language learning",
    "linguistics",
    "TESOL",
    "ESL",
    "EFL",
    "language acquisition",
    "language teaching methodologies",
    "language proficiency",
    "multilingualism",
    "bilingual education",
    "translation",
    "interpreting",
    "second language acquisition",
    "foreign language learning",
    "heritage language learning",
    "language immersion",
    "language policy",
    "language assessment",
    "language education technology",
    "educational linguistics",
    "applied linguistics",
    "sociolinguistics",
    "psycholinguistics",
    "neurolinguistics",
    "corpus linguistics",
    "text linguistics",
  ];
  const containsKeyword = keywords.some((keyword) =>
    article.toLowerCase().includes(keyword.toLowerCase())
  );
  if (containsKeyword) {
    // Retrieve existing articles from local storage or initialize an empty array
    const existingArticles = JSON.parse(localStorage.getItem("articles")) || [];
    // Add the new article to the array
    existingArticles.push(article);
    // Limit the articles to 25 by removing the oldest ones
    if (existingArticles.length > 25) {
      existingArticles.shift(); // Remove the oldest article
    }
    // Store the updated array back in local storage
    localStorage.setItem("articles", JSON.stringify(existingArticles));
  }
}

function displaySavedArticles() {
  const articleContainer = document.querySelector(
    ".generated-articles-container"
  );
  const savedArticles = JSON.parse(localStorage.getItem("articles")) || [];

  // Clear the existing articles from the container
  articleContainer.innerHTML = "";

  // Display the newest articles first by iterating backwards through the savedArticles array
  for (let i = savedArticles.length - 1; i >= 0; i--) {
    const newArticleDiv = document.createElement("div");
    newArticleDiv.classList.add("generated-article"); // Add a class for generated articles

    newArticleDiv.innerHTML = ` <p>${savedArticles[i]}</p>`;

    articleContainer.appendChild(newArticleDiv);
  }
}
