'use strict'

/*
// 1) Exercise

const arrayJunk = ["hay", "junk", "hay", "hay", "moreJunk", "randomJunk", "needle", "randomJunk"];

const findNeedle = function (haystack) {
  let str = '';
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      str += 'found the ' + haystack[i] + ' at position ' + i;
    }
  }
  return str;
}

console.log(findNeedle(arrayJunk));

// 2) Exercises

// Write a function  which calculates average of the numbers in a given list.

const arrays = [2, 2]

const findAverage = function (array) {
  if (array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length;
  } else {
    return 0;
  }
}

console.log(findAverage(arrays))

// 3) Exercises

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

const abbrevName = function (name) {

  const str = name.split(' ');
  const firstLetter = str[0].split('');
  const secondLetter = str[1].split('');
  const concat = firstLetter[0] + '.' + secondLetter[0];
  const result = concat.toUpperCase();

  return result;
}

console.log(abbrevName('sam harris'));
console.log(abbrevName('P Favuzzi'));



// 1) seperate argument's strings
// 2) exact the first letters
// 3) Concat the letters

// 4) Exercise

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// the function takes one argument
// 1) we need to find out how can we receive the odd and even numbers
// 2) then we make an output what we received is an odd or an even number ?


const evenOrOdd = function (number) {
  const result = number % 2 !== 0 ? 'Odd' : 'Even'
  return result
}

console.log(evenOrOdd(4));

// 5) Exercise

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.
// 1) we need to check the typeOf a given argument
// 2) make the given argument to a string if it's valid


const booleanToString = function (b) {
  return typeof b === 'boolean' ? String(b) : ''
}

console.log(booleanToString(false));

// 6) Exercise

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// 1) number will always > 0
// the given argument olways be a number
// a) check the typeOf
// b) check the positive value
// 2) we need to loop over a given argument
// 3) we need to merge an argument's looped numbers

// we need to plus the argument also at the last result

const summation = function (num) {
  let sum = 0;
  if (typeof num === 'number' && num > 0)
    for (let i = 0; i < num; i++) {
      sum += i;
    }
  return sum + num;
}

console.log(summation(8));

// 7) Exercise

// Your task is to create a function that does four basic mathematical operations.

// 1) The function should take three arguments - operation(string/char), value1(number), value2(number).

// 2) The function should return result of numbers after applying the chosen operation.

const basicOp = function (operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2
    default:
      return 0;
  }
}


console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

// 8) Exercise

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// 1) need to figureout given name's first letter
// 2) make dynamic text with to possible answer


const areYouPlayingBanji = function (name) {
  const firstChar = name.split('')[0]
  if (firstChar === 'R' || firstChar === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanji('Adam'));
console.log(areYouPlayingBanji('Paul'));
console.log(areYouPlayingBanji('Ringo'));
console.log(areYouPlayingBanji('bravo'));
console.log(areYouPlayingBanji('rolf'));


// 9)  Exercise

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// 1) return sentence
//  a) if it's empty Should return empty string for empty array.
//  b) One word example should return the word.
//  c) Multiple words should be separated by spaces.

// 2) we need to check them and then make them an output

const smash = function (words) {
  if (words === []) return String(words)
  else if (words === words[0]) return String(words)
  else return words.join(' ')
}

console.log(smash(['hello']));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

// 10) Exercise

// We need a function that can transform a string into a number.

const stringToNumber = function (str) {
  if (str) return Number(str);
  else return;
}


console.log(stringToNumber('1234'));
console.log(stringToNumber('-7'));

// 11) Exercise

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!


const better = (classPoints, yourPoints) => {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i]
  }
  const classAve = sum / classPoints.length
  return classAve < yourPoints ? true : false;
}

console.log(better([100, 40, 34, 57, 29, 72, 57, 88], 75));

// 12) Exeercise

// RemoveExclamationMarks which removes all exclamation marks from a given string.

const remove = s => {
  const array = s.split('');
  const newArray = [];
  const arrayToString = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i])
  }
  if (newArray.includes('!')) {
    arrayToString.push(newArray.filter(exc => exc !== '!'));
  }
  return String(arrayToString[0].join(''));
}

console.log(remove('Hello World!'));

// 13) Exercise

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



const reaperStr = function (n, s) {
  const reapet = [];
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      reapet.push(s)
    }
    return String(reapet.join(''));
  } else {
    return '';
  }
}

console.log(reaperStr(3, '*'));
console.log(reaperStr(5, '#'));
console.log(reaperStr(2, 'ha'));
console.log(reaperStr(5, "Hello"));

// 14) Exercise

const bmi = function (weight, height) {

  const calc = weight / (height ** 2)

  if (calc <= 18.5) return 'Underweight';
  else if (calc > 18.5 && calc <= 25) return 'Normal';
  else if (calc > 25 && calc <= 30) return 'Overweight';
  else if (calc > 30) return 'Obese'

}
console.log(bmi(80, 1.80));

// 15) Exercise


const sumMix = function (x) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    newArr.push(+x[i])
    sum += newArr[i];
  }
  return sum;
}


console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));


// 16) Exercise

//  the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// 1) every 25 miles the car needs one gallon

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return (mpg * fuelLeft) >= distanceToPump ? true : false
}

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

// 16) Exercise

function disemvowel(str) {

  const arry = [];
  const dryArr = [];
  arry.push(str.split(''))

  for (let i = 0; i < arry.length; i++) {
    dryArr.push(arry[i].filter((v) => (v !== 'i') && (v !== 'e') && (v !== 'o') && (v !== 'a') && (v !== 'u') && (v !== 'I') && (v !== 'E') && (v !== 'O') && (v !== 'A') && (v !== 'U')));
  }


  return dryArr[0].join('');
}


console.log(disemvowel('This website is for losers LOL!'));

// 17) Execise

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

const array2 = [true, NaN, undefined, null];

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) sum++
  }
  return sum;
}

console.log(countSheeps(array1));


// 18) **** Exercise Convert Decimal Numbers To Binary ****

let decimal = 14;
let binary = '';

// While decimal becomes 0 we need to iterate allover this
while (decimal > 0) {
  // if modulos of number 2 is 1 , we need to append 1 in binary's empty string , Otherwise append 0.
  if (decimal % 2 == 1) {
    binary = '1' + binary
  } else {
    binary = '0' + binary
  }
  // expected to ++ or the -- operators we need to divide given decimal number while it becames 0;
  console.log(decimal = Math.floor(decimal / 2));
}

// დეციმალ ციფრის ბინარულში გადაყვანა ხდება შემდეგნაირად , მოცემული დეციმალ ციფრი :
// 1) სანამ მეტია ნულზე უნდა გავყოთ 2-ზე while loop - ით .
// 2) თუ 2-ზე გაყოფისას ნაშთი 1-ის ტოლია, ანუ 2-ზე არიყოფა, ვწერთ 1.
// 3) თუ ნაშთი 0 ის ტოლია ანუ ორზე იყოფა ვწერთ 0 - ს.
// 4) მაგალითად 4 გავყოთ 2-ზე , მივიღებთ 2-ს , რადგან გაიყო დავწერთ 1-ს, მიღებული 2 ისევ მეტია ნულზე და ისევ გავყოფთ 2-ზე, ესეც იყოფა და დავწერთ ისევ 1-ს , ანუ დეციმალური ციფრი 4-ის ბინარული ციფრი გამოვა '11' ის ტოლი.

console.log(binary);

// 19) Exercise

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const numbers = 35231;

function digiteze(n) {

  const array = [];
  const reversed = [];
  const toString = String(n).split('')
  for (let i = 0; i < toString.length; i++) {
    array.push(toString[i])
  }
  let result = array.reverse();
  result.reduce((acc, curr) => {
    reversed.push(+curr)
  }, 1)

  return reversed;

}

console.log(digiteze(numbers));

// 20) Exercise

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  if (time !== 0)
    return Math.floor(time * 0.5);
  else
    return 0;
}

console.log(litres(2));

// 21) Exercise

// 1) need to split given argument 
// 2) loop over the splited argument's



// let str = "how can mirrors be real if our eyes aren't real";

let str = 'If everybody in the world dropped out of school we would have a much more intelligent society.'


String.prototype.toJadenCase = () => {

  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const upperCased = arr.join(' ');

  return upperCased;
}

console.log(str.toJadenCase());

// 22) Exercise

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let str = s1 + s2;
  return str.split('')
    .filter((item, pos, self) => self.indexOf(item) == pos)
    .sort()
    .join('')

}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


// 23) Exercise

// return sum of positive numbers

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i]
  }
  return sum
}

console.log(positiveSum([1, -2, 3, 4, 5]));


// 24) Exercise

// Remove white space 

function noSpace(x) {
  return x.split(' ').join('');
}

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));

const xor = function (a, b) {
  if (a === false && b === false) return false
  if (a === true && b === false) return true
  if (a === false && b === true) return true
  return false
}

console.log(xor(false, false))
console.log(xor(true, false))
console.log(xor(false, true))
console.log(xor(true, true))

const XO = function (str) {
  const arrayStr = str.toLowerCase().split('')

  let o = 0
  let x = 0

  for (const word of arrayStr) {
    word.includes('o') ? o++ : word.includes('x') ? x++ : ''
  }
  return o === x
}

console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('ooxXm'))
console.log(XO('zpzpzpp'))
console.log(XO('zzoo'))

const peopleWithAgeDrinks = function (old) {
    return old < 14
        ? 'drink toddy'
        : old < 18
        ? 'drink coke'
        : old < 21
        ? 'drink beer'
        : 'drink whisky'
}

console.log(peopleWithAgeDrinks(17))


// remove smallest one

const removeSmallest = function (numbers) {
    const removedMin = numbers.slice()
    const min = Math.min(...numbers)

    return removedMin.filter((num, i, arr) => {
        if (arr.indexOf(num) === i) return num !== min
        else return arr
    })
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([2, 2, 2, 2, 2]))



const getSum = function (a, b) {
    return ((Math.abs(a - b) + 1) * (a + b)) / 2
}

console.log(getSum(0, 1))
console.log(getSum(-1, 2))

const findShort = function (s) {
    const splitedStr = s
        .split(' ')
        .map((word) => word.length)
        .sort((a, b) => a - b)
        .splice(0, 1)
        .join()

    return +splitedStr
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(
    findShort(
        'turns out random test cases are easier than writing out basic ones',
    ),
)
console.log(findShort("Let's travel abroad shall we"))
console.log(
    findShort(
        'ProofOfStake MadeSafeCoin 21inc MadeSafeCoin Dash Mine Bitcoin Steem MadeSafeCoin Dogecoin Steem ProofOfWork Ripple Bitcoin BTC Classic',
    ),
)

'hi'.lastIndexOf

const remove = function (string) {
    return string.endsWith('!')
        ? string.split('').slice(0, -1).join('')
        : string
}

console.log(remove('Hi!'))
console.log(remove('Hi!!!'))
console.log(remove('Hi!!!!!!!!'))
console.log(remove('!Hi'))


const replace = function (s) {
    return s.replace(/[aeiou]/gi, '!')
}

console.log(replace('Hi!'))
console.log(replace('aeiou'))
console.log(replace('!Hi! Hi!'))

*/

/*
:
;
-
~
)
D

function countSmileys(arr) {
    let count = 0
    const smiles = [
        ':)',
        ';)',
        ':D',
        ';D',
        ':-D',
        ':~D',
        ':-)',
        ':~)',
        ';~D',
        ';~)',
        ';-D',
        ';-)',
    ]
    if (arr.length)
        for (const v of arr) {
            if (smiles.includes(v)) count++
        }
    return count
    return 0
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']))
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']))
console.log(countSmileys([';>', ':oD', ':)', ';)', ':-D', ':oD', ';~)']))
console.log(countSmileys([]))

const combat = function (health, demage) {
    return health - demage < 0 ? 0 : health - demage
}

console.log(combat(100, 5))
console.log(combat(92, 8))
console.log(combat(20, 30))

const removeUrlAnchor = function (url) {
    if (url.includes('#')) return url.slice(0, url.lastIndexOf('#'))
    return url
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/Katas/?page=1#about'))
console.log(removeUrlAnchor('www.codewars.com/Katas/'))

const isIsogram = function (str) {
    let isogram = true
    const lower = str.toLowerCase().split('')
    for (const [index, word] of lower.entries()) {
        if (lower.indexOf(word) === index) isogram
        else isogram = false
    }
    return isogram
}

console.log(isIsogram('Dermatoglyphics')) // true
console.log(isIsogram('isogram')) // true
console.log(isIsogram('aba')) // false
console.log(isIsogram('moOse')) // false
console.log(isIsogram('isIsogram')) // false
console.log(isIsogram('')) // true

const sumDigPow = function (a, b) {
    const eureka = []

    for (let i = a; i < b; i++) {
        let digits = String(i).split('')

        if (
            i ==
            digits.reduce(function (accumulator, currentValue, currentIndex) {
                return accumulator + currentValue ** (currentIndex + 1)
            }, 0)
        ) {
            eureka.push(i)
        }
    }
    return eureka
}

// console.log(sumDigPow(1, 10))
console.log(sumDigPow(10, 100))

// non consecutive number <= means that every second element would be more then previous just one if it is greater two or more it's consecutive

const firstNonConsecutive = function (arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
// console.log(firstNonConsecutive(null))
// console.log(firstNonConsecutive(undefined))
console.log(firstNonConsecutive([1, 2, 3, 4, 5]))

const sumDigits = function (number) {
    return [Math.abs(number)]
        .join('')
        .split('')
        .reduce((acc, curr) => +acc + +curr, 0)
}

console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))

// count divisors of a given numbers

const getDivisorsCnt = function (n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        n % i === 0 && count++
    }
    return count
}

console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(11))
console.log(getDivisorsCnt(54))

const binToDec = function (bin) {
    return parseInt(bin, 2)
}

console.log(binToDec('1'))
console.log(binToDec('1001001'))


const sequenceSum = function (begin, end, step) {
    let count = 0
    for (let i = begin; i <= end; i += step) {
        count += i
    }
    return count
}

console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(1, 5, 1))

String.prototype.isUpper = function () {
    if (this == this.toUpperCase()) return true
    return false
}

const solve = function (e) {
    let upper = 0
    let lower = 0
    const splited = e.split('')
    for (let i = 0; i < splited.length; i++) {
        if (splited[i].isUpper()) upper++
        else lower++
    }
    return upper > lower ? e.toUpperCase() : e.toLowerCase()
}

console.log(solve('code'))
console.log(solve('CODe'))
console.log(solve('COde'))
console.log(solve('Code'))



const checkCoupon = function (
    enteredCode,
    correctCode,
    currentDate,
    expirationDate,
) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const [currMonth, currDay, currYear] = currentDate.split(' ')
    const [expirationMonth, expirationDay, expirationYear] =
        expirationDate.split(' ')

    const numCurrDay = parseInt(currDay)
    const numExpirationDay = parseInt(expirationDay)

    // console.log(numExpirationDay <= numCurrDay ? false : true)

    const currMonthIndex = months.findIndex((el) => el === currMonth)

    const expirationMonthIndex = months.findIndex(
        (el) => el === expirationMonth,
    )

    if (
        enteredCode === correctCode &&
        currMonthIndex <= expirationMonthIndex &&
        numExpirationDay <= numCurrDay &&
        parseInt(currYear) <= parseInt(expirationYear)
    )
        return true
    else return false
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))



function SeriesSum(n) {
    let result = 0
    let revarage = 1
    for (let i = 0; i < n; i++) {
        if (i === 0) result = 1
        else {
            revarage += 3
            result += 1 / revarage
        }
    }
    return result.toFixed(2)
}

console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
console.log(SeriesSum(4))

// list of integer pairs
// first numbers are people of get into bus
// second numbers are people of get off the bus

const number = function (busStops) {
    const bus = busStops.slice()
    let peopleLeft = 0
    bus.forEach((people) => {
        peopleLeft += people[0] - people[1]
    })
    return peopleLeft
}

console.log(
    number([
        [10, 0],
        [3, 5],
        [5, 8],
    ]),
)
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
    ]),
)

function greet(language) {
    const lengs = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso',
    }
    let result = 'Welcome'

    for (const [index, leng] of Object.entries(lengs)) {
        if (language === index) result = leng
    }
    return result
}

console.log(greet('english'))
console.log(greet('dutch'))
console.log(greet('IP_ADDRESS_INVALID'))


const findDifference = function (a, b) {
    const first = a.reduce((acc, cur) => {
        return acc * cur
    })

    const second = b.reduce((acc, cur) => {
        return acc * cur
    })

    return Math.abs(first - second)
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))

const volume = function (c) {
    return c.reduce((x, y) => x * y)
}

const findDifference = function (a, b) {
    return Math.abs(volume(a) - volume(b))
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))

const mxdiflg = function (a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1
    }
    let x = a1.map((str) => str.length)
    let y = a2.map((str) => str.length)

    return Math.max(
        Math.max(...x) - Math.min(...y),
        Math.max(...y) - Math.min(...x),
    )
}

console.log(
    mxdiflg(
        [
            'hoqq',
            'bbllkw',
            'oox',
            'ejjuyyy',
            'plmiis',
            'xxxzgpsssa',
            'xxwwkktt',
            'znnnnfqknaz',
            'qqquuhii',
            'dvvvwz',
        ],
        ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'],
    ),
)



const mergeArrays = function (arr1, arr2) {
    return [arr1, arr2]
        .flat()
        .filter((el, i, arr) => arr.indexOf(el) === i)
        .sort((a, b) => a - b)
}

// console.log(mergeArrays([1, 1, 1, 1, 3, 3, 5, 7, 9], [10, 8, 6, 4, 2]))
console.log(
    mergeArrays([-20, -5, -9, -10, 1, 4, 5, 6, 0, 0], [-11, -8, -6, -4, -2]),
)



// Capitalize even and odd strings

String.prototype.upper = function () {
    return this.toUpperCase()
}

const capitalize = function (s) {
    const split = s.split('')
    const even = []
    const odd = []

    for (let i = 0; i < split.length; i++) {
        const element = split[i]
        if (i % 2 === 0) even.push(element.upper())
        else even.push(element)
        if (i % 2 !== 0) odd.push(element.upper())
        else odd.push(element)
    }
    return [even.join(''), odd.join('')]
}

console.log(capitalize('abcdef'))


const countSheep = function (num) {
    let sheep = ''
    for (let i = 1; i <= num; i++) {
        sheep += `${i} sheep...`
    }

    return sheep
}

console.log(countSheep(2))

const capitals = function (word) {
    const splited = word.split('')
    let upperIndex = []

    for (const [i, w] of splited.entries()) {
        w === w.toUpperCase() ? upperIndex.push(i) : upperIndex.push()
    }

    return upperIndex
}

console.log(capitals('CodEWaRs'))


function rainAmount(mm) {
    const rainAmount = 40
    if (mm < rainAmount) {
        return `You need to give your plant ${rainAmount - mm}mm of water`
    } else {
        return `Your plant has had more than enough water for today!`
    }
}

console.log(rainAmount(100))
console.log(rainAmount(39))
console.log(rainAmount(40))

const index = function (array, n) {
    return array.length > n ? array.find((_, i) => i === n) ** n : -1
}

// console.log(index([1, 2, 3, 4], 2))
// console.log(index([1, 3, 10, 100], 3))
// console.log(index([6, 31], 3))
console.log(index([3], 1))

const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

const isPangram = function (string) {
    const arrayOfString = string.toLowerCase().replace('.', '').split('')
    return letters.every((element) => arrayOfString.includes(element))
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))

const didtinct = function (a) {
    return a.filter((el, i, arr) => arr.indexOf(el) === i)
}

console.log(didtinct([1, 1, 2, 2, 3, 3]))





const flattenAndSort = (array) => array.flat().sort((a, b) => a - b)

console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
    ]),
)


const alphabetPosition = function (text) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        let code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) {
            result += code - 64 + ' '
        }
    }
    return result.slice(0, result.length)
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))


const isSquare = function (x) {
    return Math.sqrt(x) % 1 === 0
}

const divisorsOf = function (x) {
    const divs = []

    for (let j = 1; j <= x; j++) {
        if (x % j === 0) {
            divs.push(j)
        }
    }
    return divs
}

const listSquared = function (m, n) {
    let res = []
    for (let i = m; i <= n; i++) {
        const divs = divisorsOf(i)

        const sumOfSquaredDivs = divs.reduce((acc, cur) => (acc += cur ** 2), 0)

        if (isSquare(sumOfSquaredDivs)) {
            res.push([i, sumOfSquaredDivs])
        }
    }

    return res
}

console.log(listSquared(1, 250))
// console.log(listSquared(42, 250))



function doubleChar(str) {
    return str
        .split('')
        .map((v) => v + v)
        .join('')
}

// console.log(doubleChar('abcd'))
console.log(doubleChar('Adidas'))



const towerBuilder = function (nFloors) {
    let space,
        star,
        tower = []

    for (let i = 1; i <= nFloors; i++) {
        space = ' '.repeat(nFloors - i)
        star = '*'.repeat(2 * i - 1)
        tower.push(`${space}${star}${space}`)
    }

    return tower
}

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))

const take = (arr, n) => arr.slice(0, n)

console.log(take([0, 1, 2, 3, 5, 8, 13], 3))



// ************* Duplicate Counter ***********
const removeDuplicate = (array, result) =>
    array
        .sort((a, b) => a - b)
        .forEach((w, i, arr) => {
            arr.indexOf(w) !== i && result.push(w)
        })

const counter = (array, count) => {
    array.forEach((el, i, arr) => {
        arr.indexOf(el) === i && count++
    })
    return count
}

const textEdit = (text, array) => {
    text.toLowerCase()
        .split('')
        .map((el) => array.push(el.charCodeAt()))
}

const duplicateCount = function (text) {
    let count = 0
    const duplicate = []
    const double = []
    textEdit(text, duplicate)
    removeDuplicate(duplicate, double)
    return counter(double, count)
}

console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('Indivisibilities'))
console.log(duplicateCount('Indivisibility'))



const preFizz = function (n) {
    const array = []
    for (let i = 1; i <= n; i++) {
        array.push(i)
    }
    return array
}

console.log(preFizz(1))
console.log(preFizz(2))
console.log(preFizz(3))
console.log(preFizz(4))
console.log(preFizz(5))


// Replace Lasdt Zeros
const noBoringZeros = function (n) {
    return Number(n.toString().replace(/0+$/, ''))
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(0))
console.log(noBoringZeros(96000))
console.log(noBoringZeros(105))
console.log(noBoringZeros(101))



const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const stringClean = (s) => {
    const strArray = s.split('')
    const newArr = []
    strArray.filter((item) => {
        if (!numbers.includes(item)) newArr.push(item)
    })
    return newArr.join('')
}

console.log(stringClean('123456789'))
console.log(stringClean('(E3at m2e2!!)'))
console.log(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!'))


const findOdd = function (A) {
    const arr_size = A.length
    const arr = A.slice()
    for (let i = 0; i < arr_size; i++) {
        let count = 0
        for (let j = 0; j < arr_size; j++) {
            if (arr[i] == arr[j]) count++
        }
        if (count % 2 != 0) return arr[i]
    }
    return -1
}

console.log(findOdd([1, 1, 2]))
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

function DNAStrand(dna) {
    const splited = dna.split('')
    let output = ''
    for (const w of splited) {
        if (w == 'A') output += 'T'
        else if (w == 'T') output += 'A'
        else if (w == 'G') output += 'C'
        else output += 'G'
    }
    return output
}

console.log(DNAStrand('ATTGC'))

// Global Regex
const validatePIN = function (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}
console.log(validatePIN('12.0'))



// X is team's Score
// Y is opponents Score

// If X > Y Gained 3 points
// If X = Y Gained 1 point
// If X < Y Lose 0 point

// Sum the Gained Score

const points = function (games) {
    let count = 0
    const newArr = []
    for (const [i, n] of games.entries()) {
        newArr.push(n.split(':'))
    }
    for (const [_, score] of newArr.entries()) {
        if (score[0] > score[1]) count += 3
        if (score[0] === score[1]) count++
        else count
    }

    return count
}

// prettier-ignore
console.log(
  points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3',]),
  )
// prettier-ignore
console.log(
    points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]),
)

// prettier-ignore
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));

const twoSum = function (numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2, 2, 3], 4))
console.log(twoSum([1234, 5678, 9012], 14690))

const Ball = function (ballType = 'regular') {
    this.ballType = ballType
}

const ball1 = new Ball()
const ball2 = new Ball('super')

console.log(ball1.ballType)
console.log(ball2.ballType)

// test is or not angram
const isAnagram = function (test, original) {
    var c = test.replace(/\W+/g, '').toLowerCase().split('').sort().join('')
    var d = original.replace(/\W+/g, '').toLowerCase().split('').sort().join('')
    return c === d ? true : false
}

console.log(isAnagram('foefet', 'toffee'))


function comp(array1, array2) {
    if (array1 == null || array2 == null) return false
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    return array1.map((v) => v * v).every((v, i) => v == array2[i])
}

console.log(comp([], []))



const factorial = function (n) {
    if (n == 0) return 1
    return n * factorial(n - 1)
}

console.log(factorial(4))
// console.log(factorial(0))
console.log(factorial(7))


const arithmetic = function (a, b, operator) {
    let result
    // if (operator === 'add') result = a + b
    // if (operator === 'subtract') result = a - b
    // if (operator === 'multiply') result = a * b
    // if (operator === 'divide') result = a / b
    // return result

    return operator === 'add'
        ? (result = a + b)
        : operator === 'subtract'
        ? (result = a - b)
        : operator === 'multiply'
        ? (result = a * b)
        : (result = a / b)
}

console.log(arithmetic(1, 2, 'add'))
console.log(arithmetic(8, 2, 'subtract'))
console.log(arithmetic(5, 2, 'multiply'))
console.log(arithmetic(8, 2, 'divide'))



// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

const minValue = function (values) {
    let sortArr = values.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < sortArr.length; i++) {
        if (result.indexOf(sortArr[i]) === -1) {
            result.push(sortArr[i])
        }
    }
    return +result.join('')
}

console.log(minValue([1, 3, 1]))



// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

const rot13 = function (message) {
    const originalAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'

    return message.replace(
        /[a-z]/gi,
        (letter) => cipher[originalAlpha.indexOf(letter)],
    )
}

const nameShuffler = function (str) {
    const result = []
    str.split().map((el) => {
        const $1 = el.split(' ')[1]
        const $2 = el.split(' ')[0]
        result.push($1, $2)
    })

    return result.join(' ')
}

console.log(nameShuffler('john McClane'))
console.log(nameShuffler('Mary jeggins'))
console.log(nameShuffler('tom jerry'))



const getSize = function (width, height, depth) {
    const area = [
        2 * (width * height) + 2 * (width * depth) + 2 * (height * depth),
    ]
    const volume = [width * height * depth]
    return area.concat(volume)
}

console.log(getSize(4, 2, 6))



// prettier-ignore
const numbersStr = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Zero']

const switchItUp = function (number) {
    let result = ''

    switch (number) {
        case 1:
            result = numbersStr.at(0)
            break

        case 2:
            result = numbersStr.at(1)
            break

        case 3:
            result = numbersStr.at(2)
            break

        case 4:
            result = numbersStr.at(3)
            break

        case 5:
            result = numbersStr.at(4)
            break

        case 6:
            result = numbersStr.at(5)
            break

        case 7:
            result = numbersStr.at(6)
            break

        case 8:
            result = numbersStr.at(7)
            break

        case 9:
            result = numbersStr.at(8)
            break
        default:
            result = numbersStr.at(9)
    }

    return result
}

console.log(switchItUp(1))
console.log(switchItUp(3))
console.log(switchItUp(5))
console.log(switchItUp(0))



function sumOfInternalAngles(n) {
    if (n < 3) return 0
    return (n - 2) * 180
}

console.log(sumOfInternalAngles(3))
console.log(sumOfInternalAngles(4))



// 1) სთხოვეთ მომხმარებელს შემოიტანოს რიცხვი და დაადგინეთ ეს რიცხვი მარტივია თუ შედგენილი.

// 2) Რიცხვი არის მარტივი თუ მას 2 გამყოფი ყავს 1 და საკუთარი თავი.

// 3) რიცხვი არის შედგენილი თუ მას 2 ზე მეტი გამყოფი ყავს.

// 4) რიცხვი 1 არც შედგენილია და არც მარტივი რადგან 1 გამყოფი ყავს.

const userNum = parseInt(prompt('გთხოვთ შეიყვანოთ რიცხვი'))

let counter = 0
for (let i = 1; i <= userNum; i++) {
    if (userNum % i === 0) counter++
}
let prime = ''
counter === 1
    ? (prime = `${userNum} არც მარტივია არც შედგენილი `)
    : counter === 2
    ? (prime = `${userNum} მარტივი რიცხვია`)
    : (prime = `${userNum} შედგენილი რიცხვია`)

console.log(prime)

function padIt(str, n) {
    while (n > 0) {
        if (n % 2 === 0) {
            str = str + '*'
        } else {
            str = '*' + str
        }
        n--
    }
    return str
}

console.log(padIt('a', 1))
console.log(padIt('a', 2))
console.log(padIt('a', 3))
console.log(padIt('a', 5))



function grabDoll(dolls) {
    const bag = []
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
            bag.push(dolls[i])
            if (bag.length >= 3) {
                break
            }
            continue
        }
    }

    return bag
}

// prettier-ignore
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white",'Hello Kitty','Hello Kitty',"Barbie doll","Barbie doll","Barbie doll","Barbie doll","Barbie doll"]));


// length of the key === 5 => push key

function giveMeFive(obj) {
    const result = []
    for (let key in obj) {
        const element = obj[key]
        if (key.length === 5) result.push(key)
        if (element.length === 5) result.push(element)
    }
    return result
}

console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }))
console.log(
    giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' }),
)

function toHex(n) {
    let result = n.toString(16)
    return result.length === 1 ? '0' + result : result
}

function colorOf(r, g, b) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

console.log(colorOf(255, 0, 0))
console.log(colorOf(0, 111, 0))
console.log(colorOf(1, 2, 3))


const howManySmaller = function (arr, n) {
    let count = 0
    arr.map((num) => (Number(num.toFixed(2)) < n ? count++ : count))
    return count
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24))
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19))



const cutIt = function (arr) {
    const shortLength = arr.map((item) => item.length)
    return arr.map((word) => word.slice(0, Math.min(...shortLength)))
}

console.log(cutIt(['codewars', 'javascript', 'java']))

function firstToLast(str, c) {
    return str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}

console.log(firstToLast('ababc', 'a'))
console.log(firstToLast('ababc', 'c'))
console.log(firstToLast('ababc', 'd'))




function splitAndMerge(string, separator) {
    return string
        .split(' ')
        .map((word) => word.split('').join(separator))
        .join(' ')
}

console.log(splitAndMerge('My name is John', '-'))
console.log(splitAndMerge('Hello World!', '.'))



function alienLanguage(str) {
    let splited = str.toUpperCase().split(' ')
    for (let i = 0; i < splited.length; i++) {
        splited[i] =
            splited[i].slice(0, -1) + splited[i].slice(-1).toLowerCase()
    }
    return splited.join(' ')
}

console.log(alienLanguage('My name is John')) //"My NAMe Is JOHn"

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price) {
    let freeMangoes = Math.floor(quantity / 3)
    return (quantity - freeMangoes) * price
}

console.log(mango(3, 3))
console.log(mango(2, 3))
console.log(mango(5, 3))
console.log(mango(9, 5))



function calculateAge(n1, n2) {
    return n1 < n2
        ? `You are ${
              n2 - n1 === 1 ? `${n2 - n1} year` : `${n2 - n1} years`
          } old.`
        : n1 === n2
        ? `You were born this very year!`
        : `You will be born in ${
              n1 - n2 === 1 ? `${n1 - n2} year` : `${n1 - n2} years`
          }.`
}

console.log(calculateAge(1991, 1990))
console.log(calculateAge(2012, 2016))
console.log(calculateAge(2013, 2016))

function sayHello(name, city, state) {
    let fullName = name.join(' ')
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))


const addLength = (str) => str.split(' ').map((w) => `${w} ${w.length}`)

console.log(addLength('apple ban'))
console.log(addLength('you will win'))


const cockroachSpeed = (speedInKmPerHour) => {
    let speedInCmPerSec = (speedInKmPerHour * 1000 * 100) / 3600
    return Math.floor(speedInCmPerSec)
}

console.log(cockroachSpeed(1.08))



const findNextSquare = (sq) => {
    let squared = Math.sqrt(sq)
    if (Number.isInteger(squared)) {
        squared++
        return squared ** 2
    } else {
        return -1
    }
}

console.log(findNextSquare(625))
console.log(findNextSquare(155))
console.log(findNextSquare(121))




const longestConsec = function (strArr, k) {
    let result = ''
    let maxLength = 0
    if (k <= 0 || k > strArr.length) {
        return result
    }
    for (let i = 0; i <= strArr.length - k; i++) {
        let currentSequence = strArr.slice(i, i + k).join('')
        let currentLength = currentSequence.length
        if (currentLength > maxLength) {
            maxLength = currentLength
            result = currentSequence
        }
    }
    return result
}

// prettier-ignore
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
// prettier-ignore
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));



const twoSort = function (s) {
    let result = ''
    const firstElement = s.sort()[0]

    for (let i = 0; i < firstElement.length; i++) {
        result +=
            i === firstElement.length - 1
                ? firstElement[i]
                : firstElement[i] + '***'
    }
    return result
}

// prettier-ignore
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
// prettier-ignore
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));



const shortCut = function (string) {
    return string
        .split('')
        .filter((w) => w.replace(/[aeiou]/, ''))
        .join('')
}

console.log(shortCut('hello'))
console.log(shortCut('how are you today?'))



// find max word by alphabetical numeric
const high = function (x) {
    const arrayStr = x.toLowerCase().split(' ')
    let maxScore = 0
    let maxWord = ''

    for (const word of arrayStr) {
        let score = 0
        for (let i = 0; i < word.length; i++) {
            score += word.charCodeAt(i) - 'a'.charCodeAt(0) + 1
        }
        if (score > maxScore) {
            maxScore = score
            maxWord = word
        }
    }

    return maxWord
}

console.log(high('man i need a taxi up to ubud'))


// find average
const findAverage = (nums) =>
    nums.reduce((total, cur) => total + cur, 0) / nums.length

console.log(findAverage([1, 3, 5, 7]))



const sunday = [6737, 7244],
    monday = [9175, 7883],
    tuesday = [8646, 6945],
    wednesday = [6353, 9605],
    thursday = [6149, 6439],
    friday = [5000, 5642],
    saturday = [5448, 8041]

var stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
// function stairsIn20(s) {
//     let sum = 0
//     for (const stair of s) sum += stair.reduce((total, acc) => total + acc, 0)
//     return sum * 20
// }

const stairIs = (s) =>
    s.reduce((t, n) => t + n.reduce((a, c) => a + c, 0), 0) * 20

console.log(stairIs(stairs))


const sortArray = (array) => {
    const oddNums = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b)
    return array.map((num) => (num % 2 !== 0 ? oddNums.shift() : num))
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // result [1, 3, 2, 8, 5, 4]


function remove(string) {
    return string.replace(/!+$/, '')
}

console.log(remove('Hi!'))
console.log(remove('Hi!!!'))
console.log(remove('!Hi'))
console.log(remove('!Hi!'))



const getEvenNumbers = (numbersArray) =>
    numbersArray.filter((num) => !(num % 2))

console.log(
    getEvenNumbers([30, 82, 55, 82, 60, 94, 32, 60, 55, 0, 70, 8, 90, 23, 46]),
)


// sum array element without highest and lowest element

const sumArray = (array) => {
    let max = array[0]
    let min = array[0]

    for (let i = 0; i < array.length; i++) {
        ;(max < array[i] && (max = array[i])) ||
            (min > array[i] && (min = array[i]))
    }
    array.splice(array.indexOf(max), 1)
    array.splice(array.indexOf(min), 1)

    return array.reduce((total, curr) => total + curr, 0)
}

console.log(sumArray([6, 2, 1, 8, 10]))


// a * (b + c)
// a * b * c
// a + b * c
// (a + b) * c

function expressionMatter(a, b, c) {
    let one = a * (b + c),
        two = a * b * c,
        three = a + b * c,
        four = (a + b) * c,
        five = a + b + c

    const result = [one, two, three, four, five]
        .sort((a, b) => a - b)
        .slice(-1)
        .join()
    return Number(result)
}

console.log(expressionMatter(2, 1, 2))
console.log(expressionMatter(6, 7, 1))
console.log(expressionMatter(3, 5, 7))
console.log(expressionMatter(10, 5, 6))
console.log(expressionMatter(1, 1, 1))



// sum od difference
const sumOfDifferences = (arr) => {
    const des = arr.sort((a, b) => b - a).map((item) => -item)
    let sum = 0

    for (let i = 0; i < des.length - 1; i++) {
        sum += des[i] - des[i + 1]
    }

    return Math.abs(sum)
}

console.log(sumOfDifferences([1, 2, 10]))
console.log(sumOfDifferences([-17, 17]))
// console.log(sumOfDifferences([]))


function warnTheSheep(queue) {
    let text = ''
    let index
    if (queue.length === 1 || queue.length === 0)
        return 'Pls go away and stop eating my sheep'
    if (queue.length > 1) {
        for (let i = 0; i < queue.length; i++) {
            if (queue[i] === 'wolf') index = i + 1
            let position = queue.length - index
            if (position > 0) {
                text = `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
            } else {
                text = 'Pls go away and stop eating my sheep'
            }
        }
    }
    return text
}

//prettier-ignore
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])); //"Oi! Sheep number 2! You are about to be eaten by a wolf!"
console.log(warnTheSheep(['sheep', 'sheep', 'wolf'])) //"Pls go away and stop eating my sheep"
console.log(warnTheSheep(['wolf'])) //"Pls go away and stop eating my sheep"

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two

function predictAge(...ages) {
    return Math.floor(
        ages.map((item) => item ** 2).reduce((total, cur) => total + cur, 0) **
            (1 / 2) /
            2,
    )
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

function sumOfMinimums(arr) {
    const minValues = []
    for (let [_, num] of arr.entries()) {
        minValues.push(num.sort((a, b) => a - b)[0])
    }
    return minValues.reduce((t, c) => t + c, 0)
}

console.log(
    sumOfMinimums([
        [11, 12, 14, 54],
        [67, 89, 90, 56],
        [7, 9, 4, 3],
        [9, 8, 6, 7],
    ]),
)

const noOdds = (values, array = []) =>
    values.filter((num) => !(num % 2) && array.push(num))

console.log(noOdds([0, 1, 2, 3]))


const twoDecimalPlaces = (n) => +n.toFixed(2)

console.log(twoDecimalPlaces(4.659725356))

const hexToDec = (hexString) => parseInt(hexString, 16)

console.log(hexToDec('a'))


const position = (letter) => `Position of alphabet: ${letter.charCodeAt() - 96}`

console.log(position('a'))
console.log(position('z'))
console.log(position('e'))


// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:

// 1) The first letter must be converted to its ASCII code.

// 2) The second letter must be switched with the last letter

// 3) Keepin' it simple: There are no special characters in the input.

const encryptThis = (text) => {
    const splitText = text.split(' ')
    let encryptedText = ''

    for (let word of splitText) {
        const charCode = word[0].charCodeAt()
        if (word.length === 1) {
            encryptedText += `${charCode} `
        } else if (word.length === 2) {
            encryptedText += `${charCode}${word[1]} `
        } else {
            encryptedText += `${charCode}${word[word.length - 1]}${word.slice(
                2,
                word.length - 1,
            )}${word[1]} `
        }
    }

    return encryptedText.trim()
}

console.log(encryptThis('A wise old owl lived in an oak')) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis('The more he saw the less he spoke')) // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"


const evenNumbers = (array, number) => {
    const result = array.filter((n) => n % 2 === 0)
    return result.slice(result.length - number)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) //[4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) //[-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))

const factorial = (n) => {
    let multiply = 1
    if (n > 0) {
        for (let i = n; i > 0; i--) multiply *= i
        return multiply
    }
}

// console.log(factorial(0))
// console.log(factorial(2))
console.log(factorial(-3))
console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))



const largestPairSum = (numbers) => {
    let max1 = Math.max(...numbers)

    numbers.splice(numbers.indexOf(max1), 1)

    let max2 = Math.max(...numbers)

    return max1 + max2
}

// console.log(largestPairSum([10, 14, 2, 23, 19]))
console.log(largestPairSum([-100, -29, -24, -19, 19]))


function pipeFix(numbers) {
    const fixed = []

    for (let i = numbers.at(0); i <= numbers.at(-1); i++) fixed.push(i)

    return fixed
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
// console.log(pipeFix([1, 2, 3, 12]))


const counter = (count) => {
    let result = []
    let sum = 0

    for (let i = 0; i <= count; i++) {
        sum += i
        result.push(i)
    }

    if (result.length > 1) return `${result.join('+')} = ${sum}`
    else if (count === 0) return `${count}=${sum}`
    else if (count < 0) return `${count}<${sum}`
}

console.log(counter(22))
console.log(counter(0))
console.log(counter(-15))



function gooseFilter(birds) {
    const geese = [
        'African',
        'Roman Tufted',
        'Toulouse',
        'Pilgrim',
        'Steinbacher',
    ]

    return birds.filter((bird) => !geese.includes(bird))
}

console.log(
    gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
    ]),
)


Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ მასივს, და ეს ფუნქცია 
შეავსებს მასივს 20 ცალი რენდომული რიცხვით. დააბრუნეთ ეს მასივი
function getArray(array) {
    for (let i = 0; i < 20; i++) {
        array.push(Math.round(Math.random() * 20) + 1)
    }

    return array
}

console.log(getArray([]))


Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ მასივს და რაოდენობას, 
და ეს ფუნქცია შეავსებს მასივს იმ რაოდენობის რენდომ რიცხვით რაც არგუმენტად გადაეცით. 
დააბრუნეთ ეს მასივი.

function getArrayOf(arr, count) {
    for (let i = 0; i < count; i++) {
        arr.push(Math.round(Math.random() * count))
    }

    return arr
}

console.log(getArrayOf([], 29))


Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ 20 ცალი 
რენდომული რიცხვისგან შევსებულ მასივს და ეს ფუნქცია დაბეჭდავს ამ მასივში 
მოთავსებულ ყველა ლუწ რიცხვს
const randomArray = []

for (let i = 1; i < 20; i++) {
    randomArray.push(Math.round(Math.random() * 20))
}

function getEven(array) {
    const result = []
    for (let i = 1; i < array.length; i++) {
        !(array[i] % 2) && result.push(array[i])
    }

    return result
}

console.log(getEven(randomArray))


*დაწერეთ ფუნქცია, რომელსაც გადააწვდით მასივს და რიცხვს და ის დაგიბრუნებთ მასივის ინდექსებს, 
რომლეთა ჯამითაც მიიღება ეს რიცხვი(მაგ: [2,3,6,9,5] და რიცხვი 11. 
უნდა დააბრუნოს თქვენმა ფუნქციამ 2 და 4.

function twoSumIndex(array, target) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i]
        let index = array.indexOf(complement)
        if (index !== -1 && index !== i) {
            newArray.push([i, index])
        }
    }

    return newArray.flat()
}

console.log(twoSumIndex([2, 3, 6, 9, 5], 11))


let array = [1, 2, 5, 10, 15]
let n = array.length

function findMissingArray(arr, N) {
    let i
    let temp = []
    for (i = 0; i <= N; i++) {
        temp[i] = 0
    }

    for (i = 0; i < N; i++) {
        temp[arr[i] - 1] = 1
    }

    let ans = 0
    for (i = 0; i <= N; i++) {
        if (temp[i] == 0) ans = i + 1
    }

    return ans
}

console.log(findMissingArray(array, n))


function expandedForm(num) {
    let numStr = num.toString()
    let numArr = numStr.split('')
    let expanded = []

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== '0') {
            expanded.push(numArr[i] + '0'.repeat(numStr.length - i - 1))
        }
    }

    return expanded.join(' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))



function vowelIndices(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const wordArray = word.toLowerCase().split('')
    const vowelIndex = []

    for (const v of vowels) {
        for (let i = wordArray.length; i >= 0; i--) {
            if (wordArray[i] === v) {
                vowelIndex.push(i + 1)
            }
        }
    }

    return vowelIndex.sort((a, b) => a - b)
}

// console.log(vowelIndices('apple'))
// console.log(vowelIndices('super'))
console.log(vowelIndices('gecBcwtEoCJdemYvLrvDJLIWAB'))


const findLongest = (array) => {
    let num = '0'
    for (let i = 0; i < array.length; i++) {
        let string = array[i].toString()
        if (string.length > num.length) {
            num = string
        }
    }
    return parseInt(num)
}

console.log(findLongest([9003, 9002, 8, 800]))
console.log(findLongest([8, 900, 500]))



// prettier-ignore
const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// prettier-ignore
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

function dataReverse(data) {
    let segmentLength = 8
    let reversedData = []

    for (let i = 0; i < data.length; i += segmentLength) {
        let segment = data.slice(i, i + segmentLength)
        reversedData.push(segment)
    }

    return reversedData
        .reverse()
        .map((item) => item.reverse())
        .flat()

    // return data.reverse()
}

console.log(dataReverse(data1))


function spEng(sentence) {
    const toLower = sentence.toLowerCase()
    let charCode = []
    let eng = 'english'

    for (let char of toLower) {
        const charCodes = char.charCodeAt()
        charCode.push(charCodes)
    }

    let eng2 = charCode.map((char) => String.fromCharCode(char)).join('')

    return eng2.includes(eng)
}

console.log(spEng('english'))
console.log(spEng('egnlish'))
console.log(spEng('abcnEglishdef'))



function alphabetWar(fight) {
    let left = 'Left side wins!',
        right = 'Right side wins!',
        other = "Let's fight again!"

    let leftScores = 0
    let rightScores = 0

    for (const char of fight) {
        if (char === 'w') {
            leftScores += 4
        } else if (char === 'p') {
            leftScores += 3
        } else if (char === 'b') {
            leftScores += 2
        } else if (char === 's') {
            leftScores += 1
        } else if (char === 'm') {
            rightScores += 4
        } else if (char === 'q') {
            rightScores += 3
        } else if (char === 'd') {
            rightScores += 2
        } else if (char === 'z') {
            rightScores += 1
        }
    }

    return leftScores > rightScores
        ? left
        : leftScores === rightScores
        ? other
        : right
}
console.log(alphabetWar('zdqmwpbs'))
console.log(alphabetWar('z'))
console.log(alphabetWar('zzzzs'))



function wordsToMarks(string) {
    let result = 0
    for (let char of string) {
        result += char.charCodeAt() - 96
    }

    return result
}

console.log(wordsToMarks('attitude'))
console.log(wordsToMarks('friends'))



function encode(string) {
    let replaceStr = ''
    for (const char of string) {
        if (char === 'a') replaceStr += 1
        if (char === 'e') replaceStr += 2
        if (char === 'i') replaceStr += 3
        if (char === 'o') replaceStr += 4
        if (char === 'u') replaceStr += 5
        else if (
            char !== 'a' &&
            char !== 'e' &&
            char !== 'i' &&
            char !== 'o' &&
            char !== 'u'
        ) {
            replaceStr += char
        }
    }

    return replaceStr
}

function decode(string) {
    let replace = ''
    for (const char of string) {
        if (char === '1') replace += 'a'
        if (char === '2') replace += 'e'
        if (char === '3') replace += 'i'
        if (char === '4') replace += 'o'
        if (char === '5') replace += 'u'
        else if (
            char !== '1' &&
            char !== '2' &&
            char !== '3' &&
            char !== '4' &&
            char !== '5'
        ) {
            replace += char
        }
    }

    return replace
}

console.log(encode('hello'))
console.log(decode('h2ll4'))




function meeting(s) {
    const strToArray = s.toUpperCase().split(';')
    const reversedNames = []
    let result = ''

    for (let name of strToArray) {
        const reversed = name.split(':').reverse()
        reversedNames.push(reversed)
    }

    const sortedNames = reversedNames
        .join(':')
        .split(':')
        .sort()
        .map((name) => `(${name})`)

    for (let name of sortedNames) {
        const final = name.split(' ')[0].split(',').join(', ')
        result += final
    }

    return result
}

//prettier-ignore
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));

// "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)

// Find nearest square root 
const nearestSq1 = (n) => {
    const perfectSqrt = n ** (1 / 2)
    if (!Number.isInteger(perfectSqrt)) {
        while (Math.sqrt(n) % 1 !== 0) {
            if (n > 100) n++
            else n--
        }
        return n
    } else {
        return n
    }
}

const nearestSq2 = (n) => Math.pow(Math.round(Math.sqrt(n)), 2)

console.log(nearestSq1(111))
console.log(nearestSq1(9999))
console.log(nearestSq2(121))
console.log(nearestSq2(2))



const sumPairs = (ints, s) => {
    const map = new Map()
    for (let i = 0; i < ints.length; i++) {
        const subtraction = s - ints[i]
        if (map.has(subtraction)) {
            return [subtraction, ints[i]]
        }
        map.set(ints[i], i)
        console.log(map)
    }
    return undefined
}

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)) //   result  [1, 7]
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)) // result  [0, -6]
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) //  result  [3, 7]
console.log(sumPairs([2, 3, 6, 9, 5], 11))




const vertMirror = (str) =>
    str
        .split('\n')
        .map((words) => words.split('').reverse().join(''))
        .join('\n')

const horMirror = (str) => str.split('\n').reverse().join('\n')

function oper(fct, s) {
    return fct(s)
}

// console.log(oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'))
console.log(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt'))

function sumMul(n, m) {
    let sum = 0
    if (n <= 0 || m <= 0) return 'INVALID'
    else {
        for (let i = n; i < m; i += n) {
            sum += i
        }
    }
    return sum
}

console.log(sumMul(2, 9))


function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}

console.log(derive(7, 8))
console.log(derive(5, 9))


// 1) find max and min
// 2) mulitply max and min
// 3) and sum the result

function minSum(arr) {
    arr.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - 1 - i]
        //  პირველ დატრიალებაზე i არის 0 ამიტომ arr.length - 1 - i გამოდის arr.length - 1 ანუ ბოლო ელემენტი , რადგან შევკვეცეთ მასივის სიგრძე i ორჯერ დატრიალდება პირველი ნახევრისთვის რაც არის arr[i] 0 და 1 ხოლო ამავდროულად მეორენახევრისთვისაც დატრიალდება ორჯერ რადროსაც იქნება arr[arr.length - 1 - i] ანნუ i პირველდატრიალებაზე 0 ია ხოლო მასივს გამოაკლდება 1 - 0 ამიტომ გამოდის ბოლო ელემენტი ხოლო მეორე დატრიალებაზე i არის 1 ამიტომ მასივს გამოაკლდება სიგრძეს 1 - 1 ანუ სიგრძეს ორჯერ გამოაკლდება 1 იანი ამიტომ გამოვა ბოლოსწინა ელემენტი ამშემთხვევაში => 5 და 4
    }
    // return sum
}

console.log(minSum([5, 4, 2, 3])) // 22
// console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])) // 74



//  ვიპოვოთ ელემენტების ნამრავლის მაქსიმუმი შედეგი
function adjacentElementsProduct(array) {
    const result = []
    for (let i = 0; i < array.length - 1; i++) {
        result.push(array[i] * array[i + 1])
    }
    return Math.max(...result)
}

console.log(adjacentElementsProduct([1, 5, 10, 9])) // 90
console.log(adjacentElementsProduct([5, 8])) // 40
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])) // 6



function maxProduct(numbers, size) {
    const sorted = numbers.sort((a, b) => b - a)
    sorted.splice(size)
    let result = 1

    for (let i = 0; i < sorted.length; i++) {
        result *= sorted[i]
    }

    return result
}

console.log(maxProduct([10, 8, 7, 9], 3))
console.log(maxProduct([8, 6, 4, 6], 3))


function maxGap(numbers) {
    const complement = []
    const sorted = numbers.sort((a, b) => b - a)

    for (let i = 0; i < sorted.length - 1; i++) {
        complement.push(sorted[i] - sorted[i + 1])
    }

    return Math.max(...complement)
}

console.log(maxGap([13, 10, 2, 9, 5]))
console.log(maxGap([13, 3, 5]))


const productArray = (numbers) => {
    const n = numbers.length
    const result = new Array(n).fill(1)

    let leftProduct = 1
    let rightProduct = 1

    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct
        leftProduct *= numbers[i]
    }

    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct
        rightProduct *= numbers[i]
    }

    return result
}

console.log(productArray([3, 27, 4, 2])) // [216,24,162,324]

function nthSmallest(arr, pos) {
    const sorted = arr.sort((a, b) => a - b)
    sorted.splice(pos)
    return sorted.at(-1)
}

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3))
console.log(nthSmallest([-5, -1, -6, -18], 4))


function maxTriSum(numbers) {
    let filtered = [...new Set(numbers)]
    let maxArray = []

    let firstMax = Math.max(...filtered)
    filtered.splice(filtered.indexOf(firstMax), 1)

    let secondMax = Math.max(...filtered)
    filtered.splice(filtered.indexOf(secondMax), 1)

    let thirdMax = Math.max(...filtered)
    filtered.splice(filtered.indexOf(thirdMax), 1)

    maxArray.push([firstMax, secondMax, thirdMax])

    return maxArray.flat().reduce((total, cur) => total + cur, 0)
}

// console.log(maxTriSum([3, 2, 6, 8, 2, 3]))
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]))

*/
