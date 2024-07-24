const log = console.log;

const body = document.body;
const buttons = document.querySelectorAll(".box");

function changeBodyBackground(color) {
    body.style.backgroundColor = color;
}

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.id === "box1") {
            changeBodyBackground("red");
        } else if (e.target.id === "box2") {
            changeBodyBackground("blue");
        } else if (e.target.id === "box3") {
            changeBodyBackground("green");
        } else {
            changeBodyBackground("yellow");
        }
    });
});
