const prompt = require('prompt-sync')({sigint: true});

function randNum(uptoNum) {
  return Math.floor(Math.random() * uptoNum);
}

function getMadLib(arrMad) {
  return arrMad[randNum(5)];
}


/*let boyName1 = 'Fred';
let vegetable1 = 'Fred';
let teacherName = 'Fred';
let girlName1 = 'Fred';
let vegetable2 = 'Fred';
let vegetable3 = 'Fred';
let boyName2 = 'Fred';
let adjective = 'Fred';
let number = 'Fred';
let emotion = 'Fred';
let city = 'Fred';
let typeTree = 'Fred';
let foodEndS = 'Fred';
let coldFood = 'Fred';
let clothesArticle = 'Fred';
let verbPresent = 'Fred';
let verbPast = 'Fred';
let radioStation = 'Fred';
let time = 'Fred';
let popStar = 'Fred';
let placeBeginThe = 'Fred';

let boyName1 = prompt("Enter a boy's name: ");
let vegetable1 = prompt("Enter a vegetable: ");
let teacherName = prompt("Enter a teacher's name: ");
let girlName1 = prompt("Enter a girl's name: ");
let vegetable2 = prompt("Enter a vegetable: ");
let vegetable3 = prompt("Enter a vegetable: ");
let boyName2 = prompt("Enter a boy's name: ");
let adjective = prompt("Enter an adjective: ");
let number = prompt("Enter a number: ");
let emotion = prompt("Enter an emotion");
let city = prompt("Enter a city name: ");
let typeTree = prompt("Enter a type of tree: ");
let foodEndS = prompt("Enter a food ending with S: ");
let coldFood = prompt("Enter a cold food: ");
let clothesArticle = prompt("Enter an article of clothing: ");
let verbPresent = prompt("Enter a present verb: ");
let verbPast = prompt("Enter a past verb");
let radioStation = prompt("Enter a radio station name: ");
let time = prompt("Enter a time: ");
let popStar = prompt("Enter a pop star name: ");
let placeBeginThe = prompt("Enter a place begining with 'The': ");
*/
const madLibs = [
  {madLib1: `Once upon a time there was a little boy named ${boyName1}. He was not like all the other children, because he had a very big secret. Everyday he went to school hoping no one had discovered the truth. You see ${boyName1}'s parents were really ${vegetable1}s. How he turned out to be a normal boy, he didn't know. It was report card time, the trickiest time of the year, because that was when the teachers usually wanted to meet all of the students' parents. Boy always did his best in school so that his parents wouldn't have to meet his teacher.
  This year was no exception, except that ${teacherName} always wanted to meet everyone's parents. Sure enough, at the bottom of his report card, an interview time had been scheduled. Boy was devastated! How would he explain?
  When he brought his report card home, his parents were excited. Finally they would get to meet one of ${boyName1}'s teachers. That evening ${boyName1} and his parents walked to the school. All the while ${boyName1} was dying inside. How, oh how, would he explain!? Hey, wait a minute! When he looked around he saw ${girlName1}'s name, the most popular girl in class and her parents were ${vegetable2} and walking towards the gym was ${boyName2}e and his parents were ${vegetable3}.
  Wow, what a relief, Boy wasn't so different after all!`,
  vars: [boyName1, boyName2, teacherName, girlName1, vegetable1, vegetable2, vegetable3]},
  {madLib2: `Once there was an ${adjective} girl called ${girlName1}. She was ${number} years old. She was so ${emotion} that birds quieted down when she sang. Her mum loved her so much.
  One day she met a boy named ${boyName1}. She lived in ${city}. One day she went down to the ${typeTree} tree in her garden and made a wish. Her mum had a baby and named her ${girlName1}. Her wish came true! `,
  vars: [adjective, girlName1, number, emotion, typeTree, city]},
  {madLib3: `It was a hot day. In fact it was so hot you could have cooked ${foodEndS} on the sidewalk. Squigly sat on his front porch trying to eat his ${coldFood} before it melted.
  Just as Squigly was about to go inside, he saw ${boyName1} coming down the street. ${boyName1} was skipping so speed that Squigly was sure ${boyName1} would faint from the heat. When ${boyName1} reached his front porch, Squigly noticed that ${boyName1} wasn't even sweating.
  "How can you not be hot?" asked Squigly, wiping the sweat from his forehead.
  "Hot, I'm not hot, I'm wearing my invention" said ${boyName1}.
  "What kind of invention is that?" asked Squigly.
  "Frozen ${clothesArticle} of course, I heard it was going to be hot today so I just put my ${clothesArticle} in the freezer last night and today I feel great! It really works, you should try it.`,
  vars: foodEndS, coldFood, boyName1, clothesArticle}, 
  {madLib4: `There once was a ${vegetable1} in Peru
  Who dreamed he was ${verbPresent} his shoe
  He ${verbPast} with a fright
  At ${time} that night
  And saw that his dream had come true. `, 
  vars: vegetable1, verbPresent, verbPast, time},
  {madLib5: `Once ${girlName1} was listening to ${radioStation} when she heard that ${popStar} would be coming to ${placeBeginThe} but she didn't have any money to go and see ${popStar}.
  So ${girlName1} asked her mom for ideas on how to make some money. Her mom suggested that she should wash people's cars and have a garage sale to get rid of some of her old toys. 
  ${girlName1} did these things and she managed to raise £${number} and got to go and see ${popStar} in the end. `,
  vars: girlName1, radioStation, popStar, placeBeginThe, number}
]
