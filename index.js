// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];
cats;

//Add array to the end of the array
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
cats;

//Add Bob to the beginning of the array
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
cats;

//Remove Garlfield from the array
function destructivelyRemoveLastCat(Garfield){
    cats.pop();
}
cats;

//remove Milo from the array
function destructivelyRemoveFirstCat(Milo){
    cats.shift();
}
cats;

//Add Broom to the beginning of the array using spread
function appendCat(Broom){
    return [...cats, "Broom"];

}
cats;

function prependCat(Arnold){
    return ["Arnold", ...cats];
}
cats;

function removeLastCat(){
return cats.slice(0,cats.length-1);
}
cats;

function removeFirstCat(){
    return cats.slice(1);
}
cats;
