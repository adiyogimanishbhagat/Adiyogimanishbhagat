// Dark Mode

const darkBtn = document.getElementById("darkModeToggle");

if(darkBtn){

darkBtn.onclick = function(){

document.body.classList.toggle("dark-mode");

};

}

// Back To Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(topBtn){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

};

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// WhatsApp Booking

function bookService(service){

let name=prompt("Enter Your Name");

if(name==null||name=="") return;

let phone=prompt("Enter Mobile Number");

if(phone==null||phone=="") return;

let url="https://wa.me/918804828088?text="+
