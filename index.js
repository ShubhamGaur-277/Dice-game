document.querySelector("button").addEventListener("click", function () {
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    console.log(randomNumber1);

    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;


    var imgList = document.querySelectorAll("img");


    imgList[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
    imgList[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw";
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!!";
    }

    else {
        document.querySelector("h1").innerHTML = "🚩Player 2 wins!!";
    }
})
