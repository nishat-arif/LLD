console.log("script.js is loaded");

// Example function to test breakpoints
function sayHello() {
    let message = "Hello from script.js";
    console.log(message);
    //debugger; // DevTools will pause here
    //alert(message);
}

sayHello();
// Attach event listener
//document.getElementById("testBtn").addEventListener("click", sayHello);