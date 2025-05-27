function checkEvenOdd() {
    document.body.style.backgroundColor = getRandomColor();
    if(parseInt(document.getElementById("num").value, 10)%2 == 0){
        document.getElementById("oddeven").textContent = "짝수입니다."
    }else if(parseInt(document.getElementById("num").value, 10)%2 == 1){
        document.getElementById("oddeven").textContent = "홀수입니다."
    }else{
        document.getElementById("oddeven").textContent = "숫자가 아닙니다."
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}