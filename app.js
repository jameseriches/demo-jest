
export const originalArray = (arr) => {
  return arr;
};

// doubleArray(numberArray); // => [2,4,6,8];  hint use map
export const doubleArray = (arr) => {
  let doubledArr = arr.map((number) => {
    return number * 2;
  });
  return doubledArr;
};
// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME
// ways to export
// export const methodName = (param) => {
  // }
  // ----or---------
  // export methodName function(param){
numberArray = [1, 2, 3, 4];
    // }
    // ARRAY ITERATOR METHODS
    // return array with double values in array
    // export const doubleArray = (numberArray) => {
      
      // }; // => [2,4,6,8];  hint use map
      
// return array with all even numbers
export const evensOnlyArray = (numberArray) => {
  return numberArray.filter((number) => {
    if (number % 2 === 0) {
      return true
    } else {
      return false
    }
  })
} // => [2,4]
// export function evensOnlyArray(numberArray) {

// }; // => [2,4];  hint use filter


// // return array with sum of numbers
//arraySum(numberArray); // => 10;  hint use reduce


// export const arraySum = (arr) => arr.reduce((a, b) => a + b, 0)

export const arraySum = (arr) => {
  const result = arr.reduce((result, currentIteration) => {
    return result + currentIteration
  }, 0)
  return result
}



// return true if every item greater than 0
export const allNumbersGreaterThanZero = (numberArray) => {
  return numberArray.filter((number) => {
    if (number > 0) {
      return true
    } 
    else {
      return false
    }
  })
}; // => true; use every

// return true if one or more items in array are odd
// export const someNumbersAreOdd = (numberArray) => {
//   function isEven(numberArray).each { 
//     return (numberArray %2)==0; }
//   function isOdd(numberArray) { return !isEven(numberArray); }
  
//   return numberArray.filter((number) => {
//     if (number > 0) {
//       return true
//     } else {
//       return false
//     }
//   })

// }; // => true; use some

export const someNumbersAreOdd = (numberArray) => {
  
  return numberArray.each((number) => {
    if (number % 2 !== 0) {
      return true
    } else {
      return false
    }
  })
}

// return array double and even
export const evensOnlyAndDoubleArray = (numberArray) => {
  return numberArray.each((number) => {
    if (number % 2 == 0) {
      return (number * 2)
    } else {
      return false
    }
  })

}; 

// => [4,8]; // use map and filter
// find an item method return 'not found' if not found



export const findItem = (numberArray, 1) => {
  
}; //=> 1

// // sort array desc order
export const sortArray = (numberArray) => {

}; //=> [4,3,2,1] *desc*

// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age
// artists = [
//   { name: "a", likes: 100 },
//   { name: "c", likes: 99 },
//   { name: "c", likes: 101 },
// ];
// // doubles likes of artist
// doubleLikes(artists);
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},
// // ];
// moreThan100Likes(artists); // =>[ {name: 'c', likes:101} ]; // use filter
// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists); //=> ['c']; // use filter
// // get total number of likes fo all artists
// numberOfLikes(artists); //=> 300; // get all likes
// // find an item method. Returns 'not found' if not found
// findObjByName(artists, "a"); // => {name: 'a', likes:200}
// // returns array of artist sorted by likes
// sortArtistByName(artists);









// const // variable declarations: const NEVER changes
// let // variable declarations: allows change

// var // variable declarations: OLD... DON'T USE THIS....!!!

// const number = 3
// number = 4 // BIG ERROR 

// let number = 3
// number = 4 // no problem
// numberArray = [1, 2, 3, 4];

// function addTwo(numberArray) {
//   return numberArray + 2
// }

// const seven = addTwo(5) // 7 
// console.log(seven) // output: 7






// const addThree = (num1) => {
//   return num1 + 3
// }

// const seven = addThree(4) // 7 

// function addSeven(num1) {
//   return num1 + seven
// }

// addSeven(10) // 17







// def addFive(num1)
//   return num1 + 5
// end

// @ten = addFive(5)


// def addTen(num1)
//   return num1 + @ten

// end

// puts addTen(10) // 20


// DB sql
// |  ^
// |  |
// V  |
// SERVER ruby // ruby on rails "framework", written in ... guess what?? RUBY
// |  ^
// |  |  <---- HTTP requests and responses
// V  |
// WEBSITE js // react "framework", written in ... js 

//       Client_Server      Server       Server

//       React              RoR          Postgresql
//       JS                 Ruby         SQL
//       website            logic        data
//       amazon.com
//       (user_page.html)

// "<HTML5><body>html here index.html</body><script>js here .js</script><styles>css here .css</styles></HTML5>"

// <HTML5>
//   <body>
//     html here index.html
//   </body>
//   <script>
//     js here .js
//   </script>
//   <styles>
//     css here .css
//   </styles>
// </HTML5>


// C language of the server ------- SQL language of the database

// C++
// C#


// Java ----- Ruby 

// JavaScript -- Python

