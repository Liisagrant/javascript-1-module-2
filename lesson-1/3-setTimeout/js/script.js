// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function () {
    console.log("hell0 i am Michael");
}, 2000);

const loading = document.querySelector(".loader");

setTimeout(function() {
    loading.innerHTML = "finished downloading!";
}, 5000)