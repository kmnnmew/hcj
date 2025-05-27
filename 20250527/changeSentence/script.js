function changeText(){
    const title = document.getElementById("title");
    if(title.textContent == "안녕하세요!"){
        title.textContent = "반가워요! 자바스크립트입니다!"
    } else{
        title.textContent = "안녕하세요!"
    }
}