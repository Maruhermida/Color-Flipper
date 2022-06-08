const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // conseguir un num random entre o y 3
const randomNumber = 2;
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

