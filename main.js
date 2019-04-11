function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    document.getElementById('clock').innerHTML = h + ":" + m;
    var t = setTimeout(clock, 500);
}
