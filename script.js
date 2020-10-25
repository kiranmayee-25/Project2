hello = () =>{
  var name=document.getElementById('input');
  loadGreetings(name.value);
}

function loadGreetings() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("greetings").innerHTML = `${this.responseText} ${input.value}`;
  }
};
xhttp.open("GET", "data/greetings.txt", true);
xhttp.send();
}

getResult = () =>{
  var expr=document.getElementById('input1');
  loadexpr(expr.value);
}

function loadexpr() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("result").innerHTML = `${this.responseText} ${eval(input1.value)}`;
  }
};
xhttp.open("GET", "data/result.txt", true);
xhttp.send();
}