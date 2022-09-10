/*MAIN PAGE*/

/*HIDE LIST*/
const gameListButton=document.querySelector("#gameListButton");
const gameList=document.querySelector("#gameList");

gameListButton.addEventListener("click", () =>  {

    
      if(gameList.style.display =="none"){
             gameList.style.display="block";
      }
      else {
        gameList.style.display="none";
      }
})

/*LOGIN */
const form=document.querySelector("#loginForm");
const fName=document.querySelector("#firstName");
const lName=document.querySelector("#lastName");
const uName=document.querySelector("#userName");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const Cpassword=document.querySelector("#Cpassword");
const date=document.querySelector("#date");

form.addEventListener("submit", (event)=>{


  validateForm();
  if(fName.value.trim()==''||lName.value.trim()=='' ||uName.value.trim()=='' ||email.value.trim()=='' || 
  password.value.trim()=='' ||Cpassword.value.trim()=='' ||date.value.trim()==''){
    event.preventDefault();
  }
});
function validateForm(){
  /*FIRST NAME */
if(fName.value.trim()==''){
  setError(fName, "First name required");
}
else if(fName.value.trim().length<5 || fName.value.trim().length>20){
  setError(fName, "Name must be between 5 and 20 characters");
}
else {
  setSuccess(fName);
}
/*LAST NAME */
if(lName.value.trim()==''){
  setError(lName, "Last name required");
}
else if(lName.value.trim().length<5 || lName.value.trim().length>20){
  setError(lName, "Name must be between 5 and 20 characters");
}
else{
  setSuccess(lName);

}
/*USER NAME */
if(uName.value.trim()==''){
  setError(uName, "User name required");
}
else if(uName.value.trim().length<5 || uName.value.trim().length>20){
  setError(uName, "User name must be between 5 and 20 characters");
}
else{
  setSuccess(uName);

}
/*EMAIL */
if(email.value.trim()==''){
  setError(email, "E-mail required");
}
else if(isEmailValid(email.value)){
  setSuccess(email);
}
else{
  setError(email, "E-mail is not valid!");
}

/*PASSWORD */
if(password.value.trim()==''){
  setError(password, "Password required");
}
else if(password.value.trim().length<8 || password.value.trim().length>20){
  setError(password, "Password must be between 6 and 20 characters");
}
else{
  setSuccess(password);

}


/*CONFIRM PASSWORD */
if(Cpassword.value.trim()==''){
  setError(Cpassword, "Password required");
}
else if(Cpassword.value != password.value){
  setError(Cpassword, "Passwords do not match");
}
else{
  setSuccess(Cpassword);

}
/*DATE */
if(date.value.trim()==''){
  setError(date, "Birth date required");

}
else {
  setSuccess(date);
}
}
function visPassword() {
  var visPas = document.getElementById("password");
  if (visPas.type === "password") {
    visPas.type = "text";
  } else {
    visPas.type = "password";

  }
 var visPas1 = document.getElementById("Cpassword");
  if (visPas1.type === "password") {
    visPas1.type = "text";
  } else {
    visPas1.type = "password";
  }
}


function setError(element,errorMessage){
  const parent=element.parentElement;
  if(parent.classList.contains("success")){
   parent.classList.remove("success");
 }
  parent.classList.add("error");
  const paragraph= parent.querySelector("p");
  paragraph.textContent=errorMessage;
 }

function setSuccess(element){
  const parent=element.parentElement;
  if(parent.classList.contains("error")){
    parent.classList.remove("error");
  }
  parent.classList.add("success");
  
}

function isEmailValid(email){
  const reg =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  return reg.test(email);
}





/*document.querySelector(".btn").addEventListener("submit", ()=>{
          
         
        
});
document.getElementById("subButton").onclick = function(){
 let uName= document.getElementById("textBox3").value;
}*/


      



/*CARD SHUFFLE*/
document.getElementById("cardButton").onclick = function(){
  let cards=["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
  shuffle(cards);

cards.forEach(card =>document.getElementById("cardLabel").innerHTML=cards);

  function shuffle(array){
    let currentIndex=array.length;

    while(currentIndex !=0){
      let randomIndex=Math.floor(Math.random()*array.length);
      currentIndex -=1;
      let temp=array[currentIndex];
      array[currentIndex]=array[randomIndex];
      array[randomIndex]=temp;
      
    }
    
      return array;
      
  }
  document.getElementById("cardLabel").innerHTML;
}

/*GROCERY CART*/
  const store=new Map([
     ["apple", 150],
     ["banana", 180],
     ["kiwi", 300]
  ]);

  let sCart=0;
  
  sCart += store.get("apple");
  sCart += store.get("banana");
  sCart += store.get("kiwi");

  store.set("orange", 100);
  sCart +=store.get("orange");

  console.log(store);
console.log(store.size);

store.forEach((value,key) => console.log(`${key} ${value}`));

/*NUMBER RANDOMIZER*/

document.getElementById("guessButton").onclick = function(){

  const broj = Math.floor(Math.random()*150+1);
  document.getElementById("guessLabel").innerHTML=broj;

  /*if (broj >=0 && broj <=9){
   document.getElementById("guessLabel").innerHTML="Number is in single digits";
  }
  else if(broj>=10 && broj<=99){
    document.getElementById("guessLabel").innerHTML="Number is in double digits";
  }
  else {
    document.getElementById("guessLabel").innerHTML="Number is in triple digits";
  }*/

}

/*CAR CLASSES*/
class Car {
    model(){
      console.log(`car model is ${this.name}`);
    }
    year(){
      console.log(`car year is 2010`);

    }
}

class Toyota extends Car{
  name="Toyota";
  
}
class Folkswagen extends Car{
  name="Folkswagen";
  
}

class Audi extends Car{
  name="Audi";
  
}

class KIA extends Car{
  name="KIA";
  
}
const toyota = new Toyota();
const fw= new Folkswagen();
const audi=new Audi();
const kia= new KIA();

toyota.model();
fw.year();
audi.model();
kia.year();

/*MOBILE BOX*/
const myDiv= document.getElementById("aniDiv");
window.addEventListener("keydown", move);
let x=0;
let y=0;

function move (event){
  switch(event.key){
    case "ArrowDown":
      y+=5;
       myDiv.style.top=y+"px";
       break;
       case "ArrowUp":
      y-=5;
       myDiv.style.top=y+"px";
       break;
       case "ArrowRight":
      x+=5;
       myDiv.style.left=x+"px";
       break;
       case "ArrowLeft":
      x-=5;
       myDiv.style.left=x+"px";
       break;
  }
}
window.addEventListener( "keydown", (e) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
        e.code
      )
    ) {
      e.preventDefault();
    }
  },
  false
);
/*NAMING*/
let a="MemberBerry4";
  if(a.length <=3){
    console.log("Name is too short!");
  }
  else if(a.length >20) {
       console.log("Name is too long!");
  }
  else {
    console.log(`Welcome ${a}`);
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




