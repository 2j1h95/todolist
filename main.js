function clock(){
    var today = new Date();
    var h = today.getHours().toString();
    var m = today.getMinutes().toString();
    h = improveRead(h);
    m = improveRead(m);
    document.getElementById('clock').innerHTML = h + ":" + m;
    var t = setTimeout(clock, 500);
}

function improveRead(input){
    is = Number(input);
    if(is < 10){
        newtime = '0' + input;
        return newtime
    }else{
        return input;
    }
}

var myNodelist = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('sapn');
  var txt = document.createTextNode("\u00D7");
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
     event.target.classList.toggle('checked')
}, false);


function addItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addtodo").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("기록할 내용을 입력해주세요!");
    } else {
      document.getElementById("todolist").appendChild(li);
    }
    document.getElementById("addtodo").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  function onEnter(){
      if(event.keyCode == 13){
          addItem()
      }
  }