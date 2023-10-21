//reference the container div of the document
const container = document.querySelector('#container');
//create a new div
const content = document.createElement('div');
//add a new class "content" for the new div
content.classList.add('content');
//add the content of the new div
content.textContent = 'This is the glorious text-content!';
//append the div to the container
container.appendChild(content);