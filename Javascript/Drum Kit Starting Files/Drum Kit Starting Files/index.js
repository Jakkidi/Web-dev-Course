var noofDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noofDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
var sounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/kick-bass.mp3",
  l: "sounds/crash.mp3"
};

function handleClick(){
  if (sounds.hasOwnProperty(this.innerText))
  {
    (new Audio(sounds[this.innerText])).play();
    buttonAnimation(this.innerText);

  }
}
document.addEventListener("keydown",handlei);
function handlei(Event)
{
  if (sounds.hasOwnProperty(Event.key))
  {
  (new Audio(sounds[Event.key])).play();
  buttonAnimation(Event.key);
}
}
function buttonAnimation(key)
{
var activeButton=document.querySelector("."+key);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
