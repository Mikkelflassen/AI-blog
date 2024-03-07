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
  