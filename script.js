const array = require("./script.js");

function random_item(q)
{

return q[Math.floor(Math.random()*q.length)];

}
let q = [
  "Don't cry because it's over, smile because it happened.",
  "Be yourself; everyone else is already taken.",
  "Be the change that you wish to see in the world.",
  "No one can make you feel inferior without your consent.",
  "You only live once, but if you do it right, once is enough."
  ];

console.log(random_item(q));
module.exports.random_item = random_item;



//this will console.log(everything)
// for (let i = 0; i < q.length; i++) {
//     console.log(q[i]);
//   }
