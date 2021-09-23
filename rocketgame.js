var character=document.querySelector("#character");
var over=document.querySelector(".over");
var score=document.querySelector("#score span");
var gam=document.querySelector(".edit");
var scor=document.querySelector("#score");

 function moveLeft(){
   let left=
   parseInt(window.getComputedStyle(character).getPropertyValue("left"));
   left-=100;
   if(left>=0){
   character.style.left=left+"px";
   }
 }

 function moveRight(){
   let left=
   parseInt(window.getComputedStyle(character).getPropertyValue("left"));
   left+=100;
   if(left<300){
   character.style.left=left+"px";
    }
 }

 document.addEventListener("keydown",event=>{
 	if(event.keyCode=="37"){moveLeft();}
 	if(event.keyCode=="39"){moveRight();}
 });
var counter=0;
var block=document.querySelector(".block");
block.addEventListener("animationiteration",()=>{
	var random= Math.floor(Math.random()*3);
	left=random*100;
	block.style.left=left+"px";
	counter++;
	score.textContent = counter;
});

setInterval(function(){
    var characterLeft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft==blockLeft&&blockTop<500&&blockTop>400){
    	// alert("Game Over.Score: "+counter);
    	block.style.animation="none";
      over.style.display="block";
      character.style.display="none";
      gam.style.background="#1d1135";
      scor.style.background="#1d1135";


    }
},1);

document.querySelector("#left").addEventListener("touchstart",moveLeft());
document.querySelector("#right").addEventListener("touchstart",moveRight());

// var button=document.querySelector("button");

// button.addEventListener("click",function(){
// 	play_again();
// });

// function play_again(){
// 	score.textContent=0;
// 	counter=0;
// 	block.style.animation="";
// 	character.style.left="100px";
// }


function myButton(){
	location.reload();
}