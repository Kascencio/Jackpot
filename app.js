const Images = [
  { image: "images/SevenCard.jpg", point: 100 },
  { image: "images/Diamond.jpg",   point: 90 },
  { image: "images/Cherries.png",  point: 40 },
  { image: "images/Apple.jpg",     point: 30 },
  { image: "images/Fresa.png",     point: 20 },
];
const imgLayer = ["/images/layer.jpg"];
const imgReplaceOne = document.getElementById("cardOne");
const imgReplaceTwo = document.getElementById("cardTwo");
const imgReplaceThree = document.getElementById("cardThree");
const button = document.getElementById("button");
const scoreAdd = document.getElementById('score');
const moneyAdd = document.getElementById('money');

let totalScore = 0;
let money = 100;
function replaceImg() {
  var randomIndices = [];
  var score = [];
  for (var i = 0; i < 3; i++) {
    var numRandom = Math.floor(Math.random() * Images.length);
    randomIndices.push(numRandom);
    score.push(Images[numRandom].point);
    totalScore += Images[numRandom].point;
  }
  money= money - 10;
  scoreAdd.innerHTML = totalScore;
  moneyAdd.innerHTML = '$' + money;
  imgReplaceOne.src = Images[randomIndices[0]].image;
  imgReplaceTwo.src = Images[randomIndices[1]].image;
  imgReplaceThree.src = Images[randomIndices[2]].image;

  if(randomIndices[0] === randomIndices[1] && randomIndices[1] === randomIndices[1]){
    setTimeout(function () {
      imgReplaceOne.src = imgLayer[0];
      imgReplaceTwo.src = imgLayer[0];
      imgReplaceThree.src = imgLayer[0];
    }, 7200);
  }else{  setTimeout(function () {
    imgReplaceOne.src = imgLayer[0];
    imgReplaceTwo.src = imgLayer[0];
    imgReplaceThree.src = imgLayer[0];
  }, 1000);}

  if(money === 0){
    alert('Game Over');
    button.disabled = true;
  }

}
button.addEventListener("click", replaceImg);
