let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1)

let randomDiceImg1 = "dice" + randomNumber1 + ".png";

let randomImage1 = "images/" + randomDiceImg1;

let image1 = document.querySelectorAll("img")[0];

let change1 = image1.setAttribute("src", randomImage1);

let randomDiceImg2 = "dice" + randomNumber2 + ".png"

let randomImage2 = "images/" + randomDiceImg2;

let image2 = document.querySelectorAll("img")[1];

let change2 = image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins Wuhuu"
} else if(randomImage2 > randomImage1) {
    document.querySelector("h1").innerHTML = "Player 2 wins Wayy"
} else {
    document.querySelector("h1").innerHTML = "Its a draw, try again by refreshing the page"
}