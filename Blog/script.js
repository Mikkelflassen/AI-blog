document.getElementById('contentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const promptText = document.getElementById('prompt').value.trim();
  
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "OpenAI's text generation models provide text outputs in response to their inputs."},
        {"role": "user", "content": promptText}
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    const outputContainer = document.getElementById('outputContainer');
    const article = formatArticle(data.choices);
    outputContainer.innerHTML = article;

    // Save the new article to local storage
    const newArticle = generateNewArticle(data.choices);
    saveArticleToStorage(newArticle);

    // Schedule displaying saved articles after 5 seconds
    setTimeout(() => {
      displaySavedArticles();
    }, 5000);
  })
  .catch(error => console.error('Error:', error));
});

function formatArticle(choices) {
  let formattedContent = '';
  choices.forEach(choice => {
      if (choice.message.role === 'assistant') {
          formattedContent += formatParagraph(choice.message.content);
      }
  });
  return formattedContent;
}

function formatParagraph(content) {
  const lines = content.split('\n');
  let paragraph = '<div class="paragraph">';
  lines.forEach(line => {
      if (line.trim() !== '') {
          if (line.startsWith('- ')) {
              paragraph += `<ul><li>${line.substring(2)}</li></ul>`;
          } else {
              paragraph += `<p>${line}</p>`;
          }
      }
  });
  paragraph += '</div>';
  return paragraph;
}

function generateNewArticle(choices) {
  let newArticle = '';
  choices.forEach(choice => {
      if (choice.message.role === 'assistant') {
          newArticle += choice.message.content;
      }
  });
  return newArticle;
}

function saveArticleToStorage(article) {
  // Retrieve existing articles from local storage or initialize an empty array
  const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];
  // Add the new article to the array
  existingArticles.push(article);
  // Store the updated array back in local storage
  localStorage.setItem('articles', JSON.stringify(existingArticles));
}

function displaySavedArticles() {
  const articleContainer = document.querySelector('.article-container');
  const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
  savedArticles.forEach(article => {
      const newArticleDiv = document.createElement('div');
      newArticleDiv.classList.add('article');
      newArticleDiv.innerHTML = `<h3>New Article Title</h3><p>${article}</p>`;
      articleContainer.appendChild(newArticleDiv);
  });
}
// Event listener to handle article deletion
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
      const index = parseInt(event.target.dataset.index);
      deleteArticle(index);
  }
});

// Function to delete an article by index
function deleteArticle(index) {
  let savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
  savedArticles.splice(index, 1);
  localStorage.setItem('articles', JSON.stringify(savedArticles));
  displaySavedArticles();
}
