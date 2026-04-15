console.log("hoisting.js is loaded");

// Example to test hoisting
function hoistTest() {
    console.log(a); // undefined because of hoisting
    var a = 10;
    console.log(a); // 10
    debugger; // DevTools will pause here
}

hoistTest();