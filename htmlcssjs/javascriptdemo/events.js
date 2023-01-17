let num = 0;
function increment(){
  const countElem = document.getElementById('count');
  countElem.innerText = ++num;
}

function decrement(){
  const countElem = document.getElementById('count');
  countElem.innerText = --num;
}

function reset(){
  const countElem = document.getElementById('count');
  num = 0;
  countElem.innerText = num;
}

function modifyNum(number){
  const countElem = document.getElementById('count');
  num += number;
  countElem.innerText = num;
}

function fizzbuzz(){
  
  //closure, creating private scope by enclosing a function within another funciton
  // this is equivalent to setting a helper method private in OOP languages.
  function fizzbuzzDivisible(num){
    let result = ""
    if (num % 15 === 0){
      result = result + "fizzbuzz";
    }
    else if (num % 5 === 0){
      result = result + "buzz";
    }
    else if (num% 3 === 0){
      result = result + "fizz";
    }
    else{
      result = result + num;
    }
    console.log(result);
    return result;
  }

  let fbInput = document.querySelector('#fizzbuzz-input').value; // this is how you get the value of an input element.
  
  //you'll want to look up
  //javascript loops (either while, or for will work well here)
  //conditional (if, elseif, else) or switch statements
  //modulo operator will also come in handy here.

  //for loop
  // we are initializing our counter variable(i) to 1, 
  // while it is less than or equal to userInput value, 
  // we'll continue looping.
  for (let i = 1; i <= fbInput; i++){
    //core logic uses the modulo operator (%)
    document.getElementById("fizzbuzz_output").innerHTML += fizzbuzzDivisible(i);
  }
}

function fizzbuzzTable(event){
  
  // console.log(event);
  //prevents the default behavior from happening (aka reefresh)
  // event.preventDefault();

  //prevents event from bubbling up to its parents
  // event.stopPropagation();

  //closure, creating a private scope by enclossing a function within another function
  // this is equivalent to setting a helper method to private in OOP languages.
  function fizzbuzzDivisible(num){
    let result = ""
    if (num % 15 === 0){
      result = result + "fizzbuzz";
    }
    else if (num % 5 === 0){
      result = result + "buzz";
    }
    else if (num% 3 === 0){
      result = result + "fizz";
    }
    else{
      result = result + num;
    }
    console.log(result);
    return result;
  }

  const fbInput = document.querySelector('#fizzbuzz-input').value;
  // adding tbody selects the tbody element within the table.
  const outputTable = document.querySelector('#fizzbuzz_output');

  if (fbInput && fbInput >= 1 && fbInput <= 100){
    //for adding rows/columns/etc. anything table, can be found here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement
    if (outputTable){
      for(let i = 1; i <= fbInput; i++){
        const result = fizzbuzzDivisible(i);

        //gives me a new <tr> element
        const newRow = outputTable.insertRow();

        //gives me a new <td> element within the <tr> we just created.
        const firstCell = newRow.insertCell();
        firstCell.innerText = i;

        const outputCell = newRow.insertCell();
        outputCell.innerText = fizzbuzzDivisible(i);
      }
    }
  }
}

function resetTable(){
  let outputTable = document.querySelector('#fizzbuzz_output');
  while (outputTable.hasChildNodes()) {
    outputTable.removeChild(outputTable.lastChild);
  }
}

// function fizzbuzzDivisible(num){
//   let result = ""
//   if (num % 15 === 0){
//     result = result + "fizzbuzz";
//   }
//   else if (num % 5 === 0){
//     result = result + "buzz";
//   }
//   else if (num% 3 === 0){
//     result = result + "fizz";
//   }
//   else{
//     result = result + num;
//   }
//   console.log(result);
//   return result;
// }

// Functions Display -> CalculateManually used for Calculator
function display(val){
  //console.log("Inside of display function");
  const num = document.getElementById("result");
  num.value += val;
}

function reset(){
  // console.log("Inside of clear function");
  document.getElementById("result").value = "";
}

function calculator(val){
  // console.log("Inside of calculator function.")
  // Utilizing the key-value functionality of passing in an event
  if (val.key == '0' || val.key == '1' || val.key == '2' || val.key == '3' || val.key == '4' || val.key == '5' || val.key == '6' || val.key == '7' || val.key == '8' || val.key == '9' || val.key == '+' || val.key == '-' || val.key == '/' || val.key == '*'){
    document.getElementById("result").value += val.key;
  }
}

//function that does the calculation and returns result
//  Utilizes another JS script, which is MATHJS.
//  https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.5.0/math.js
function calculate(){
  let x = document.getElementById("result").value;
  let y = math.evaluate(x);
  document.getElementById("result").value = y;
}


// function calculateManually(){
//     let x = document.getElementById("result").value;
//     console.log(x);
//      //TODO: create a system that calculates manually based on the inputs - possibly use a new variable y?
//     if(y == '+'){ //Addition

//     }
//     else if(y == '-'){ //Subtraction 

//     }
//     else if(y == '*'){ //Multiplication
      
//     }
//     else{ //Division, as an else case.

//     }
// }

function changeImg(failures){
  console.log("Lives count is currently: " + failures);
  switch (failures){
    case 0:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_0.jpg";
      break;
    case 1:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_1.jpg";
      break;
    case 2:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_2.jpg";
      break;
    case 3:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_3.jpg";
      break;
    case 4:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_4.jpg";
      break;
    case 5:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_5.jpg";
      break;
    default:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_6.jpg";
      break;
  }
}

function changeImgDebug(val){
  console.log("Lives count is currently: " + val);
  switch (val){
    case 0:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_0.jpg";
      break;
    case 1:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_1.jpg";
      break;
    case 2:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_2.jpg";
      break;
    case 3:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_3.jpg";
      break;
    case 4:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_4.jpg";
      break;
    case 5:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_5.jpg";
      break;
    default:
      document.getElementById("hanged_man_img").src = "hangman_img_src/hanged_man_6.jpg";
      break;
  }
}


//Hangman Commands
let isRunning = 0;
let failCount = 0;
let failures = 0;

let chosen = new Array();
let chosen_index=0;
 
let guess = new Array();
let guess_index=0;

let index = 0;
let advising = 0;

function newWord(){
  console.log("In newWord()");
  if (!isRunning){
    failCount = 0; // resetting the fail counter
    changeImg(0);
    isRunning = 1; // sets it so that the program is still running, so a new word cannot be instantiated.
    document.getElementsByName("lives").innerText = failCount;
    document.getElementsByName("tried").innerText = "";
    document.getElementsByName("word").innerText = "";
    index = Math.round(Math.random()*854);
    chosen[0] = wordArr[index].charAt(0);
    chosen[1] = wordArr[index].charAt(wordArr[index].length-1);
    chosen_index=1;
    guess[0] = wordArr[index].charAt(0);
    guess[1] = wordArr[index].charAt(wordArr[index].length-1);
    guess_index=1;
    console.log("Random word selected, located at " + index + " and the word is: " + wordArr[index]);
    pickLetter();
  }  
  else{
    console.log("A word has already been selected");
  }
}

function pickLetter()
{
  let choice = "";
  let blank = 0;
 
  for (let i = 0; i < wordArr[index].length; i++)
  {
    let t = 0;
    for(j = 0; j <= chosen_index; j++) 
    if(wordArr[index].charAt(i) == chosen[j] || wordArr[index].charAt(i) == chosen[j].toLowerCase()){
      t = 1;
    }
    if (t) {
      choice += wordArr[index].charAt(i) + " ";
    }
    else 
    {
      choice += "_ ";
      blank = 1;
    }
  }   
 
  let w = document.getElementsByName("word").innerText 
  w = choice;
 
  if (!blank)
  {
    document.getElementsByName("tried").innerText = "CONGRATULATIONS";
    console.log("Congrats! You've won! The word was " + wordArr[index]);
    document.getElementsByName("score").value++;
    document.getElementsByName("score").innerHTML = document.getElementsByName("score");
    isRunning = 0; // sets the isRunning value to 0, since the game is over.
  }
} 

function seek(letter)
{
  if (!isRunning){
    console.log("Click START to play");
  }
  else
  {
    let t = 0;
    for (let i = 0; i <= guess_index; i++){
      if ((guess[i] == letter) || (guess[i] == letter.toLowerCase())){
        t=1;
      }
    }
 
    if (!t){
      document.getElementsByName("tried").value += letter + " ";
      guess_index++;
      guess[guess_index] = letter;
 
      for(let i = 0; i < wordArr[index].length; i++)
      if(wordArr[index].charAt(i) == letter || wordArr[index].charAt(i) == letter.toLowerCase()) {
        t = 1;
      }
      if(t){
        chosen_index++;
        chosen[chosen_index] = letter;
      }
      else {
        failCount++;
        changeImg(failCount);
      }
 
      document.getElementsByName("lives").value = failCount;
      if (failCount == 6) 
      {
        document.getElementsByName("tried").value = "You lose - Try again!";
        document.getElementsByName("word").innerText = wordArr[index];
        document.getElementsByName("score").value--;
        document.getElementsByName("score").innerText = document.getElementsByName("score");
        isRunning = 0; // game ends in a loss, reset the isRunning value
      }
      else pickLetter();
    }
    else {
      console.log("Letter " + letter + " has already been selected!"); // if the letter already has been chosen.
    }
  }
}


//LECTURE 1-11-2023
//different ways to create and declare functions.

//function declaration
function calculator(value){

}

function fnAsParameter(){}
//anonymous function assigned to a variable
const fn = function(fnAsParameter){
  fnAsParameter(); // can use a function itself as a parameter. Usually used in Asynchronous Programmimng. This is called a callback function.
}

//fn2 fvariable is pointing to a variable
const fn2 = calculator;
fn2();

//arrow function - mostly used.
// Can be used inside of HTML if you aren't doing anything complex.
const f3 = () => {

}

//IFFY if you want to run the function right away
// pretty handy for setup code
(function(vars){
  //function code goes here, you can declare it and run it all in one line.
})();

// parent element is reacting to events happening in children elements.
const parentOfBtns = (event) => {
  console.log(event);
  if(event.target.id === 'btn1'){
    console.log('btn 1 was clicked');
  }
  else if(event.target.id === 'btn2'){
    console.log('btn 2 was clicked');
  }
  else{
    console.log('btn 3 was clicked');
  }
}


//HANGMAN wordArr
let wordArr = new Array("", "able",
"about",
"account",
"acid",
"across",
"act",
"addition",
"adjustment",
"advertisement",
"after",
"again",
"against",
"agreement",
"air",
"all",
"almost",
"among",
"amount",
"amusement",
"and",
"angle",
"angry",
"animal",
"answer",
"ant",
"any",
"apparatus",
"apple",
"approval",
"arch",
"argument",
"arm",
"army",
"art",
"as",
"at",
"attack",
"attempt",
"attention",
"attraction",
"authority",
"automatic",
"awake",
"baby",
"back",
"bad",
"bag",
"balance",
"ball",
"band",
"base",
"basin",
"basket",
"bath",
"be",
"beautiful",
"because",
"bed",
"bee",
"before",
"behaviour",
"belief",
"bell",
"bent",
"berry",
"between",
"bird",
"birth",
"bit",
"bite",
"bitter",
"black",
"blade",
"blood",
"blow",
"blue",
"board",
"boat",
"body",
"boiling",
"bone",
"book",
"boot",
"bottle",
"box",
"boy",
"brain",
"brake",
"branch",
"brass",
"bread",
"breath",
"brick",
"bridge",
"bright",
"broken",
"brother",
"brown",
"brush",
"bucket",
"building",
"bulb",
"burn",
"burst",
"business",
"but",
"butter",
"button",
"by",
"cake",
"camera",
"canvas",
"card",
"care",
"carriage",
"cart",
"cat",
"cause",
"certain",
"chain",
"chalk",
"chance",
"change",
"cheap",
"cheese",
"chemical",
"chest",
"chief",
"chin",
"church",
"circle",
"clean",
"clear",
"clock",
"cloth",
"cloud",
"coal",
"coat",
"cold",
"collar",
"colour",
"comb",
"come",
"comfort",
"committee",
"common",
"company",
"comparison",
"competition",
"complete",
"complex",
"condition",
"connection",
"conscious",
"control",
"cook",
"copper",
"copy",
"cord",
"cork",
"cotton",
"cough",
"country",
"cover",
"cow",
"crack",
"credit",
"crime",
"cruel",
"crush",
"cry",
"cup",
"cup",
"current",
"curtain",
"curve",
"cushion",
"damage",
"danger",
"dark",
"daughter",
"day",
"dead",
"dear",
"death",
"debt",
"decision",
"deep",
"degree",
"delicate",
"dependent",
"design",
"desire",
"destruction",
"detail",
"development",
"different",
"digestion",
"direction",
"dirty",
"discovery",
"discussion",
"disease",
"disgust",
"distance",
"distribution",
"division",
"do",
"dog",
"door",
"doubt",
"down",
"drain",
"drawer",
"dress",
"drink",
"driving",
"drop",
"dry",
"dust",
"ear",
"early",
"earth",
"east",
"edge",
"education",
"effect",
"egg",
"elastic",
"electric",
"end",
"engine",
"enough",
"equal",
"error",
"even",
"event",
"ever",
"every",
"example",
"exchange",
"existence",
"expansion",
"experience",
"expert",
"eye",
"face",
"fact",
"fall",
"FALSE",
"family",
"far",
"farm",
"fat",
"father",
"fear",
"feather",
"feeble",
"feeling",
"female",
"fertile",
"fiction",
"field",
"fight",
"finger",
"fire",
"first",
"fish",
"fixed",
"flag",
"flame",
"flat",
"flight",
"floor",
"flower",
"fly",
"fold",
"food",
"foolish",
"foot",
"for",
"force",
"fork",
"form",
"forward",
"fowl",
"frame",
"free",
"frequent",
"friend",
"from",
"front",
"fruit",
"full",
"future",
"garden",
"general",
"get",
"girl",
"give",
"glass",
"glove",
"go",
"goat",
"gold",
"good",
"government",
"grain",
"grass",
"great",
"green",
"grey",
"grip",
"group",
"growth",
"guide",
"gun",
"hair",
"hammer",
"hand",
"hanging",
"happy",
"harbour",
"hard",
"harmony",
"hat",
"hate",
"have",
"he",
"head",
"healthy",
"hear",
"hearing",
"heart",
"heat",
"help",
"high",
"history",
"hole",
"hollow",
"hook",
"hope",
"horn",
"horse",
"hospital",
"hour",
"house",
"how",
"humour",
"I",
"ice",
"idea",
"if",
"ill",
"important",
"impulse",
"in",
"increase",
"industry",
"ink",
"insect",
"instrument",
"insurance",
"interest",
"invention",
"iron",
"island",
"jelly",
"jewel",
"join",
"journey",
"judge",
"jump",
"keep",
"kettle",
"key",
"kick",
"kind",
"kiss",
"knee",
"knife",
"knot",
"knowledge",
"land",
"language",
"last",
"late",
"laugh",
"law",
"lead",
"leaf",
"learning",
"leather",
"left",
"leg",
"let",
"letter",
"level",
"library",
"lift",
"light",
"like",
"limit",
"line",
"linen",
"lip",
"liquid",
"list",
"little",
"living",
"lock",
"long",
"look",
"loose",
"loss",
"loud",
"love",
"low",
"machine",
"make",
"male",
"man",
"manager",
"map",
"mark",
"market",
"married",
"mass",
"match",
"material",
"may",
"meal",
"measure",
"meat",
"medical",
"meeting",
"memory",
"metal",
"middle",
"military",
"milk",
"mind",
"mine",
"minute",
"mist",
"mixed",
"money",
"monkey",
"month",
"moon",
"morning",
"mother",
"motion",
"mountain",
"mouth",
"move",
"much",
"muscle",
"music",
"nail",
"name",
"narrow",
"nation",
"natural",
"near",
"necessary",
"neck",
"need",
"needle",
"nerve",
"net",
"new",
"news",
"night",
"no",
"noise",
"normal",
"north",
"nose",
"not",
"note",
"now",
"number",
"nut",
"observation",
"of",
"off",
"offer",
"office",
"oil",
"old",
"on",
"only",
"open",
"operation",
"opinion",
"opposite",
"or",
"orange",
"order",
"organization",
"ornament",
"other",
"out",
"oven",
"over",
"owner",
"page",
"pain",
"paint",
"paper",
"parallel",
"parcel",
"part",
"past",
"paste",
"payment",
"peace",
"pen",
"pencil",
"person",
"physical",
"picture",
"pig",
"pin",
"pipe",
"place",
"plane",
"plant",
"plate",
"play",
"please",
"pleasure",
"plough",
"pocket",
"point",
"poison",
"polish",
"political",
"poor",
"porter",
"position",
"possible",
"pot",
"potato",
"powder",
"power",
"present",
"price",
"print",
"prison",
"private",
"probable",
"process",
"produce",
"profit",
"property",
"prose",
"protest",
"public",
"pull",
"pump",
"punishment",
"purpose",
"push",
"put",
"quality",
"question",
"quick",
"quiet",
"quite",
"rail",
"rain",
"range",
"rat",
"rate",
"ray",
"reaction",
"reading",
"ready",
"reason",
"receipt",
"record",
"red",
"regret",
"regular",
"relation",
"religion",
"representative",
"request",
"respect",
"responsible",
"rest",
"reward",
"rhythm",
"rice",
"right",
"ring",
"river",
"road",
"rod",
"roll",
"roof",
"room",
"root",
"rough",
"round",
"rub",
"rule",
"run",
"sad",
"safe",
"sail",
"salt",
"same",
"sand",
"say",
"scale",
"school",
"science",
"scissors",
"screw",
"sea",
"seat",
"second",
"secret",
"secretary",
"see",
"seed",
"seem",
"selection",
"self",
"send",
"sense",
"separate",
"serious",
"servant",
"sex",
"shade",
"shake",
"shame",
"sharp",
"sheep",
"shelf",
"ship",
"shirt",
"shock",
"shoe",
"short",
"shut",
"side",
"sign",
"silk",
"silver",
"simple",
"sister",
"size",
"skin",
"",
"skirt",
"sky",
"sleep",
"slip",
"slope",
"slow",
"small",
"smash",
"smell",
"smile",
"smoke",
"smooth",
"snake",
"sneeze",
"snow",
"so",
"soap",
"society",
"sock",
"soft",
"solid",
"some",
"",
"son",
"song",
"sort",
"sound",
"soup",
"south",
"space",
"spade",
"special",
"sponge",
"spoon",
"spring",
"square",
"stage",
"stamp",
"star",
"start",
"statement",
"station",
"steam",
"steel",
"stem",
"step",
"stick",
"sticky",
"stiff",
"still",
"stitch",
"stocking",
"stomach",
"stone",
"stop",
"store",
"story",
"straight",
"strange",
"street",
"stretch",
"strong",
"structure",
"substance",
"such",
"sudden",
"sugar",
"suggestion",
"summer",
"sun",
"support",
"surprise",
"sweet",
"swim",
"system",
"table",
"tail",
"take",
"talk",
"tall",
"taste",
"tax",
"teaching",
"tendency",
"test",
"than",
"that",
"the",
"then",
"theory",
"there",
"thick",
"thin",
"thing",
"this",
"thought",
"thread",
"throat",
"through",
"through",
"thumb",
"thunder",
"ticket",
"tight",
"till",
"time",
"tin",
"tired",
"to",
"toe",
"together",
"tomorrow",
"tongue",
"tooth",
"top",
"touch",
"town",
"trade",
"train",
"transport",
"tray",
"tree",
"trick",
"trouble",
"trousers",
"TRUE",
"turn",
"twist",
"umbrella",
"under",
"unit",
"up",
"use",
"value",
"verse",
"very",
"vessel",
"view",
"violent",
"voice",
"waiting",
"walk",
"wall",
"war",
"warm",
"wash",
"waste",
"watch",
"water",
"wave",
"wax",
"way",
"weather",
"week",
"weight",
"well",
"west",
"wet",
"wheel",
"when",
"where",
"while",
"whip",
"whistle",
"white",
"who",
"why",
"wide",
"will",
"wind",
"window",
"wine",
"wing",
"winter",
"wire",
"wise",
"with",
"woman",
"wood",
"wool",
"word",
"work",
"worm",
"wound",
"writing",
"wrong",
"year",
"yellow",
"yes",
"yesterday",
"you",
"young");
