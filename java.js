var randomNumber = Math.floor((Math.random() * 6) + 1); //create a random number

var randomDiceImage = "dice" + randomNumber +".png"; //change the image to a random number

var randomImageSource = "images/" + randomDiceImage; //attach it to the source file for images

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//  Conditional statement to change the display of h1 element.

if (randomNumber > randomNumber2)  {
    document.querySelector("h1").innerHTML = "🚩Player 1 Won";
}else if(randomNumber < randomNumber2) {

    document.querySelector("h1").innerHTML = "🚩Player 2 Won";

}else {
    document.querySelector("h1").innerHTML = "🚩Draw🚩"
}

function checkCookies()  {
    var text = ""
    if (navigator.cookieEnabled == true) {
        text = "Cookies are Enabled";
    }else {
        text = "Cookies are not Enabled";
    }
    document.getElementById("demo").innerHTML = text

}


// function checkCookies() {
//   var text = " ";
//   if (navigator.cookieEnabled == true) {
//     text = "Cookies are Enabled";
   
//   }else {
//      text = "Cookies are not Enabled";
//   }
 
//   document.getElementById("demo").innerHTML = text
 
// }


