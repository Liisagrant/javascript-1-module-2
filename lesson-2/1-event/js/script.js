//const myFunctionExpression = function () {
  //  console.log("hello");
//}
//myFunctionExpression();

//question 2 way 1 to detect btn
//const button = document.querySelector(".btn");

 //const thisClick = function () {
 //    console.log("The btn is clicked");
 //};

 //button.addEventListener("click",thisClick);



// way 2 to detect btn
//button.onclick = function () {
   // console.log("I clicked the 2 one");
//};

//button.onclick = function (event) {
 //   console.log(this);
//};

//question 3 key press

//const myFirstNameInput = document.querySelector("#firstName")

//const handelKeyPress = function (event){
   // console.log("A key is pressed")
   // console.log(event.target.value);
//};
//myFirstNameInput.addEventListener("keydown",handelKeyPress);

//question 4 play with mouse over
//const myFirstMouseOver = document.querySelector(".pet-btn");

//const handleMouseOver = function (){
  //  myFirstMouseOver.classList.add("hover");
//};
//myFirstMouseOver.addEventListener("mouseover",handleMouseOver);

//question 5 hover out

//const handleMouseOut = function (){
 //   myFirstMouseOver.classList.remove("hover");
//};
//myFirstMouseOver.addEventListener("mouseout",handleMouseOut);





//question 6 select all the li

//const listItems = document.querySelectorAll("li");
//console.log(listItems);

//for (let i = 0; i < listItems.length; i++){
 //   listItems[i].addEventListener("mouseover",hoverListItem);
//}

//function hoverListItem(event){
  //  console.log(event.target.dataset.animal);
//}

//question 7
//switch case

/*const animal = "cow";

switch (animal) {
    case "cat":
        console.log("hello I am cat");
        break;
    case "cow":
        console.log("hello I am cow");
        break;
    case "bird":
        console.log("hello I am bird");
    default:
        console.log("hello no animal for you");
}

console.log(animal);*/

//8 go again with set interval
/*const word = "happy"
let count = 1;

function logMyWord () {

    if (count === 5){
        console.log(wordTimer)
    }
    console.log(count + " " + word);
    count = count + 1;

}

let wordTimer = setInterval(logMyWord,1000)*/

//question 9
/*const containerDiv = document.querySelector(".container")

function myUpdatedTwoSec (){
        containerDiv.innerHTML = "hello I am updated";
}

setTimeout(myUpdatedTwoSec,2000);
 */

