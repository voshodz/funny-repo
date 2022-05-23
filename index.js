console.log("hi");
let flag = false;

const mainImage = document.querySelector('.img-wrapper');
const body = document.querySelector('body');
//const mainImage = document.querySelectorAll('.img-wrapper');
body.style.backgroundColor = "rgb(222, 207, 207)";
//mainImage.style.width="300px";


const audio = new Audio();
function playAudio() {
  audio.src = './audio/eva.mp3';
  audio.currentTime = 0;
  audio.play();
  }
playAudio();
const Hi = () => {
  if(flag) {
    flag = false;
    mainImage.style.width="200px";
  } else {
    flag = true;
    mainImage.style.width="500px";
  }
}
setInterval(Hi, 3000);
