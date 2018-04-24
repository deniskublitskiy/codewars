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

### Consonant value

A consonant is any letter of the alphabet except `a, e, i ,o, u`. The consonant substrings in the word "zodiacs" are `z, d, cs`. Assuming `a = 1, b = 2 ... z = 26`, the values of these substrings are `26 ,4, 22` because `z = 26,d = 4,cs = 3 + 19 = 22`. The maximum value of these substrings is 26. Therefore, `solve("zodiacs") = 26`.

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

Good luck!

If you like this Kata, please try:

[Word values](https://www.codewars.com/kata/598d91785d4ce3ec4f000018)

[Vowel-consonant lexicon](https://www.codewars.com/kata/59cf8bed1a68b75ffb000026)

###Champernowne's Championship

Ho ho! So you think you know integers, do you? Well then, young wizard, tell us what the Nth digit of the Champernowne constant is!

The constant proceeds like this: `0.12345678910111213141516...`

I hope you see the pattern!

Conjure a function that will accept an integer, n, and return the (one-indexed) nth digit of Champernowne's constant. Can you get it to run in constant time?

For example:

`n = 1` should return `0` (the very first digit)

`n = 2` should return `1` (we ignore the period character since it's not a digit!)

`n = 20` should return `4` (that's the 4 in the number 14, 20th in sequence)

For any invalid values, such as `0` and below, or non-integers, return... `NaN`!

I hope (for your sake) that you've been practicing your mathemagical spells, because a naïve solution will not be fast enough to compete in this championship!

Invoke with precision, and be wary of rounding errors in the realms of enormity!

May the best integer win!

###One line task: Square Every Digit

Inspired by [Square Every Digit](https://www.codewars.com/kata/square-every-digit/) (and of course by the inimitable myjinxin2015's many clever one-line kata), your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (<37). Your return value should be in integer format.

Your input will always be a valid, non-negative integer... no tricks!

Bonus: Can you get it down to 34 characters?

Note: Just as a head's up, numbers are > 2^31, so bitwise operators aren't viable.

Examples:

```
sd(0)=>    0
sd(64)=>   3616
sd(1111)=> 1111
sd(2222)=> 4444
sd(3333)=> 9999
sd(3212)=> 9414
sd(1234)=> 14916
sd(77455754)=> 4949162525492516
sd(99999999)=> 8181818181818181
```

P.S., if you can get the sample tests to pass in < 37 characters, the full tests should pass without a hitch!

Have fun, and please upvote if you enjoyed it :)

Found this one too easy? [This one's a bit more difficult!](https://www.codewars.com/kata/5a905291fd57772be0000039)
 
Too hard? [This one's a bit easier](https://www.codewars.com/kata/one-line-task-square-a-number-without-star-plus-or-math-dot-pow) :)

### Ball Upwards

You throw a ball vertically upwards with an initial speed `v (in km per hour)`. The height h of the ball at each time `t` is given by `h = v*t - 0.5*g*t*t` where g is Earth's gravity `(g ~ 9.81 m/s**2)`. A device is recording at every tenth of second the height of the ball. For example with `v = 15 km/h` the device gets something of the following form: `(0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ...` where the first number is the time in tenth of second and the second number the height in meter.

#### Task
Write a function` max_ball` with parameter `v (in km per hour`) that returns the `time in tenth of second` of the maximum height recorded by the device.

#### Examples:
`max_ball(15) should return 4`

`max_ball(25) should return 7`

#### Notes
* Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
* The maximum height recorded by the device is not necessarily the maximum height reached by the ball.

### N High Scores

#### Description
You've been given the task of retrieving the top N high scores from players of a video game.

You need to write the function `top_scores(records, n_top)`

where records is a list of lists in the form of

`records = [
  ["Bob", 100],
  ["Jane", 120],
  ["Alice", 10],
  ["Bob", 110],
  ["Bob", 10]
]`
and `n_top` is an integer.

The function should return the top n records, where each user name can appear at most a single time. Records should be in from highest to lowest. Users with the same score should be in alphabetical order.

`>>> top_scores(records, 3)
[["Jane", 120],["Bob", 110],["Alice", 10]]`
if `n_top` is negative or `0`, the returned value should be an empty list.

if `n_top` is greater than the total number of records, you should include as many valid records as possible.

### RGB To Hex Conversion

The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

```javascript
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```

### Banker's Plan

John has some amount of money of which he wants to deposit a part `f0` to the bank at the beginning of year `1`. He wants to withdraw each year for his living an amount `c0`.

Here is his banker plan:

* deposit `f0` at beginning of year 1
* his bank account has an interest rate of `p` percent per year, constant over the years
* John can withdraw each year `c0`, taking it whenever he wants in the year; he must take account of an inflation of `i` percent per year in order to keep his quality of living. `i` is supposed to stay constant over the years.
* all amounts `f0..fn-1, c0..cn-1` are truncated by the bank to their integral part
* Given `f0, p, c0, i` the banker guarantees that John will be able to go on that way until the nth year.

####Example:

`f0 = 100000, p = 1 percent, c0 = 2000, n = 15, i = 1 percent`
`beginning of year 2 -> f1 = 100000 + 0.01*100000 - 2000 = 99000;  c1 = c0 + c0*0.01 = 2020 (with inflation of previous year)`
```
beginning of year 3 -> f2 =  99000 + 0.01*99000 - 2020  = 97970;  c2 = c1 + c1*0.01 = 2040.20
(with inflation of previous year, truncated to 2040)
```
```
beginning of year 4 -> f3 =  97970 + 0.01*97970 - 2040  = 96909.7 (truncated to 96909); 
c3 = c2 + c2*0.01 = 2060.4 (with inflation of previous year, truncated to 2060)
```
and so on...

John wants to know if the bankers'plan is right or wrong. Given parameters `f0, p, c0, n, i` build a function `fortune` which returns `true` if John can make a living for `n` years and `false` if it is not possible.

#### Some cases:

```
fortune(100000, 1, 2000, 15, 1) -> True
fortune(100000, 1, 10000, 10, 1) -> True
fortune(100000, 1, 9185, 12, 1) -> False

For the last case you can find below the amounts of his account at the beginning of each year:
100000, 91815, 83457, 74923, 66211, 57318, 48241, 38977, 29523, 19877, 10035, -5
```
`f11 = -5 so he has no way to withdraw something for his living in year 12.`
Note: Don't forget to convert the percent parameters as percentages in the body of your function: if a parameter percent is 2 you have to convert it to 0.02.

### Delete occurrences of an element if it occurs more than n times

#### Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

#### Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

####Example
```
deleteNth ([1,1,1,1],2) // return [1,1]

deleteNth ([20,37,20,21],1) // return [20,37,21]
```

### Strip Url Params

Complete the method so that it does the following:
* Removes any duplicate query string parameters from the url
* Removes any query string parameters specified within the 2nd argument (optional array)
Examples:

```javascript
stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
```