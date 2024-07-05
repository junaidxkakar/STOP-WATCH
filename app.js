let minutes = 0;
let seconds = 0;
let milisec = 0;
let getmin = document.getElementById('min');
let getsec = document.getElementById('sec');
let getmili = document.getElementById('msec')
 let stopwatch;
function start (){
    stopwatch = setInterval(function(){
        milisec++
        getmili.innerHTML = milisec
        if(milisec >= 100){
            milisec = 0
            seconds++
            getsec.innerHTML = seconds
        }
        else if(seconds >= 60){
            seconds = 0
            minutes++
            getmin.innerHTML = minutes
        }
    
    },10)
    document.getElementById('start').disabled = true
}
function stop(){
    clearInterval(stopwatch)
    document.getElementById('start').disabled = false
}
function reset(){
minutes = 0 +'0'
seconds = 0 +'0'
milisec = 0 +'0'
getmin.innerHTML = minutes
getsec.innerHTML = seconds
getmili.innerHTML = milisec
}
