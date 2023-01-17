let foo = 'bar'
console.log(foo)
const bar = 'foo'

var hello = 'world'
var num = 123
var boolean = true
var arr = [1, 2, 'apple', true]

foo = 3;
console.log(foo)

foo = false;
console.log(foo);

//bar = false
console.log(arr);

//function
function greet(){
  //this name variable doesn't exist outside of the greet() function
    let name = "auryn";
    console.log("hello " + name);

    if (true){
      // this creates a block  scope
      let x = 3;
      // minimum scope for variables made with var keyword is function scope.
      var y = 6; // var differs from let.
      console.log(x, y);
    }
    // because x is contained in the block scope above, and we are out of scope here,
    // we no longer have a reference to x at this point.
    //console.log(x); // this will not print anything.
    console.log(y);

}

greet();
console.log('y', y) // throws an console error

function operations(){
    const a = 2; b = 5;
    const c = a + b;
    const d = b - a;
    const e = b / a; //2.5, not an integer division.
    const f
    console.log(a, b, c, d, e);
}

function coditionalOperators(){
    if(true == false){
      // false
    }
    if (true && false){
      //false
    }

    //logical or
    if (false || true){
      //true;
    }

    if (2 == '2'){
      // resolves true, but because it tries to compare the value 2 with a string
    }

    // use === for a strict equals, which will only resolve to true when both the data type and value match
    if (2 === '2'){
      // false
    }
    if (2 === 2){
      // true
    }


    //Truthy and Falsey values:
    if (!undefined){
      //truthy
    }
    if (""){
      // falsey
    }
    if(null){
      //Falsey
    }

    let arr = [];
    //example of using truthny values
    // if arr variable is not undefined
    if (arr){
      //then do stuff with the arr
    }
}


//Javascript object is a collection of key value pairs
