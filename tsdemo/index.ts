let foo1 = 'bar'; // valid Javascript and Typescript Code
let foo2 : string = 'bar'; // valid Typescript code, needs to be translated (let foo : string = 'bar')

// foo1 = 3; // can't do this in TS
// foo2 = 3; // can't do this in TS

// foo1 = []; // can't do this in TS

foo1 = 'hello world';

// doesn't stop you from doing it, but will complain. Using TSC will translate everything into usable Javascript code.

let array : number[] = [1, 2, 3];
// array = [1, '2', {}]; TS will try to stop you from doing this

function greet() : void{
    console.log('hello world');
}

function add(a: number, b: number) : number {
    return a + b;
}

// will return either the HTML element or null if can't find it:
// const someTable : HTMLElement | null = document.getElementById('some-table-id');
// someTable.createRow() // NOTE: TypeScript doesn't like that you're using a property that doesn't exist in HTMLElement

// need to convince TS to do what you want:
const someTable : HTMLTableElement = document.getElementById('some-table-id') as HTMLTableElement; // We need to typecast things into the correct form. HTMLTableElement is a part of HTMLElement. Can't do createTBody in an HTMLElement, so you need HTMLTableElement
someTable.createTBody();

// any is when you're fed up with TypeScript and just want to write some weird JavaScript
let backToJS : any = '2'; // Not Recommended
backToJS = 3;
backToJS = [];

// unknown is type safe any
let tbd : unknown;
tbd = 3;

interface exampleInterface{
    a : string,
    b : number
}

const usingInterface : exampleInterface = {
    a : 'foo',
    b : 3
}

function domOps(elem : HTMLElement){
    elem.id = 'some id';
    elem.innerHTML = '<div> some class</div>'
}

// domOps('string');

function usingCustomInterface(param : exampleInterface) : void {
    console.log(param);
}

usingCustomInterface(usingInterface);

const notExampleInterface : any = { 
    a : 'hello',
    b : 3,
    c : [],
    d : {hello : 'world'}
}
//usingCustomInterface({a: 'hello', b : 3, c : [], d : {hello : 'world'}); // This complains, so let's make a separate parameter and pass it in, something that isn't "object literal"

// Even though the variable notExampleInterface is not of interface "ExampleInterface", I was able to pass it to usingCustomInterface function because the shape of the object satisfiedt he required properties that must exist in the exampleInterface.
usingCustomInterface(notExampleInterface);

// union types: can set a variable to accept many different types of variables, for instance, pulling a date from a database can either be in the Date format, as a string, or as a number.
interface oneThatUsesDate {
    created : Date | string | number
}

// any versus unknown
function fn1(bar : any){
    bar();
}
function fn2(foo: unknown){
    //foo(); // doesn't work, since foo() is of type "unknown"
}

let z : unknown;
//let y : number = z; // does not work, need to typecast.
let x : number = z as number; // does work, since we typecasted the "unknown" type to a number.
let v : string = z as string;

// "any" doesn't do typechecking for you, but "any" can be set to any variable.
let w : any = 'string';
w = 3;
w = [];
w = {};
let t : string = w;
let i : number = w;
