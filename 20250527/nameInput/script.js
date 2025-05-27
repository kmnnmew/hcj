function welcome() {
    const name = document.getElementById("username").value;
    const msg = document.getElementById("message");

    if (name.length >= 5) {
        msg.textContent = "이름이 너무 길어요";
        msg.style.color = "red";
    } else {
        if (name === "관리자") {
            msg.textContent = "👑 관리자님, 환영합니다!";
            msg.style.color = "gold";
            msg.style.fontWeight = "bold";
            msg.style.fontSize = "24px";
        } else if (name === "") {
            msg.textContent = "이름을 입력해주세요!";
            msg.style.color = "gray";
        } else {
            msg.textContent = `${name}님, 환영해요!`;
            msg.style.color = "green";
        }
    }
}

document.getElementById("username").addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        welcome();
    }
})