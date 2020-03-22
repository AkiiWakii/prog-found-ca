// Question 1
var animal = "cat";

// Question 2
var person = { name : "Adam"};
// Question 3
var outOfStock = true;
if(outOfStock === true) {
    console.log(" Out for stock")
} else{
    console.log("In stock")
};

// Question 4
var numbers = [1,2,3,4,5];
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i])
};
// Question 5
for(var i= 15;i <= 25;i++){
    console.log(i)
};
// Question 6
for(var i= 15;i <= 20;i++){
    console.log(i)
};
// Question 7 
var randomArray = [
    {"a" : "Kitty",
     "b" : 3,
     "c" : false},
     {"a" : "Nami",
      "b": 20,
      "c": true}
];

for(var i = 0; i < arrayLength; i++){
    console.log(randomArray[i].b);
    console.log(randomArray[i].c);
}

// Question 8
function whatIDontLike(mislikedThing){
console.log("I don't like " + mislikedThing)
};
// Question 9
function substractNumbers(number1, number2){
    var  numbers = number1 - number2;
    console.log(numbers);
}
// Question 10
var emptyArray = [];
function addToArray(item){
    emptyArray.push(item);
    console.log(emptyArray)
}