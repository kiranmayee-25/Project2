Judge = () => {
    loadName();
  }
  function loadName(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("firstwomanJudge").innerHTML = obj.Judge;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Climb = () => {
    loadName1();
  }
  function loadName1(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("firstwomantoClimb").innerHTML = obj.ToClimb;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  
  IPS = () => {
    loadName2();
  }
  function loadName2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("firstwomanIPS").innerHTML = obj.IPS;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Space = () => {
    loadName3();
  }
  function loadName3(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("firstwomaninSpace").innerHTML = obj.Space;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  President = () => {
    loadName4();
  }
  function loadName4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("president").innerHTML = obj.President;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  PM = () => {
    loadName5();
  }
  function loadName5(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("primeminister").innerHTML = obj.PrimeMinister;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Governor = () => {
    loadName6();
  }
  function loadName6(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("governor").innerHTML = obj.Governor;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  CM = () => {
    loadName7();
  }
  function loadName7(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("chiefminister").innerHTML = obj.ChiefMinister;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  
  Tennis = () => {
    loadName8();
  }
  function loadName8(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("tennis").innerHTML = obj.Tennis;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Badminton = () => {
    loadName9();
  }
  function loadName9(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("badminton").innerHTML = obj.Badminton;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Chess = () => {
    loadName10();
  }
  function loadName10(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("chess").innerHTML = obj.Chess;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Hockey = () => {
    loadName11();
  }
  function loadName11(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("hockey").innerHTML = obj.Hockey;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Boxer = () => {
    loadName12();
  }
  function loadName12(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("boxer").innerHTML = obj.Boxer;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  
  NoblePeace = () => {
    loadName13();
  }
  function loadName13(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("nobleprize").innerHTML = obj.NoblePrize;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  BharatRatna = () => {
    loadName14();
  }
  function loadName14(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("bharatratna").innerHTML = obj.BharatRatna;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  
  PadmaVibhushan = () => {
    loadName15();
  }
  function loadName15(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("padmavibhushan").innerHTML = obj.PadmaVibhushan;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  Pilot = () => {
    loadName16();
  }
  function loadName16(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("pilot").innerHTML = obj.Pilot;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  TrainDriver = () => {
    loadName17();
  }
  function loadName17(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("traindriver").innerHTML = obj.TrainDriver;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  MotorBike = () => {
    loadName18();
  }
  function loadName18(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("motorbike").innerHTML = obj.MotorBike;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }
  
  AutoRickshaw = () => {
    loadName19();
  }
  function loadName19(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(xhttp.responseText);
        document.getElementById("autorickshaw").innerHTML = obj.AutoRickshaw;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }