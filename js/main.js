
var count = 0;
var counter = document.getElementById("counter");
counter.innerText = count;

var redButton = document.getElementById("button--red")
redButton.onclick = function(){
    if(count > -10)
        count -= 1; 
    else{
        count = 0;
}
    counter.innerText = count;
}


var greenButton = document.getElementById("button--green");
greenButton.onclick = function(){
    if(count >= 10)
        count = 0; 
    else{
        count += 1;
}
    counter.innerText = count;
}