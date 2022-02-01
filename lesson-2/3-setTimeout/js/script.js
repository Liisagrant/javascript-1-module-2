// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function () {
    console.log("hello i am Lisa");
}, 2000);

const loading = document.querySelector(".loader");

setTimeout(function() {
    loading.innerHTML = "finished downloading!";
}, 5000)