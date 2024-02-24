
const Images = [
  { image: "https://ik.imagekit.io/keaf/Jackpot/SevenCard.jpg?updatedAt=1708755888342", point: 100 },
  { image: "https://ik.imagekit.io/keaf/Jackpot/Diamond.jpg?updatedAt=1708755887856",   point: 90 },
  { image: "https://ik.imagekit.io/keaf/Jackpot/Cherries.png?updatedAt=1708755888345",  point: 40 },
  { image: "https://ik.imagekit.io/keaf/Jackpot/Apple.jpg?updatedAt=1708755887556",     point: 30 },
  { image: "https://ik.imagekit.io/keaf/Jackpot/Fresa.png?updatedAt=1708755888083",     point: 20 },
];
const imgLayer = ["https://ik.imagekit.io/keaf/Jackpot/layer.jpg?updatedAt=1708755888116"];
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
