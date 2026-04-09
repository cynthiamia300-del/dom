console.log("Script started");

function start() {
    console.log("click");

    //1. create a heading
    let heading = document.createElement("h1");

    //2. set text and styles
    heading.innerText = "attendance";
    heading.style.color = "pink";

    //3. Add the heading to the page
    document.body.appendChild(heading);

    let userName = prompt ("What is your name?");
    console.log(userName);
}

function addName(newName) {
    //1. create second heading
    let heading = document.createElement("h2");
}