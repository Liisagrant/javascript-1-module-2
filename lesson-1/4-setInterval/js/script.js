// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.


/*setInterval(function (){
    console.log("hello I am here");
},5000);*/


/*let count = 0;
const intervalId = setInterval(function (){
    count = count + 1;
    console.log(count);
    if (count === 10) {
        console.log("interval done!")
        clearInterval(intervalId);
    }
},1000)*/


// Example Question

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds

// 1. Select the .container ul
// 2. declare a count variable
// 3. setInterval Method
// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. Create the li
// 7. add to the innerHTML of this li the count.
// 8. use append  use apend to add the li to the ul

// OR >> container.innerHTML += <li>${countSecond}</li>;

// 9.  YOU NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval

const myContainer = document.querySelector(".container")
let myCount = 0;
const intervalId = setInterval(function (){
    myCount = myCount + 1;
   const listItem = document.createElement("li");
   listItem.innerHTML = "<span>Lisa</span>" + myCount;
   myContainer.append(listItem);

    //myContainer.innerHTML += `
    //<li>${myCount}</li>
    //`; Dette funker også...



    if (myCount === 10) {
        console.log("interval done!")
        clearInterval(intervalId);
    }

},2000)