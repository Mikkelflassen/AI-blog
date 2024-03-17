const examples = [
  {
    description: "Button with hover effect",
    html: `<button class="hover-button">Hover me</button>`,
    css: `.hover-button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.hover-button:hover {
  background-color: #45a049; /* Darker Green */
  color: white;
}`,
    js: `document.querySelector('.hover-button').addEventListener('mouseover', function() {
  alert('Hovered!');
});`
  },
  {
    description: "Input field with validation",
    html: `<input type="text" class="input-field" placeholder="Enter text">`,
    css: `.input-field {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.input-field:focus {
  border: 3px solid #555;
}`,
    js: `document.querySelector('.input-field').addEventListener('input', function() {
  if (this.value.length > 10) {
    alert('Text cant be more than 10 characters long!');
  }
});`
  },
  {
    description: "Dropdown menu",
    html: `<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>`,
    css: `.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}`,
    js: `// JavaScript code for interactive behavior (optional)
// You can add JavaScript to handle dropdown functionality if needed
// For example, to close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  }
});`
  },
  
  {
    description: "Accordion",
    html: `<div class="accordion">
  <button class="accordion-btn">Section 1</button>
  <div class="accordion-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <button class="accordion-btn">Section 2</button>
  <div class="accordion-content">
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>`,
    css: `.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.accordion.active, .accordion:hover {
  background-color: #ccc;
}

.accordion-content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}

.accordion-content p {
  margin: 0;
}

.active + .accordion-content {
  display: block;
}`,
    js: `// JavaScript code for accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});`
  },
  
  {
    description: "Form with validation",
    html: `<form id="myForm">
  <input type="text" id="username" name="username" placeholder="Username"><br><br>
  <input type="password" id="password" name="password" placeholder="Password"><br><br>
  <button type="submit">Submit</button>
</form>`,
    css: `/* CSS for form validation */
/* Add styles for invalid input */
input:invalid {
  border-color: red;
}

/* Add styles for valid input */
input:valid {
  border-color: green;
}`,
    js: `// JavaScript code for form validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  
  if (username.value === '' || password.value === '') {
    alert('Username and password are required!');
    event.preventDefault(); // Prevent form submission
  }
});`
  },
  {
    description: "Modal Popup",
    html: `<button id="openModal">Open Modal</button>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>This is a modal popup.</p>
      </div>
    </div>`,
    css: `.modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.5);
    }
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }`,
    js: `document.getElementById('openModal').addEventListener('click', function() {
      document.getElementById('myModal').style.display = 'block';
    });
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('myModal').style.display = 'none';
    });`
  },

  

  {
    description: "Tooltip on Hover",
    html: `<div class="tooltip">
      Hover over me
      <span class="tooltiptext">This is a tooltip</span>
    </div>`,
    css: `.tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: white;
      text-align: center;
      border-radius: 6px;
      padding: 8px 0;
      
      opacity: 0;
      transition: opacity 0.3s;
    }
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
    .tooltip:hover {
      border-bottom: 1px dotted transparent; /* Hide the border on hover */
    }`,
    js: `// No JavaScript needed for basic tooltip functionality`
  },
  
  
  {
    description: "Animated Loading Spinner",
    html: `<div class="spinner"></div>`,
    css: `.spinner {
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
      margin: auto;
      margin-top: 50px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`,
    js: `// No JavaScript needed for basic loading spinner functionality`
  }




];


// Initialize index to track current example
let currentIndex = 0;

// Display the current example
function displayExample() {
  const example = examples[currentIndex];
  document.getElementById('notes').value = example.description; // Change to value
  document.getElementById('html').value = example.html; // Change to value
  document.getElementById('css').value = example.css; // Change to value
  document.getElementById('js').value = example.js; // Change to value
  compile();
}

// Event listener for the "Next Example" button
document.getElementById('next-example').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % examples.length; // Cycle through examples
  displayExample();
});

// Initial display of example
displayExample();

// Function to compile and display the code in the iframe
function compile() {
  var html = document.getElementById("html").value;
  var css = document.getElementById("css").value;
  var js = document.getElementById("js").value;
  var code = document.getElementById("code").contentWindow.document;
  code.open();
  code.writeln(html + "<style>" + css + "</style>" + "<script>" + js + "</script>");
  code.close();
}

// Event listeners for input on textareas to trigger compilation
document.getElementById('html').addEventListener('input', compile);
document.getElementById('css').addEventListener('input', compile);
document.getElementById('js').addEventListener('input', compile);
