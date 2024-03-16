// Event listener for the "Get Example" button
document.getElementById('get-example').addEventListener('click', function() {
  const promptText = `
  Generate a code example for a UI element, this needs to simple and be something new everytime be creative and generate either a 
  Button with a gradient background
  Toggle switch for turning a feature on/off
  Input field for entering a username
  Dropdown menu for selecting a country
  Radio buttons for selecting a gender
  Checkbox for agreeing to terms and conditions
  Progress bar indicating completion status
  Slider for adjusting volume
  Navigation bar with links to different sections of a website
  Tabbed interface for organizing content
  Modal window for displaying messages or alerts
  Tooltip for providing additional information on hover
  Calendar for selecting dates
  Card layout for displaying product information
  Pagination buttons for navigating through pages of content
  Accordion menu for expanding/collapsing sections
  Rating stars for user feedback
  Loading spinner indicating a process is in progress
  Scroll-to-top button for quickly returning to the top of a page
  Search bar for entering search queries
  Notification badge for indicating new messages or updates
  Alert box for displaying important notifications or warnings
  Context menu for providing options relevant to a specific item or area
  Image carousel for showcasing a series of images or slides
  Dropdown list for selecting options from a list of choices
  Color picker for selecting colors from a palette
  Toggleable tabs for switching between different views or modes
  Signature pad for capturing handwritten signatures
  
   but nothign with image or anything that need filles. Please provide the following: 

 Description: [Provide a brief description of the UI element.]
HTML: [Generate HTML code for creating the UI element. No additional text or anything other than code. Make sure to provide when the code starts for each kind of coding language, you can specify it using a command as this example <!-- HTMl -->.]
 CSS: [Generate CSS code for styling the UI element. No additional text or anything other than code. Make sure to provide when the code starts for each kind of coding language, you can specify it using a command as this example /* CSS*/.]
JavaScript: [Generate JavaScript code for any interactive behavior associated with the UI element. No additional text or anything other than code. Make sure to make it clear when the code starts for each kind of coding language, you can specify it using a commands as this example /* Javascript*/ ]

  `;

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
    // Extract the generated content from the API response
    const generatedContent = data.choices[0].message.content;
    
    // Split the generated content into sections based on the prompt structure
    const sections = generatedContent.split('\n\n');
  
    // Extract content for each section
    const description = sections[0].substring(13); // Remove "Description: " prefix
    const exampleHTML = extractCodeFromSection(sections[1]); // Remove "HTML: " prefix
    const exampleCSS = extractCodeFromSection(sections[2]); // Remove "CSS: " prefix
    const exampleJavaScript = extractCodeFromSection(sections[3]); // Remove "JavaScript: " prefix
  
    // Log the extracted JavaScript code
    console.log('Extracted JavaScript:', exampleJavaScript);
  
    // Update the content of the respective textarea elements
    document.getElementById('notes').value = description;
    document.getElementById('html').value = exampleHTML;
    document.getElementById('css').value = exampleCSS;
    document.getElementById('javascript').value = exampleJavaScript;
  
    // Compile the updated code in the live coding playground
    compile();
  }) 
  
  
  .catch(error => console.error('Error:', error));
});

// Function to extract code from a section
// Function to extract code from a section
function extractCodeFromSection(section) {
  // Remove the prefix and any command indicating the code language
  const codeStartIndex = section.indexOf('\n') + 1;
  let code = section.substring(codeStartIndex);
  
  // Remove code block indicators and any text outside of the code commands
  code = code.replace(/```.*\n/g, '');
  code = code.replace(/<!--.*-->\n/g, '');
  code = code.replace(/\/\*.*\*\//g, '');
  
  // Remove trailing ```
  code = code.replace(/```/g, '');

  return code.trim(); // Trim to remove leading and trailing whitespaces
}

