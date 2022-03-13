// The below code returns one of five madlibs with user entered options embedded. The user is prompted for a word type which is embedded in the return string.

//Below are the initial global variables in an object. The inital values are important because they form a part of the prompt for user input. This object is never changed.
let variableObj = {
  boyName1: "a boy's name",
  boyName2: "another boy's name",
  vegetable1: "a vegetable",
  teacherName: "a teacher's name",
  girlName1: "a girl's name",
  vegetable2: "another vegetable",
  vegetable3: "another vegetable",
  adjective: "an adjective beginning with a vowel",
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
//Below are the madlib stories. they containt template literals however you will notice that they are not surrounded by backticks. A function later on will do this for us but it is important for now that we don't include the backticks because this would case it to run on declaration.
const madLibs = [
  {madLib: "Once upon a time there was a little boy named ${this.boyName1}. He was not like all the other children, because he had a very big secret. Everyday he went to school hoping no one had discovered the truth. You see ${this.boyName1}'s parents were really ${this.vegetable1}s. How he turned out to be a normal boy, he didn't know. It was report card time, the trickiest time of the year, because that was when the teachers usually wanted to meet all of the students' parents. Boy always did his best in school so that his parents wouldn't have to meet his teacher. \nThis year was no exception, except that ${this.teacherName} always wanted to meet everyone's parents. Sure enough, at the bottom of his report card, an interview time had been scheduled. Boy was devastated! How would he explain? \nWhen he brought his report card home, his parents were excited. Finally they would get to meet one of ${this.boyName1}'s teachers. That evening ${this.boyName1} and his parents walked to the school. All the while ${this.boyName1} was dying inside. How, oh how, would he explain!? Hey, wait a minute! When he looked around he saw ${this.girlName1}'s name, the most popular girl in class and her parents were ${this.vegetable2} and walking towards the gym was ${this.boyName2} and his parents were ${this.vegetable3}. \nWow, what a relief, Boy wasn't so different after all!"},
  {madLib: "Once there was an ${this.adjective} girl called ${this.girlName1}. She was ${this.number} years old. She was so full of ${this.emotion} that birds quieted down when she sang. Her mum loved her so much.\nOne day she met a boy named ${this.boyName1}. She lived in ${this.city}. One day she went down to the ${this.typeTree} tree in her garden and made a wish. Her mum had a baby and named her ${this.girlName1}. Her wish came true! "},
  {madLib: "It was a hot day. In fact it was so hot you could have cooked ${this.foodEndS} on the sidewalk. Squigly sat on his front porch trying to eat his ${this.coldFood} before it melted.\nJust as Squigly was about to go inside, he saw ${this.boyName1} coming down the street. ${this.boyName1} was skipping so speed that Squigly was sure ${this.boyName1} would faint from the heat. When ${this.boyName1} reached his front porch, Squigly noticed that ${this.boyName1} wasn't even sweating.\n \"How can you not be hot?\" asked Squigly, wiping the sweat from his forehead. \n\"Hot, I'm not hot, I'm wearing my invention\" said ${this.boyName1}.\n\"What kind of invention is that?\" asked Squigly.\n\"Frozen ${this.clothesArticle} of course, I heard it was going to be hot today so I just put my ${this.clothesArticle} in the freezer last night and today I feel great! It really works, you should try it.\""},
  {madLib: "There once was a ${this.vegetable1} in Peru \nWho dreamed he was ${this.verbPresent} his shoe\nHe ${this.verbPast} with a fright\nAt ${this.time} that night\nAnd saw that his dream had come true. "}, 
  {madLib: "Once ${this.girlName1} was listening to ${this.radioStation} when she heard that ${this.popStar} would be coming to ${this.placeBeginThe} but she didn't have any money to go and see ${this.popStar}.\nSo ${this.girlName1} asked her mom for ideas on how to make some money. Her mom suggested that she should wash people's cars and have a garage sale to get rid of some of her old toys. \n${this.girlName1} did these things and she managed to raise £${this.number} and got to go and see ${this.popStar} in the end. "}
]
// this imports prompt-sync which allows us to ask for user input on the command line.
const prompt = require('prompt-sync')({sigint: true});

// Below is a simple random number generator
function randNum(uptoNum) {
  return Math.floor(Math.random() * uptoNum);
}
// The below builds on the random number generator and returns one of the madlibs from the madlib array.
function getRandomMadLib(madLibs) {
  return madLibs[randNum(5)].madLib;
}
//The below function gets an array of all of the template literal expressions within the randomly generated madlib.
function getVariableArr(madLib) {
  let myRegex = /(?<=\${this.)\w+/gi; //This regex captures the word directly after the ${this. part
  let returnVars = madLib.match(myRegex);
  return returnVars.filter((item, index) => returnVars.indexOf(item) === index); // this filters out any duplicates
}
// The below prompts for user input to set the expressions for our generated madlib. It returns an array of expression - input pairs.
function setVariables(variableArr, variableObj) {
  retObj = {}
  for (let [key, value] of Object.entries(variableObj)) {
    if (variableArr.includes(key)) {
      retObj[key] = prompt(`Enter ${value}: `);
    } 
  }
  return retObj;
}

// The below code transforms our madLib into a template literal in which our user generated responses can be input.
const fillTemplate = function(templateString, templateVars){
  return new Function("return `" + templateString + "`;").call(templateVars);
}

//Here we have our function which brings together all of the above funcionality and returns a completed madlib.
function returnMadLib(madLibs, variableObj) {
  let randMadLib =  getRandomMadLib(madLibs);
  let variableArr = getVariableArr(randMadLib)
  let userVariableObj =  setVariables(variableArr, variableObj)
  let retMadLib = fillTemplate(randMadLib, userVariableObj)
  return retMadLib;
 }
console.log(returnMadLib(madLibs, variableObj)); 
