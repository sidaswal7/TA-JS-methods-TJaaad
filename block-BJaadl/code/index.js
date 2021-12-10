let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  return [...arr].sort((a,b)=>a.length-b.length).pop();
}
// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((word)=>word.length);
// - Create a new array that only contains word with atleast one vowel.
function checkVowel(word){
  return word.toLowerCase().includes('a')|| word.toLowerCase().includes('e')|| word.toLowerCase().includes('i')|| word.toLowerCase().includes('o')|| word.toLowerCase().includes('u');
}
let oneVowelWords = words.filter((w)=>checkVowel(w));
// - Find the index of the word "rhythm"
words.findIndex((word)=>word =='rhythm');
// - Create a new array that contians words not starting with vowel.
let notStartVowel = words.filter((w)=>!checkVowel(w[0]));
// - Create a new array that contianse words not ending with vowel
let notEndVowel = words.filter((w)=>!checkVowel(w[w.length-1]));


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  return arr.reduce((acc,cv)=>{
    acc = acc+cv;
    return acc;
  },0);
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function byThree(num){
  return num % 3 === 0;
}
let multipliedByThree = numbers.filter((n)=>byThree(n));
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((n)=> n%2===0);
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((n)=> n%2===1);
// - Create a new array that should have true for even number and false for odd numbers.
let oddOrEven = numbers.map((n)=>n%2===0);
// - Sort the above number in assending order.
let ascendingOrder = [...numbers].sort((a,b)=>a-b);
// - Does sort mutate the original array?
//Yes, it does.
// - Find the sum of the numbers in the array.
let sumNumbers = numbers.reduce((acc,cv)=>{
  acc = acc +cv;
  return acc;
},0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(){
   let avg = numbers.reduce((acc,cv)=>{
    acc = acc + cv;
    return acc;
  },0)/ numbers.length;
  return avg;
}
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words){
  let wordLength = words.map((w)=>w.length).reduce((acc,cv)=>{
    return acc+cv;
  },0)/ words.length;
  return wordLength;
}