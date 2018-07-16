function check() {
    let userInput1 = parseInt(document.querySelector("#first").value);
    let userInput2 = parseInt(document.querySelector("#second").value);
    let jumpNum = parseInt(document.querySelector("#third").value);

    let bodyEl = document.querySelector("body");
 
    for (let i = userInput1; i <= userInput2; i += jumpNum) {
        bodyEl.innerHTML += "<p>" + i + "</p>";
        console.log(bodyEl.innerHTML);
    }
 }