
let variableObj = {
  boyName1: "a boy's name",
  boyName2: "another boy's name",
  vegetable1: "a vegetable",
  teacherName: "a teacher's name",
  girlName1: "a girl's name",
  vegetable2: "another vegetable",
  vegetable3: "another vegetable",
  adjective: "an adjective",
  number: "a number",
  emotion: "an emotion",
  city: "a city name",
  typeTree: "a type of tree",
  foodEndS:  "a food ending with S",
  coldFood: "a cold food",
  clothesArticle: "an article of clothing",
  verbPresent: "a present verb",
  verbPast: "a past verb",
  radioStation: "a radio station name",
  time: "a time",
  popStar: "a pop star name",
  placeBeginThe: "a place begining with 'The'"
} 

const madLibs = [
  {madLib: "Once upon a time there was a little boy named ${this.boyName1}. He was not like all the other children, because he had a very big secret. Everyday he went to school hoping no one had discovered the truth. You see ${this.boyName1}'s parents were really ${this.vegetable1}s. How he turned out to be a normal boy, he didn't know. It was report card time, the trickiest time of the year, because that was when the teachers usually wanted to meet all of the students' parents. Boy always did his best in school so that his parents wouldn't have to meet his teacher. \nThis year was no exception, except that ${this.teacherName} always wanted to meet everyone's parents. Sure enough, at the bottom of his report card, an interview time had been scheduled. Boy was devastated! How would he explain? \nWhen he brought his report card home, his parents were excited. Finally they would get to meet one of ${this.boyName1}'s teachers. That evening ${this.boyName1} and his parents walked to the school. All the while ${this.boyName1} was dying inside. How, oh how, would he explain!? Hey, wait a minute! When he looked around he saw ${this.girlName1}'s name, the most popular girl in class and her parents were ${this.vegetable2} and walking towards the gym was ${this.boyName2} and his parents were ${this.vegetable3}. \nWow, what a relief, Boy wasn't so different after all!",
  vars: [this.boyName1, this.boyName2, this.teacherName, this.girlName1, this.vegetable1, this.vegetable2, this.vegetable3]},
  {madLib: "Once there was an ${this.adjective} girl called ${this.girlName1}. She was ${this.number} years old. She was so ${this.emotion} that birds quieted down when she sang. Her mum loved her so much.\nOne day she met a boy named ${this.boyName1}. She lived in ${this.city}. One day she went down to the ${this.typeTree} tree in her garden and made a wish. Her mum had a baby and named her ${this.girlName1}. Her wish came true! ",
  vars: [this.adjective, this.girlName1, this.number, this.emotion, this.typeTree, this.city]},
  {madLib: "It was a hot day. In fact it was so hot you could have cooked ${this.foodEndS} on the sidewalk. Squigly sat on his front porch trying to eat his ${this.coldFood} before it melted.\nJust as Squigly was about to go inside, he saw ${this.boyName1} coming down the street. ${this.boyName1} was skipping so speed that Squigly was sure ${this.boyName1} would faint from the heat. When ${this.boyName1} reached his front porch, Squigly noticed that ${this.boyName1} wasn't even sweating.\n \"How can you not be hot?\" asked Squigly, wiping the sweat from his forehead. \n\"Hot, I'm not hot, I'm wearing my invention\" said ${this.boyName1}.\n\"What kind of invention is that?\" asked Squigly.\n\"Frozen ${this.clothesArticle} of course, I heard it was going to be hot today so I just put my ${this.clothesArticle} in the freezer last night and today I feel great! It really works, you should try it.\"",
  vars: [this.foodEndS, this.coldFood, this.boyName1, this.clothesArticle]}, 
  {madLib: "There once was a ${this.vegetable1} in Peru \nWho dreamed he was ${this.verbPresent} his shoe\nHe ${this.verbPast} with a fright\nAt ${this.time} that night\nAnd saw that his dream had come true. ", 
  vars: [this.vegetable1, this.verbPresent, this.verbPast, this.time]},
  {madLib: "Once ${this.girlName1} was listening to ${this.radioStation} when she heard that ${this.popStar} would be coming to ${this.placeBeginThe} but she didn't have any money to go and see ${this.popStar}.\nSo ${this.girlName1} asked her mom for ideas on how to make some money. Her mom suggested that she should wash people's cars and have a garage sale to get rid of some of her old toys. \n${this.girlName1} did these things and she managed to raise £${this.number} and got to go and see ${this.popStar} in the end. ",
  vars: [this.girlName1, this.radioStation, this.popStar, this.placeBeginThe, this.number]}
]

const prompt = require('prompt-sync')({sigint: true});

function randNum(uptoNum) {
  return Math.floor(Math.random() * uptoNum);
}

function getRandomMadLib(madLibs) {
  return madLibs[randNum(5)];
}

function getVariableArr(madLib) {
  return madLib.vars;
}
const fillTemplate = function(templateString, templateVars){
  return new Function("return `"+templateString +"`;").call(templateVars);
}
let newCopy = madLibs[0].madLib;

console.log(fillTemplate(newCopy, variableObj));
function setVariables(variableArr, variableObj) {
  let localVariables = variableArr.slice()
  for (let i of localVariables) {
    for (key in variableObj) {
      if (key.hasOwnProperty(localVariables[i])) {
        localVariables[i] = variableObj[value];
      }
    }
  }
  return localVariables;
}
 function returnMadLib (madLibs, variableObj) {
  let randMadLib =  getRandomMadLib(madLibs);
  let variableArr = getVariableArr(randMadLib)
  return setVariables(variableArr, variableObj)
 }
console.log(returnMadLib(madLibs, variableObj)); 