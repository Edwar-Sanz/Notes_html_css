
let time = 11;
console.log(time);
function countdown(){
    if (time <= 0) {
        time = 11;
    } 
    else {
        time--;
        document.getElementById("countdown").innerHTML = "time to new round:  "+  time;
    }
}
let id_setInterval;
function countdown_funtion (){
    id_setInterval = setInterval(countdown, 1000);
    console.log(time);
}

    
  
    
    


