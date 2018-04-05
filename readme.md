### Human readable duration format

https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of `years`, `days`, `hours`, `minutes` and `seconds`.

It is much easier to understand with an example:

```javascript
formatDuration(62);    // returns "1 minute and 2 seconds"
formatDuration(3662);  // returns "1 hour, 1 minute and 2 seconds"
```

#### For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

#### Detailed rules
The resulting expression is made of components like `4 seconds, 1 year`, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, `1 minute and 0 seconds` is not valid, but it should be just `1 minute`.

A unit of time must be used "as much as possible". It means that the function should not return `61 seconds`, but `1 minute and 1 second` instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

### Decode the Morse code, advanced

https://www.codewars.com/kata/decode-the-morse-code

This kata is part of a series on the Morse code. Make sure you solve the (https://www.codewars.com/kata/decode-the-morse-code)[previous part] before you try this one. After you solve this kata, you may move to the (https://www.codewars.com//kata/decode-the-morse-code-for-real)[next one].

In this kata you have to write a (https://en.wikipedia.org/wiki/Morse_code)[]Morse code] decoder for (https://en.wikipedia.org/wiki/Electrical_telegraph)[wired electrical telegraph].
Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

* "Dot" – is 1 time unit long.
* "Dash" – is 3 time units long.
* Pause between dots and dashes in a character – is 1 time unit long.
* Pause between characters inside a word – is 3 time units long.
* Pause between words – is 7 time units long.
* However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−− ·−−− ··− −·· · may be received as follows:

```1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011```

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function `decodeBits(bits)`, that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

Function `decodeMorse(morseCode)`, that would take the output of the previous function and return a human-readable string.

The Morse code table is preloaded for you as MORSE_CODE dictionary; in Java MorseCode class is provided; in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--" - feel free to use it.

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!

After you master this kata, you may try to (http://www.codewars.com/kata/decode-the-morse-code-for-real)[Decode the Morse code, for real].

### String Evaluation

The string will be as such:

`"aab#HcCcc##l#"`

The conditions will be passed in an array as such:

`["a<b","#==4","c>=C","H!=a"]`

The conditions in this example array can be interpreted as:

1) (a<b):The number of times 'a' occurs in the string should be less than the number of times 'b' occurs in the string

2) (#==4):'#' should occur 4 times in the string

3) (c>=C):'c' should occur greater than or equal to the number of times 'C' occurs.

4) (P!=a): The number of times 'P' occurs should not equal the number of times 'a' occurs

In this example condition 1 is false and 2,3,4 are true. So the return value will be an array as such:

`[False,True,True,True]`

Characters in conditions will always be in the string. Characters in the string are chosen from:

`string.ascii_letters+"@#$%^&*()_{}[]"`

### Zeros and Ones

Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

For instance, given the array

`[1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1]`,

replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones.

Your task is to write the function `replaceZero()` that determines where to replace a zero with a one to make the maximum length subsequence.

*Note:*

* If the're multiple results, return the last

`[1,1,0,1,1,0,1,1] //=> 5`

* The array will always contain zeros and ones.

Can you do this in one pass ?

### String incrementer

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

```
foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
```


Attention: If the number has leading zeros the amount of digits should be considered.

### The maximum and minimum difference -- Simple version

Description:
Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [ max difference, min difference ]

**For example:**

```
Given arr1 = [3,10,5], arr2 = [20,7,15,8]
 should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
```

**Note:**

* arr1 and arr2 contains only integers(positive, negative or 0);
* arr1 and arr2 may have different lengths, they always has at least one element;
* All inputs are valid.
* This is a simple version, if you want some challenges, [try the challenge version](https://www.codewars.com/kata/583c592928a0c0449d000099).

**Some Examples**

```
 maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
 maxAndMin([3],[20]) === [17,17]
 maxAndMin([3,10,5],[3,10,5]) === [7,0]
 maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]
```
