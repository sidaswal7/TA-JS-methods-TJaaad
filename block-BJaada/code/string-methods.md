Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

    -Parameter: empty
    -Return: the string converted in uppercase
    -Example:
    ```js
    let user = "john";
    user.toUpperCase();
    let sentence = "my name is arya";
    sentence.toUpperCase();
    ```
    -`toUpperSpace` accepts a string or variable which has string value stored and converts it to uppercase and returns it.
3. `toLowerCase`


    -Parameter: empty
    -Return: the string converted in uppercase
    -Example:
    ```js
    let user = "john";
    user.toLowerCase();
    let sentence = "MY NAME IS ARYA";
    sentence.toLowerCase();
    ```
    -`toLowerSpace` accepts a string or variable which has string value stored and converts it to lowercase and returns it.
4. `trim`

    -Parameter: empty
    -Return: the string with whitespace removed from both start and end
    -Example:
    ```js
    let user = "       john";
    user.trim();
    let sentence = "  MY NAME IS ARYA     ";
    sentence.trim();
    let line= "  hi   my name is arya  ";
    line.trim();
    ```
    -`trim` accepts a string or variable which has string value stored and removes the whitespace present at the start as well as the end of the string and returns it.
5. `trimEnd`

    -Parameter: empty
    -Return: the string with whitespace removed from end
    -Example:
    ```js
    let user = "john  ";
    user.trimEnd();
    let sentence = " MY NAME IS ARYA     ";
    sentence.trimEnd();
    let line= "  hi  my name is arya  ";
    line.trimEnd();
    ```
    -`trim` accepts a string or variable which has string value stored and removes the whitespace present at the end of the string and returns it.
6. `trimStart`


    -Parameter: empty
    -Return: the string with whitespace removed from both start.
    -Example:
    ```js
    let user = "       john";
    user.trimStart();
    let sentence = "  MY NAME IS ARYA   ";
    sentence.trimStart();
    let line= "   hi   my name is arya  ";
    line.trimStart();
    ```
    -`trim` accepts a string or variable which has string value stored and removes the whitespace present at the start of the string and returns it.
7. `concat`

    -Parameter: string
    -Return: the new concatenated string 
    -Example:
    ```js
    let user = "john";
    let user1 = "snow";
    user.concat(' ', user1);
    let user2 = "nightwatch";
    user.concat(' ', user1, ' of ',user2);
    
    ```
    -`concat` accepts a string or variable which has string value stored and concatenates it to the calling string and returns it.
8. `endsWith`

    -Parameter: search string, length(optional) -defaults to str.length
    -Return: true if the string ends with given character , otherwise false
    -Example:
    ```js
    let user = "john";
    user.endsWith("n");
    let sentence = "MY NAME IS ARYA";
    sentence.endsWith("ARYA");
    sentence.endsWith("Arya");
    ```
    -`endsWith` accepts a string which is to be searched at the end of the string, if it matches it returns true else false.
9. `includes`

    -Parameter: search string, position(optional)- by default starts with index0
    -Return: true- if the string is found else false
    -Example:
    ```js
    let user = "john";
    user.includes('n');
    let sentence = "MY NAME IS ARYA ";
    sentence.includes('MY');
    sentence.includes('name');
    ```
    -`includes` accepts a string and it lets us determine if that string is present in the main string. If it is present then it returns tue otherwise false.
10. `indexOf`

    -Parameter: search value, from index(optional)- defaults to 0
    -Return: the index of the search value if it is found otherwise -1.
    -Example:
    ```js
    let user = "john";
    user.indexOf('j');
    let sentence = "MY NAME IS ARYA";
    sentence.indexOf('NAME');
    sentence.indexOf('A',5);
    ```
    -`indexOf` accepts a search value and returns the index of the first occurence of value if it is found otherwise returns -1.
11. `lastIndexOf`

    -Parameter: search value, from index(optional)- defaults to 0
    -Return: the index of the search value if it is found otherwise -1.
    -Example:
    ```js
    let user = "john";
    user.lastIndexOf('j');
    let sentence = "MY NAME IS ARYA";
    sentence.lastIndexOf('NAME');
    sentence.lastIndexOf('A',5);
    ```
    -`lastIndexOf` accepts a search value and returns the index of the last occurence of value if it is found otherwise returns -1.
12. `padEnd`

    -Parameter: targetlength(number), padstring(optional)
    -Return: string with specified padded length and padstring at the end of the string
    -Example:
    ```js
    let user = "john";
    user.padEnd(12,69);
    let sentence = "MY NAME IS ARYA";
    sentence.padEnd(20,'NAME');
    sentence.padEnd(2);
    ```
    -`padEnd` accepts a targeted length and a string which is to be concatenated at the end of the string and it returns a padded string of targeted length. If the targeted length is smaller than the length of the string then the string is returned as it is. 
13. `padStart`

    -Parameter: targetlength(number), padstring(optional)
    -Return: string with specified padded length and padstring at the start of the string
    -Example:
    ```js
    let user = "john";
    user.padStart(12,69);
    let sentence = "MY NAME IS ARYA";
    sentence.padStart(20,'NAME');
    sentence.padStart(34,'*');
    ```
    -`padStart` accepts a targeted length and a string which is to be concatenated at the start of the string and it returns a padded string of targeted length. If the targeted length is smaller than the length of the string then the string is returned as it is.
14. `repeat`

    -Parameter: count(number data type)
    -Return: new string containing specified copies of the string
    -Example:
    ```js
    let user = "john";
    user.repeat(10);
    let sentence = "MY NAME IS ARYA";
    sentence.repeat(2);
    ```
    -`repeat` accepts a number datatype and returns a string with specified number of copies of the given string.
15. `replace`

    -Parameter: substring(string data type) or regular expression, new substring
    -Return: string with replaced new string
    -Example:
    ```js
    let user = "john";
    user.replace("john","arya");
    let sentence = "My dog is black";
    sentence.replace("dog","cat");
    sentence.replace("My","Your");
    ```
    -`replace` accepts a string to be replaced and new substring and it returns a new string with new substring.
16. `slice`

    -Parameter: begin index(number data type), endIndex(number)(optional)
    -Return: new string containing the extracted section of the string
    -Example:
    ```js
    let user = "john";
    user.slice(1,3);// oh
    let sentence = "My dog is black";
    sentence.slice(-8,-6);//is 
    
    ```
    -`slice` accepts a begin index and an end index and extracts a substring from the given string based on that.

17. `split`

    -Parameter: separator(can be string or regular expression), limit(optional)(+ve number)
    -Return: array of strings , split at each point where separator occurs
    -Example:
    ```js
    let user = "john";
    user.split('');//['j','o','h','n']
    let sentence = "My dog is black";
    sentence.split(' ',2);// ['My','dog'] 
    
    ```
    -`split` accepts a separator on the basis of which split occurs and it returns an array of substrings. 
18. `substring`

    -Parameter: begin index(number data type), endIndex(number)(optional)
    -Return: new string containing the extracted section of the string
    -Example:
    ```js
    let user = "john";
    user.substring(1,3);// oh
    let sentence = "My dog is black";
    sentence.substring(-8,-6);//is 
    
    ```
    -`substring` accepts a begin index and an end index and extracts a substring from the given string based on that.
