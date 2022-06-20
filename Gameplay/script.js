// Modal 2
var modal2 = document.getElementById("idmodal2");
var img2 = document.getElementById("gamemode2");
var modalImg2 = document.getElementById("imggamemode2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}

var span2 = document.getElementsByClassName("classmodal2")[0];

span2.onclick = function() {
  modal2.style.display = "none";
}

// Modal 3
var modal3 = document.getElementById("idmodal3");
var img3 = document.getElementById("gamemode3");
var modalImg3 = document.getElementById("imggamemode3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
}

var span3 = document.getElementsByClassName("classmodal3")[0];

span3.onclick = function() {
  modal3.style.display = "none";
}

//Modal 4
var modal4 = document.getElementById("idmodal4");
var img4 = document.getElementById("gamemode4");
var modalImg4 = document.getElementById("imggamemode4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
}

var span4 = document.getElementsByClassName("classmodal4")[0];

span4.onclick = function() {
  modal4.style.display = "none";
}

// Modal 5
var modal5 = document.getElementById("idmodal5");
var img5 = document.getElementById("gamemode5");
var modalImg5 = document.getElementById("imggamemode5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
}

var span5 = document.getElementsByClassName("classmodal5")[0];

span5.onclick = function() {
  modal5.style.display = "none";
}



//top
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}