//reference the container div of the document
const container = document.querySelector('#container');

//create a new div
const content = document.createElement('div');
//add a new class "content" for the new div
content.classList.add('content');
//add the content of the new div
content.textContent = 'This is the glorious text-content!';

//create a new <p> with red text that says “Hey I’m red!”
const pRed = document.createElement('p');
pRed.style.cssText = 'color: red;';          
pRed.textContent = "Hey I\’m red!";

//create an <h3> with blue text that says “I’m a blue h3!”
const h3Blue = document.createElement('h3');
h3Blue.style.cssText = 'color: blue;';          
h3Blue.textContent = "I\’m a blue h3!";

//create a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
const divBlackPink = document.createElement('div');
divBlackPink.setAttribute('style', 'border: 1px solid black; background-color: pink;');

const h1IntoDiv = document.createElement('h1');
h1IntoDiv.textContent = "I\’m in a div";

const pIntoDiv = document.createElement('p');
pIntoDiv.textContent = "ME TOO!";

//as suggested, i need to append those elements to the div, 
//before append the div to the container
divBlackPink.appendChild(h1IntoDiv);
divBlackPink.appendChild(pIntoDiv);

//append the div to the container
container.appendChild(content);
//append all the new elements to the container
container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(divBlackPink);