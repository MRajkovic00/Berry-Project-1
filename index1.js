

/*BOX ANIMATION*/
let myButton=document.getElementById("aniButton");
  const myAni=document.getElementById("animationDiv");
  
  document.getElementById("aniButton").onclick = function () 
  { 
    myButton=addEventListener("click",begin);
  function begin(){
      let timerId= null;
      let degrees= 0;
      let x=0;
      let y=0;
      timerId= setInterval(frame, 5);
  
      function frame (){
          if(x>=500 || y>=500){
              clearInterval(timerId);
          }
          else {
              x+=1;
              y+=1;
              myAni.style.left=y +"px";
              myAni.style.top=x +"px";
                 degrees +=5;
                 myAni.style.transform="rotateZ("+degrees+"deg";
  
          }
  
      }
  }
   }

/*SLIDESHOW*/
  var i=0;
  var images=[];
  var time=3000;

  images[0]='image1.jpg';
  images[1]='image2.jpg';
  images[2]='image3.jpg';
  images[3]='image4.jpg';

  function changeImg(){
    document.slide.src=images[i];

    if(i<images.length -1){
      i+=1;
    }
    else{
       i=0;
    }
      setTimeout("changeImg()",time);
      window.onload= changeImg;
  }

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

/*MEME GENERATOR */
/*const memeButton=document.querySelector("memeButton");
const mainImage=document.querySelector("#mainImage");

memeButton.addEventListener("click", () =>  {

    
      if(mainImage.style.display =="none"){
        mainImage.style.display="block";
      }
      else {
        mainImage.style.display="none";
      }*/

function getRandomImage(){
  var imgArray = new Array();


  imgArray[0] = 'image11.jpg';
  
  
  imgArray[1]= 'image12.jpg';
  
  
  imgArray[2]= 'image12.jpg';
  
  
  imgArray[3]= 'image14.jpg';
  
  
  imgArray[4] = 'image15.jpg';
  
  
  imgArray[5] = 'image16.jpg';
  
  
  imgArray[6] = 'image17.jpg';
  
  
  imgArray[7] = 'image18.jpg';

  
  imgArray[8] = 'image19.jpg';
  
  
  imgArray[9] = 'image20.jpg';
  
    var number = Math.floor(Math.random()*imgArray.length);  
    return document.getElementById("memeDiv").innerHTML = '<img src="'+imgArray[number]+'" />'; 
}

