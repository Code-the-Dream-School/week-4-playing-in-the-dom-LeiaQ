//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'



//resolve // QUESTION 1 here
// in order to append child ele with class='square'
// need to grab parent ele
let parent = document.getElementById('a-1');
// then create the element
let div = document.createElement('div');
// set new element as child 
let child = parent.appendChild(div);
// set the class name for styling
child.className = 'square';
// grab the class name, can also use querySelector
let square = document.querySelector("div.square");
// display an x or an o in square
square.textContent = 'x';
// event listener function to give ability to toggle character change
square.addEventListener('click', () => {
    if(square.textContent === 'x') {
      square.textContent = 'o';  
    } else {
        square.textContent = 'x';
    }
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array below, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = ['red', 'white', 'black', 'green', 'orange'];




//resolve // QUESTION 2 here
//in HTML doc, we need to create a dropdown menu using the select element
let dropDown = document.createElement('SELECT');
// append the dropdown menu to a-2 so it'll appear below the question
const answer = document.getElementById('a-2');
answer.appendChild(dropDown);
// create a for-loop to pull array elements and insert them as options in menu
for (let i = 0; i < colors.length; i++) {
  let option = document.createElement('option');
  option.value = colors[i];
  option.textContent = colors[i];
  dropDown.appendChild(option);
};

// create and append button as a child of the ele with id=a-2
let removeEle = document.createElement('button');
removeEle.textContent = 'remove'; 
answer.appendChild(removeEle);
// function to remove or hide selected item?
removeEle.addEventListener('click', () => {
  //for loop
  for (let i = 0; i < dropDown.length; i++) {
    // use conditional to check index selection, then remove item              
    if (dropDown.selectedIndex == i) {
      dropDown.remove(i);
    };
  };
});




//------------------------Question 3 ---------------------------
//Now lets mix some math and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volume of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () => {
// grab elements needed
  let radius = document.getElementById('radius');
  let volume = document.getElementById('volume');
  let area = document.getElementById('area');
  // get input of radius
  let input = radius.value;
  // create and perform math and insert answer as textContent
  volume.textContent = ((4/3) * Math.PI * Math.pow(radius, 3));
  
  
  
}

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this executes the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons whose click actions are going to hide the respective question above with their answer and if they are hidden then the click option should display the question with their respective answer
// append the 3 buttons to the element with the 'id = a-4' as children


//resolve // QUESTION 4 here

// create a variable for each section of html element div class='question-item' with respective index position
const questionOne = document.querySelector('div.question-item');
const questionTwo = document.querySelectorAll('div.question-item')[1];
const questionThree = document.querySelectorAll('div.question-item')[2];
// append new buttons to ele id=a-4
let questionFour = document.getElementById('a-4');

// I want to revisit to see if i can figure out a loop to configure the button and it's functionality
//for (let i = 0; i < 3; i++) {
//  let button[i] = document.createElement('button');
//  questionFour.appendChild(button[i]);
//  button.textContent = `hide Question-${i + 1}`;
//};

//first button creation and defining
let buttonOne = document.createElement('button');
questionFour.appendChild(buttonOne);
buttonOne.textContent = 'hide Question-1';

// when selection is hidden in DOM, the button description should display "hide Question #"
buttonOne.addEventListener('click', () => {
  if (questionOne.style.display == 'none') {
    buttonOne.textContent = 'hide Question-1';
    questionOne.style.display = 'block';
  //otherwise it should give option to re-display content
  } else {
    buttonOne.textContent = 'display Question-1 and answer';
    questionOne.style.display = 'none';
  };
});


//repeat steps above for other two buttons & respective questions
let buttonTwo = document.createElement('button');
questionFour.appendChild(buttonTwo);
buttonTwo.textContent = 'hide Question-2';
buttonTwo.addEventListener('click', () => {
  if (questionTwo.style.display == 'none') {
    buttonTwo.textContent = 'hide Question-2';
    questionTwo.style.display = 'block';
  } else {
    buttonTwo.textContent = 'display Question-2 and answer';
    questionTwo.style.display = 'none';
  };
});

let buttonThree = document.createElement('button');
questionFour.appendChild(buttonThree);
buttonThree.textContent = 'hide Question-3';
buttonThree.addEventListener('click', () => {
  if (questionThree.style.display == 'none') {
    buttonThree.textContent = 'hide Question-3';
    questionThree.style.display = 'block';
  } else {
    buttonThree.textContent = 'display Question-3 and answer';
    questionThree.style.display = 'none';
  };
});
