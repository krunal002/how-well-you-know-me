let read = require("readline-sync");

//welcome note
console.log("How Well You Know Me!")
let user = read.question("Enter your user name - ");
console.log("welcome " + user + " to the K-code\n");

//questions for marvel comic
//array for question using objects
let que1 = [
  {
    Q: "\n1. Which is my favorite drink? \n 1.maza\n 2.coco-cola\n 3.sprite\n 4.limka\n \n Enter number between 1-4 \n-->",
    A: "1"
  },
  {
    Q: "2. where I studied? \n 1.jvv\n 2.ashok\n 3.nutan\n 4.aadarsh\n \n Enter number between 1-4 \n--> ",
    A: "1"
  },
  {
    Q: "3. Who is my favorite? \n 1.salman\n 2.tiger\n 3.hritik\n 4.srk\n \n Enter number between 1-4 \n--> ",
    A: "3"
  },
  {
    Q: "4. The mobile I have- \n 1.iphone\n 2.samsung\n 3.xiaomi\n 4.nokia\n \n Enter number between 1-4 \n--> ",
    A: "3"
  },
  {
    Q: "5. Where I prefer to go? \n 1.hills\n 2.lake\n 3.farm\n 4.forest\n \n Enter number between 1-4 \n--> ",
    A: "1"
  }
]

let score = 0;
for (let i = 0; i < que1.length; i++) {
  let CQ = que1[i];
  game(CQ.Q, CQ.A);
}



//function
function game(question, answer) {
  let u_ans = read.question(question);
  if (u_ans === answer) {
    console.log("Right");
    score++;
  }
  else
    console.log("Wrong");

  console.log("current score is " + score);
  console.log("-------------------------------\n");
}

console.log("Thank You for playing " + user);
console.log("Your final score is " + score + "/5");
console.log("-------------------------------\n\n");
console.log("Top score's-");
console.log("Dipak : 4/5");
console.log("Rupali : 5/5");