let fullimgbox =document.getElementById("fullimgbox");
let fullimg = document.getElementById("fullimg");
const email=document.querySelector(".email");
const feedback=document.querySelector(".feedback");
function openfullimg(picture){
    fullimgbox.style.display ="flex";
    fullimg.src= picture;
}
function closefullimg(){
    fullimgbox.style.display ="none"; 
}
function myfunction(){
let fullname = document.querySelector("#fullname");
let message = document.querySelector("#message");

message.innerHTML = "thank you for your feedback, " + fullname.value;"!!!"
}
