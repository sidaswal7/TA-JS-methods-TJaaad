Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```da
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

    - Parameter: separator(number,string,array,null)
   - Return: a string with all array elements joined.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(4); //[142434]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     ```da
   - `join` creates and returns a new string by concatenating all the elements in an array. It does not change the original array.
   - No it does not mutate the original array

3. `flat`

    - Parameter: depth(number data type)
   - Return: a new array with flat structure and the sub-array elements concatenated into it
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5]];
     numbers.flat(); //[1,2,3,4,5]
     let numbers2 = [1,2,3,[4,5,[6,7]]];
     numbers2.flat(2);//[1,2,3,4,5,[6,7]]
     ```da
   - `flat` accepts a depth value and creates a new array with all sub-array elements concatenated into it recursively uo to a specified depth
   - No it does not mutate the original array

4. `push`

    - Parameter: element(s) can be string, number,etc
   - Return: a single array with new length of the elements pushed at the end of the array
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(5);//[1,2,3,4,5]
     let colors = ['red','green','blue'];
     colors.push(1,'pink','orange');//['red','green','blue',1,'pink','orange']
     ```da
   - `push` accepts the elements to be pushed at the end of the array
   - It mutates the original array

5. `indexOf`

    - Parameter: search element, fromIndex(optional)
   - Return: first index of the element in the array. -1 is returned if element is not found
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(1)// 0
     let colors = ['red', 'green', 'blue','red'];
     colors.indexOf('red'); // 0
     ```da
   - `indexOf` accepts the elemts of which the index is to be found and returns the first index at which the given element can be found
   - No it does not mutate the original array

6. `lastIndexOf`

    - Parameter: search element, fromIndex(optional)
   - Return: last index of the element in the array. -1 is returned if element is not found
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.lastIndexOf(1)// 0
     let colors = ['red', 'green', 'blue','red'];
     colors.lastIndexOf('red'); // 3
     ```da
   - `lastIndexOf` accepts the elemts of which the index is to be found and returns the last index at which the given element can be found
   - No it does not mutate the original array
7. `includes`

    - Parameter: search element
   - Return: boolean value, true if the element is found and false when it's not
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(2);//True
     let colors = ['red', 'green', 'blue','red'];
     colors.includes('pink'); // False
     ```da
   - `includes` accepts the elements which is checked if it present then it returns true otherwise false.
   - No it does not mutate the original array
8. `reverse`

    - Parameter: no parameters
   - Return: reversed array
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse();//[3,2,1]
     let colors = ['red', 'green', 'blue','red'];
     colors.reverse; //['red','blue','green','red']
     ```da
   - `reverse` it reverses the index of the array and returns it. 
   - It mutates the original array
9. `every`

    - Parameter: callback function
   - Return: true if the callback function returns truthy value for every array element. otherwise, false
   - Example:
     ```js
     let numbers = [1, 2, 3];
     let ret = numbers.every(function(number){
       return number>0;
     }
     );// True
     let ret2 = numbers.every(function (number){
       return number>3
     });// False
     ```da
   - `every` accepts a callback function and return true when all the condition matches the condition
   - No it does not mutate the original array
10. `shift`

    - Parameter: 
   - Return: deleted element from the start of the array
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.shift()// [2,3]
     let colors = ['red', 'green', 'blue','red'];
     colors.shift(); // ['green','blue','red']
     ```da
   - `shift` it returs a new array with first elemnt deleted and it shifts the index of others -1.
   - It mutates the original array
11. `splice`

    - Parameter: index(from which the array should start changing), deletecount(number of elements to be deleted from the start), items(any number of items to added from the start index)
   - Return: an array containing the deleted elements
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5];
     numbers.splice(1)// [2,3,4,5]
     let colors = ['red', 'green', 'blue','red'];
     colors.splice(1,3,); // ['green','blue','red']
     ```da
   - `splice` accepts the start index, delete count or element to be added at the start index and removes the elements from start index and returns array of removed elements
   - It mutates the original array
12. `find`

    - Parameter: callback function(with 3 args: element, index,array)
   - Return: the value of the first element in the array that satisfies the provided testing function.otherwise, returns undefined
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5];
     numbers.find(function (num){
       return num === 2;
     })// 2
     let colors = ['red', 'green', 'blue','red'];
     colors.find(function (color){
       return color === "pink";
     }); // undefined
     ```da
   - `find` accepts a callback funtion and the func executes for each value of array until it finds a truthy value. If the condition matches then the value is returned otherwise it returs undefined.
   - No it does not mutate the original array
13. `unshift`

     - Parameter: element(value to added at the start of an array)
   - Return: the array of new length with element added at the start of array
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(5)// [5,1,2,3]
     let colors = ['red', 'green', 'blue','red'];
     colors.unshift('pink','brown'); // ['pink','brown','red','green','blue','red']
     ```da
   - `shift` it returs a new array with new element added at the start of the array and it shifts the index of others +1.
   - It mutates the original array
14. `findIndex`

    - Parameter: callback function(with 3 args: element, index,array)
   - Return: the index of the first element in the array that satisfies the provided testing function.otherwise, returns -1
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5];
     numbers.findIndex(function (num){
       return num === 2;
     })// 1
     let colors = ['red', 'green', 'blue','red'];
     colors.find(function (color){
       return color === "pink";
     }); // -1
     ```da
   - `findIndex` accepts a callback funtion and the func executes for each value of array until it finds a truthy value. If the condition matches then the index of the macthing value  is returned otherwise it retuens -1.
   - No it does not mutate the original array
15. `filter`

    - Parameter: callback function(with 3 args: element, index,array)
   - Return: a new array 
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5];
     numbers.find(function (num){
       return num === 2;
     })// 2
     let colors = ['red', 'green', 'blue','red'];
     colors.find(function (color){
       return color === "pink";
     }); // undefined
     ```da
   - `find` accepts a callback funtion and the func executes for each value of array until it finds a truthy value. If the condition matches then the value is returned otherwise it returs undefined.
   - No it does not mutate the original array
16. `flat`

    - Parameter: depth(number data type)
   - Return: a new array with flat structure and the sub-array elements concatenated into it
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5]];
     numbers.flat(); //[1,2,3,4,5]
     let numbers2 = [1,2,3,[4,5,[6,7]]];
     numbers2.flat(2);//[1,2,3,4,5,[6,7]]
     ```da
   - `flat` accepts a depth value and creates a new array with all sub-array elements concatenated into it recursively uo to a specified depth
   - No it does not mutate the original array
17. `forEach`

     - Parameter: callback function(with 3 args: element, index,array)
   - Return: undefined
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5];
     numbers.forEach(function (num){
       console.log(num);
     })// 1 2 3 4 5 undefined
     let colors = ['red', 'green', 'blue','red'];
     colors.forEach(function (color){
       console.log(color);
     }); // undefined
     ```da
   - `forEach` accepts a callback function and executes the the function for all the elements of the array
   - No it does not mutate the original array
18. `map`

    - Parameter: callback function(with 3 args: element, index,array)
   - Return: a new array with each element being the result of the callback function. Also returns the new array of same length
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5];
     numbers.map(function (num){
       return num*2;
     })// [2,4,6,8,10]
     let colors = ['red', 'green', 'blue','red'];
     colors.map(function (color){
       return color + 'color';
     }); // ['redcolor','greencolor','bluecolor','redcolor']
     ```da
   - `map` accepts a callback function and executes the the function for all the elements of the array and returns a new array of same length
   - No it does not mutate the original array
19. `pop`

    - Parameter: 
   - Return: the deleted last element from the array
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.pop()// [3]
     let colors = ['red', 'green', 'blue','red'];
     colors.pop(); // ['red']
     ```da
   - `shift` it deletes the last element of the array and returns it
   - It mutates the original array
20. `reduce`
21. `slice`
22. `some`
