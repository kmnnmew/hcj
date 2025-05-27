let count = 0;
function increase(){
    if(count>=10){
        document.getElementById("count").textContent = "멈춰! 너무 커!";
    }else{
    count++;
    document.getElementById("count").textContent = count;
    if(count%5==0){
        document.getElementById("count").style.color = "red"
    }else{
        document.getElementById("count").style.color = "black"
    }
    }
}