let FS = 64
let count = 1;

function changeColor() {
    FS += 10;
    const title = document.getElementById("title");
    title.style.color = "red";
    title.style.backgroundColor = "yellow";
    title.style.fontSize = FS+"px";
}