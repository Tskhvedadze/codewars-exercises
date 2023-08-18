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

  const numbers = str.split(' ');

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


function balancedNum(number) {
    const numsArray = number
        .toString()
        .split('')
        .map((num) => Number(num))

    const length = numsArray.length
    let balance = '',
        firstHalf,
        secondHalf,
        firstSum,
        secondSum

    if (length <= 1 || (length > 1 && length <= 3)) {
        if (length === 3 && numsArray[0] !== numsArray[2]) return 'Not Balanced'
        else return 'Balanced'
    }

    if (length > 3) {
        if (length % 2 === 0) {
            firstHalf = numsArray.slice(0, length / 2 - 1)
            secondHalf = numsArray.slice(length / 2 + 1)

            firstSum = firstHalf.reduce((a, b) => a + b, 0)
            secondSum = secondHalf.reduce((a, b) => a + b, 0)

            firstSum === secondSum
                ? (balance += 'Balance')
                : (balance += 'Not Balance')
        }
        if (length % 2 !== 0) {
            firstHalf = numsArray.slice(0, length / 2)
            secondHalf = numsArray.slice(length / 2 + 1)

            firstSum = firstHalf.reduce((a, b) => a + b, 0)
            secondSum = secondHalf.reduce((a, b) => a + b, 0)

            firstSum === secondSum
                ? (balance += 'Balance')
                : (balance += 'Not Balance')
        }
    }

    return balance
}

console.log(balancedNum(7)) //   "Balanced"
console.log(balancedNum(13)) //  "Balanced"
console.log(balancedNum(959)) // "Balanced"

function nthSmallest(arr, pos) {
    const sorted = arr.sort((a, b) => a - b)
    const indexOfPos = sorted.slice(0, pos)

    return indexOfPos.at(-1)
}

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 5))


const factorial = (n) => {
    if (n === 1 || n === 0) return 1
    else return n * factorial(n - 1)
}

const strong = (n) => {
    const numsArray = n.toString().split('')
    const factorialsArray = []
    let str = 'STRONG!!!!'
    for (let i = 0; i < numsArray.length; i++) {
        const element = Number(numsArray[i])
        factorialsArray.push(factorial(element))
    }
    const result = factorialsArray.reduce((total, cur) => total + cur, 0)

    return result === n ? str : (str = 'Not Strong !!')
}

console.log(strong(40585))


const disariumNumber = (n) => {
    const numsArray = n
        .toString()
        .split('')
        .map((num) => Number(num))

    const disariumArray = []
    let str = 'Disarium !!'

    for (let i = 0; i < numsArray.length; i++) {
        const element = numsArray[i]
        disariumArray.push(element ** (1 + i))
    }
    const result = disariumArray.reduce((total, cur) => total + cur, 0)

    return result === n ? str : (str = 'Not !!')
}
console.log(disariumNumber(89))
console.log(disariumNumber(564))

function specialNumber(n) {
    if (n <= 5) return 'Special!!'
    if (n >= 6 && n <= 9) return 'NOT!!'
    if (n > 9) {
        const digits = n
            .toString()
            .split('')
            .map((n) => Number(n))
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] < 0 || digits[i] > 5) return 'NOT!!'
        }
        return 'Special!!'
    }
}

console.log(specialNumber(5))
console.log(specialNumber(9))
console.log(specialNumber(10))
console.log(specialNumber(67))

const automorphic = (n) => {
    const square = n ** 2
    const strN = n.toString()
    const strSquare = square.toString()
    const strMatch = strSquare.slice(-strN.length)
    return strN === strMatch ? 'Automorphic' : 'Not!!'
}

console.log(automorphic(25))
console.log(automorphic(76))
console.log(automorphic(13))



function extraPerfect(n) {
    const perfectsArray = []

    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            perfectsArray.push(i)
        }
    }

    return perfectsArray
}

console.log(extraPerfect(7))



function tidyNumber(n) {
    const numsArray = n
        .toString()
        .split('')
        .map((n) => Number(n))

    let tidy = true
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] > numsArray[i + 1]) tidy = false
    }
    return tidy
}

console.log(tidyNumber(12))
console.log(tidyNumber(102))
console.log(tidyNumber(9672))
console.log(tidyNumber(2335))


function primorial(n) {
    let primeNumbers = [] // array to store prime numbers
    let count = 0 // variable to keep track of the number of prime numbers found
    let product = 1 // variable to store the product of the prime numbers

    // loop until we find the first n prime numbers
    for (let i = 2; count < n; i++) {
        let isPrime = true

        // check if i is prime
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }

        // if i is prime, add it to the array and update the product
        if (isPrime) {
            primeNumbers.push(i)
            product *= i
            count++
        }
    }

    return product
}

console.log(primorial(8)) // 9699690



function jumpingNumber(n) {
    const numsArray = n
        .toString()
        .split('')
        .map((n) => parseInt(n))

    const len = numsArray.length

    if (len === 1) return 'Jumping!!'
    if (len === 2) {
        if (Math.abs(numsArray[0] - numsArray[1]) === 1) return 'Jumping!!'
        else return 'Not!!'
    }

    if (len > 2) {
        let counter = 1
        while (
            Math.abs(numsArray[counter] - numsArray[counter - 1]) === 1 &&
            Math.abs(numsArray[counter] - numsArray[counter + 1]) === 1
        ) {
            counter++
        }
        return counter === len - 1 ? 'Jumping!!' : 'Not!!'
    }
}

console.log(jumpingNumber(79))
console.log(jumpingNumber(8987))


function sumCubes(n) {
    const numsArray = []

    for (let i = 1; i <= n; i++) {
        numsArray.push(i)
    }

    const cubes = numsArray.map((n) => n ** 3)

    return cubes.reduce((total, cur) => total + cur, 0)
}

console.log(sumCubes(3))


const feast = (beast, dish) =>
    beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)

console.log(feast('great blue heron', 'garlic naan'))

const lowercaseCount = (str) => {
    const lowercaseArray = str.match(/[a-z]/g)
    return lowercaseArray ? lowercaseArray.length : 0
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"))



function isSortedAndHow(array) {
    let isAscending = true
    let isDescending = true
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            isDescending = false
        } else if (array[i] < array[i - 1]) {
            isAscending = false
        }
    }
    if (isAscending) {
        return 'yes, ascending'
    } else if (isDescending) {
        return 'yes, descending'
    } else {
        return 'no'
    }
}

console.log(isSortedAndHow([15, 7, 3, -8]))
// console.log(isSortedAndHow([1, 2]))

// console.log(isSortedAndHow([4, 2, 30]))


function digits(n) {
    return (n && n.toString().split('').length) || 1
}

console.log(digits(12345))
console.log(digits(9))


function generateShape(integer) {
    let shapes = ''
    let space = []

    for (let i = 1; i <= integer; i++) {
        shapes += '+'
    }

    for (let i = 1; i <= integer; i++) {
        space.push(shapes)
    }

    return space.join('\n')
}

console.log(generateShape(8))



function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n))
}

console.log(isPowerOfTwo(536870912))


function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numbers[j] + numbers[i] === target) return [j, i]
        }
    }
}

console.log(
    twoSum(
        [
            416, -830, -709, -634, 126, -514, 4, 297, -888, 681, 348, 463, -672,
            -776, 298, -270, -454, -212, 158, -265, -170, 11, 386, -601, -925,
            -745, 415, 77, -218, 810, -9, 527, 509, 398, 951, -70, 870, 398,
            194, -774, -532, 816, -869, -61, 856, -738, 695, -530, 479, 864,
            -177, 505, -256, 169, -787, 212, -122,
        ],
        695,
    ),
) //[7,33]

function count(string, obj = {}) {
    if (!string.length) return obj
    string.split('').map((item) => (obj[item] ? obj[item]++ : (obj[item] = 1)))
    return obj
}

console.log(count('abaaaab'))


function findOdd(A, obj = {}) {
    A.map((item) => (obj[item] ? (obj[item] += 1) : (obj[item] = 1)))

    const key = Object.keys(obj)
    const value = Object.values(obj)

    for (let i = 0; i < key.length; i++) {
        if (value[i] % 2 !== 0) return Number(key[i])
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(findOdd([7]))



function breakCamelCase(string) {
    const strToArray = string.split('')
    let word = ''

    for (let char of strToArray) {
        if (char >= 'A' && char <= 'Z') {
            word += `${' '}${char}`
        } else {
            word += char
        }
    }

    return word
}

console.log(breakCamelCase('camelCasing'))



function array(arr) {
    const array = [...arr].join('').split(',')
    const result = []
    if (result <= 2) return null

    for (let [i, num] of array.entries()) {
        if (i >= 1 && i < array.length - 1) {
            result.push(num)
        }
    }

    return result.join(' ')
}

console.log(array(''))




function remove(s, n) {
    let count = 0
    let result

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '!') count++
    }

    if (n >= count) {
        return s.replaceAll('!', '')
    } else {
        let result = s
        for (let i = 1; i <= n; i++) {
            result = result.replace('!', '')
        }
        return result
    }
}

console.log(remove('!!!Hi !!hi!!! !hi', 1))


function duplicateEncode(word) {
    const charCount = {}
    const lowerWord = word.toLowerCase()
    let result = ''

    for (let i = 0; i < lowerWord.length; i++) {
        const char = lowerWord[i]
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (let i = 0; i < lowerWord.length; i++) {
        const char = lowerWord[i]
        if (charCount[char] > 1) {
            result += ')'
        } else {
            result += '('
        }
    }

    return result
}

console.log(duplicateEncode('(( @')) // => ))((
console.log(duplicateEncode('din')) // => (((
console.log(duplicateEncode('recede')) // ()()()
console.log(duplicateEncode('Success')) // => )())())


const countChars = (string) => {
    const LENGTH = string.length
    const OBJECT = {}
    const COUNT_CHARACHTERS = {}
    for (let i = 0; i < LENGTH; i++) {
        const EL = string[i]
        if (EL !== ' ') OBJECT[EL] = (OBJECT[EL] || 0) + 1
    }

    for (let i = 0; i < LENGTH; i++) {
        const EL = string[i]
        if (OBJECT[EL] > 1) {
            COUNT_CHARACHTERS[EL] = (COUNT_CHARACHTERS[EL] || 0) + 1
        }
    }
    return COUNT_CHARACHTERS
}

function mix(s1, s2) {
    const FIRST_SENTENCE = countChars(s1)
    const SECOND_SENTENCE = countChars(s2)
    const LENGTH = s1.length + s2.length
    let result = ''

    for (let i = 1; i < LENGTH; i++) {
        const EL = s1[i]
        const EL2 = s2[i]
        if (
            FIRST_SENTENCE[EL] !== undefined &&
            SECOND_SENTENCE[EL2] !== undefined
        ) {
            console.log(SECOND_SENTENCE[EL])
        }
    }

    console.log(FIRST_SENTENCE)
}

console.log(mix('Are they here', 'yes, they are here')) // "2:eeeee/2:yy/=:hh/=:rr"

function switcheroo(x) {
    let replaced = ''

    for (let char of x) {
        if (char === 'a') {
            replaced += 'b'
        } else if (char === 'b') {
            replaced += 'a'
        } else {
            replaced += char
        }
    }

    return replaced
}

console.log(switcheroo('aaabcccbaaa')) // bbbacccabbb switch a's and b's postion


// Converting Number to binary 
function toBinary(n) {
    if (n === 0) return 0
    let binary = ''

    while (n > 0) {
        if (n % 2 !== 0) {
            binary = '1' + binary
        } else if (n % 2 === 0) {
            binary = '0' + binary
        }
        n = Math.floor(n / 2)
    }

    return parseInt(binary, 10)
}

console.log(toBinary(4)) // 101

// Draft is total ship wight
// Crew is total number of humans in the ship

class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }
    isWorthIt() {
        const unit = 1.5
        const removedDraft = this.draft && this.crew && this.draft - this.crew * unit

        return removedDraft && removedDraft > 20 ? true : false
    }
}


let emptyShip = new Ship(0, 0)
let aWorthyShip = new Ship(100, 20)

console.log(aWorthyShip.isWorthIt())
console.log(emptyShip.isWorthIt())

function solution(number) {
    const countArray = []

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            countArray.push(i)
        }
    }

    return countArray.reduce((total, curr) => total + curr, 0)
}

console.log(solution(10))

function toNumberArray(stringarray) {
    return stringarray.map((value) => parseFloat(value))
}

console.log(toNumberArray(['1.1', '2.2', '3.3']))


// First Solution
// function bump(x) {
//     let bumps = 0

//     for (let n of x) {
//         n === 'n' && bumps++
//     }

//     return bumps <= 15 ? 'Woohoo!' : 'Car Dead'
// }

//  Second Solution
const bump = (x) =>
    x.split('').filter((bumps) => bumps === 'n').length <= 15
        ? 'Woohoo!'
        : 'Car Dead'

// return bumps <= 15 ? 'Woohoo!' : 'Car Dead'
console.log(bump('nnn_n__n_n___nnnnn___n__nnnn__'))


function countRedBeads(n) {
    let beads = '@@'
    const beadsArray = []

    for (let i = 1; i < n; i++) {
        beadsArray.push(beads)
    }

    return beadsArray.join('').split('').length
}

console.log(countRedBeads(5))


const sortGiftCode = (code) => code.split('').sort().join('')

console.log(sortGiftCode('pqksuvy')) // 'kpqsuvy'


function dataReverse(data) {
    let segmentLength = 8
    let reversedData = []

    for (let i = 0; i < data.length; i += segmentLength) {
        let segment = data.slice(i, i + segmentLength)
        reversedData.push(segment)
    }

    return reversedData.reverse().flat()
}

// prettier-ignore
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))


function contamination(text, char) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        result += char
    }

    return result
}

console.log(contamination('abc', 'z'))


Object.defineProperty(Array.prototype, 'containsAll', {
    value: function containsAll(a) {
        let contain = false

        a.every((el) => this.includes(el)) && (contain = true)

        return contain
    },
})

const items1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const items2 = []

console.log(items1.containsAll([1, 2, 3, 4, 5]))
console.log(items1.containsAll([9, 2, 5, 4, 10]))
console.log(items1.containsAll([12, 15]))
console.log(items2.containsAll([12, 15]))



function isDigit(s) {
    return s == parseFloat(s)
}

console.log(isDigit('s2324'))
console.log(isDigit('-234.4'))


function cubeOdd(arr) {
    for (let num of arr) {
        if (typeof num !== 'number') return undefined
    }

    return arr
        .map((num) => num ** 3)
        .filter((num) => num % 2)
        .reduce((total, cur) => total + cur, 0)
}

console.log(cubeOdd([1, 2, 3, 4]))
console.log(cubeOdd(['a', 12, 9, 'z', 42]))


('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'


function defineSuit(card) {
    let result = ''
    for (let char of card) {
        if (char === '♣') result += 'clubs'
        if (char === '♦') result += 'diamonds'
        if (char === '♥') result += 'hearts'
        if (char === '♠') result += 'spades'
    }
    return result
}

console.log(defineSuit('Q♠'))
console.log(defineSuit('9♦'))
console.log(defineSuit('J♥'))


square(), cube(), average(), sum(), even() and odd()



Array.prototype.square = function () {
    return this.map((num) => num ** 2)
}
Array.prototype.cube = function () {
    return this.map((num) => num ** 3)
}
Array.prototype.average = function () {
    return this.reduce((total, cur) => total + cur, 0) / this.length
}
Array.prototype.sum = function () {
    return this.reduce((total, cur) => total + cur, 0)
}
Array.prototype.even = function () {
    return this.filter((num) => !(num % 2))
}
Array.prototype.odd = function () {
    return this.filter((num) => num % 2)
}

const array = [1, 2, 3, 4, 5]

console.log(array.square())
console.log(array.cube())
console.log(array.sum())
console.log(array.average())
console.log(array.even())
console.log(array.odd())


function _if(bool, func1, func2) {
    if (bool) {
        return func1()
    } else {
        return func2()
    }
}

console.log(
    _if(
        false,
        function () {
            return 'True'
        },
        function () {
            return 'False'
        },
    ),
)

function countDivisors(n) {
    let count = 0
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (Math.floor(n / i) === i) count++
            else count += 2
        }
    }
    return count
}

const divNum = (a, b) => {
    const allNumbers = []
    const divisors = []
    if (a > b) return 'Error'
    for (let i = a; i <= b; i++) {
        if (!(i % 2)) {
            allNumbers.push(i)
        }
    }

    for (let i = 0; i < allNumbers.length; i++) {
        const elements = allNumbers[i]
        divisors.push(countDivisors(elements))
    }

    const index = divisors.indexOf(Math.max(...divisors))
    return allNumbers[index]
}

console.log(divNum(15, 30))

function solution(str) {
    const segments = 2
    const splitedOne = []
    const splitedTwo = []

    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i += segments) {
            splitedOne.push([str[i], str[i + 1]])
        }
        return splitedOne.map((char) => char.join(''))
    }

    if (str.length % 2 !== 0) {
        for (let i = 0; i < str.length; i += segments) {
            splitedTwo.push([str[i], str[i + 1]])
        }

        return splitedTwo.map((char) => {
            let word = ''
            for (let c of char) {
                if (c === undefined) {
                    word += '_'
                } else {
                    word += c
                }
            }

            return word
        })
    }
}

console.log(solution('abcdef'))
console.log(solution('abcdefg'))

const orderedCount = function (text) {
    let result = []
    for (let i = 0; i < text.length; i++) {
        let count = 0
        for (let j = 0; j < result.length; j++) {
            if (result[j][0] === text[i]) {
                count++
            }
        }
        if (count === 0) {
            for (let j = i; j < text.length; j++) {
                if (text[j] === text[i]) {
                    count++
                }
            }
            result.push([text[i], count])
        }
    }
    return result
}

console.log(orderedCount('abracadabra'))


function divCon(x) {
    const nonStringInt = x
        .filter((el) => typeof el !== 'string')
        .reduce((total, cur) => total + cur, 0)

    const stringInt = x
        .filter((el) => typeof el === 'string')
        .reduce((total, cur) => total + parseInt(cur), 0)

    return nonStringInt - stringInt
}

console.log(divCon([9, 3, '7', '3']))


function remove(string) {
    return (
        string
            .split('')
            .filter((char) => char !== '!')
            .join('') + '!'
    )
}

console.log(remove('Hi!!!'))


function multiplicationTable(N) {
    let table = []
    for (let i = 1; i <= N; i++) {
        let row = []
        for (let j = 1; j <= N; j++) {
            row.push(i * j)
        }
        table.push(row)
    }
    return table
}

console.log(multiplicationTable(3))


const safeInteger = (n) => Number.isSafeInteger(n)

console.log(safeInteger(9007199254740992))


function spacify(str) {
    let result = str.split('')

    const splited = result
        .map((char) => (char += ' '))
        .join('')
        .split('')
        .join('')

    return splited.slice(0, splited.length - 1)
}

console.log(spacify('hello world'))
console.log(spacify('12345'))




function pointsPer48(ppg, mpg) {
    let extrapolationOfPpg
    if (ppg === 0 || mpg === 0) extrapolationOfPpg = 0
    else {
        extrapolationOfPpg = (ppg / mpg) * 48
    }

    return Number(extrapolationOfPpg.toFixed(1))
}

console.log(pointsPer48(0, 0))
console.log(pointsPer48(12, 20))
console.log(pointsPer48(10, 10))



function reverse(str) {
    if (str.trim() === '') return ''

    let result = ''
    const arrayStr = str.split(' ')

    for (const [index, word] of arrayStr.entries()) {
        const newInd = index + 1

        if (newInd % 2 === 0) result += ` ${word.split('').reverse().join('')}`
        else result += ` ${word}`
    }
    return result.trim()
}

console.log(reverse('Reverse this string, please!'))
console.log(reverse('how are you'))


function foldTo(distance) {
    let paper = 0.0001
    let folds = 0
    if (distance < 0) {
        return null
    } else {
        while (distance > paper) {
            paper *= 2
            folds += 1
        }
    }
    return folds
}

console.log(foldTo(348000000))



function zero(fn) {
    return fn ? fn(0) : 0
}
function one(fn) {
    return fn ? fn(1) : 1
}
function two(fn) {
    return fn ? fn(2) : 2
}
function three(fn) {
    return fn ? fn(3) : 3
}
function four(fn) {
    return fn ? fn(4) : 4
}
function five(fn) {
    return fn ? fn(5) : 5
}
function six(fn) {
    return fn ? fn(6) : 6
}
function seven(fn) {
    return fn ? fn(7) : 7
}
function eight(fn) {
    return fn ? fn(8) : 8
}
function nine(fn) {
    return fn ? fn(9) : 9
}

function plus(n) {
    return function (v) {
        return v + n
    }
}
function minus(n) {
    return function (v) {
        return v - n
    }
}
function times(n) {
    return function (v) {
        return v * n
    }
}
function dividedBy(n) {
    return function (v) {
        return v / n
    }
}


function fuelPrice(litres, pricePerLitre) {
    if (litres >= 4) return litres * pricePerLitre - litres * 0.1
}

console.log(fuelPrice(5, 1.23))
console.log(fuelPrice(8, 2.5))
console.log(fuelPrice(5, 5.6))


const minNum = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i]
    }
    return min
}

const maxNum = (array) => {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i]
    }
    return max
}

const maxDiff = (list) => (list.length <= 1 ? 0 : maxNum(list) - minNum(list))

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))
console.log(maxDiff([]))
console.log(maxDiff([1]))



function rowWeights(array) {
    const teamOne = []
    const teamTwo = []

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) teamOne.push(array[i])
        else teamTwo.push(array[i])
    }

    return [
        teamOne.reduce((total, cur) => total + cur, 0),
        teamTwo.reduce((total, cur) => total + cur, 0),
    ]
}

console.log(rowWeights([50, 60, 70, 80]))
console.log(rowWeights([100, 51, 50, 100])) // [ 150, 151 ]

function reverse(int) {
    const string = int.toString()
    let result = ''
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i]
    }

    return result
}

console.log(reverse(311))

function shortString(string, shortTo) {
    if (string.length < shortTo) {
        return string
    }
    let result = ''
    let newResult = '.'
    for (let i = 0; i < string.length - shortTo; i++) {
        result += string[i]
    }

    for (let i = 0; i < string.length - shortTo; i++) {
        result += newResult
    }

    return result
}

console.log(shortString('complete', 4))
console.log(shortString('completecompletecompletecomplete', 10))

function showSentence(string, lens) {
    const strToArr = string.split(' ')
    const result = []

    for (let i = 0; i < lens; i++) {
        result.push(strToArr[i])
    }

    return result.join(' ')
}

console.log(showSentence('javascript is a good progrmaing language', 2))

function stringChoper(string, size) {
    const get = []
    let i = 0

    while (i < string.length) {
        get.push(string.slice(i, i + size))
        i = i + size
    }

    return get
}

console.log(stringChoper('javascript', 2))

const person = {
    firstName: 'John',
    lastName: 'Doe',
    family: {
        sister: { firstName: 'Dodo', lastName: 'Dodolast' },
        brother: {
            firstName: 'Dodo',
            lastName: 'Dodolast',
            child: {
                firstName: 'dodo-junior',
                lastName: 'dodo-junior-lastname',
            },
        },
    },
}

function getKeyValues(obj) {
    const result = []

    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const nestedKeyValues = getKeyValues(obj[key])
            result.push(
                ...nestedKeyValues.map((pair) => ({
                    key: `${key}.${pair.key}`,
                    value: pair.value,
                })),
            )
        } else {
            result.push({ key, value: obj[key] })
        }
    }

    return result
}
console.log(getKeyValues(person))

function uniTotal(string) {
  const asciiArray = []
  if (string === '') return 0
  if (string.length <= 1) return string.charCodeAt()
  else {
    for (let i = 0; i < string.length; i++) {
      asciiArray.push(string[i].charCodeAt())
    }
  }

  return asciiArray.reduce((a, b) => a + b, 0)
}

console.log(uniTotal('aaa'))

function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}

console.log(joinStrings('string1', 'string2'))


const isLowerCase = (str) =>
  str === str.toLowerCase() && str !== str.toUpperCase()
const isUpperCase = (string) => /^[A-Z]*$/.test(string)
const specialCharsRegex = /[^a-zA-Z0-9\s]/g
function solve(s) {
  let upper = 0
  let lower = 0
  let number = 0
  let special = 0

  for (let i = 0; i < s.length; i++) {
    if (isUpperCase(s[i])) upper++
    if (isLowerCase(s[i])) lower++
    if (!isNaN(s[i])) number++
    if (s[i].match(specialCharsRegex)) special++
  }

  return [upper, lower, number, special]
}

console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H')) // [9,9,6,9]
console.log(solve('aAbBcC'))
console.log(solve('Codewars@codewars123.com'))

const longestPalindrome = function (s) {
  let longest = 0
  let length = s.length

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      let str = s.slice(i, j)
      let l = str.length
      if (isPalindrome(str) && longest < l) {
        longest = l
      }
    }
  }
  return isPalindrome(s)
}

function isPalindrome(s) {
  let arr = s.split('')
  return s == arr.reverse().join('')
}

// console.log(longestPalindrome('a'))
// console.log(longestPalindrome('aab'))
// console.log(longestPalindrome('abcde'))
// console.log(longestPalindrome('zzbaabcd'))
// console.log(longestPalindrome(''))



function vaporcode(string) {
  const arr = string.toUpperCase().split('')
  let result = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ') result += arr[i] + '  '

  }

  return result.slice(0, -2)
}

console.log(vaporcode('Lets go to the movies'))

function removeRotten(bagOfFruits) {
  const rotten = 'rotten'
  if (bagOfFruits) {
    for (let i = 0; i < bagOfFruits.length; i++) {
      if (bagOfFruits[i].includes(rotten)) {
        bagOfFruits[i] = bagOfFruits[i].replace(rotten, '').toLowerCase()
      }
    }
    return bagOfFruits
  } else return []
}

console.log(removeRotten(['apple', 'rottenBanana', 'apple']))
console.log(removeRotten([]))



function isPythagoreanTriple(integers) {
  let max = integers[0]

  for (const int of integers) int > max && (max = int)

  const maxIndex = integers.indexOf(max)
  return (
    integers
      .filter((int) => int !== max)
      .map((int) => int ** 2)
      .reduce((a, b) => a + b, 0) ===
    max ** 2
  )
}

console.log(isPythagoreanTriple([3, 4, 5]))
console.log(isPythagoreanTriple([3, 5, 9]))
console.log(isPythagoreanTriple([72, 78, 30]))


function min(arr, toReturn) {
  let min = arr[0]
  for (const int of arr) int < min && (min = int)

  if (toReturn === 'value') return min
  else if (toReturn === 'index') return arr.indexOf(min)
}

console.log(min([1, 2, 3, 4, 5], 'value'))
console.log(min([1, 2, 3, 4, 5], 'index'))


function powersOfTwo(n) {
  const result = []
  for (let i = 0; i <= n; i++) result.push(2 ** i)
  return result
}

console.log(powersOfTwo(4))


function last(x) {
  return x.split(' ').sort((a, b) => {
    if (a[a.length - 1] > b[b.length - 1]) {
      return 1
    } else if (a[a.length - 1] < b[b.length - 1]) {
      return -1
    }
    return 0
  })
}

console.log(last('man i need a taxi up to ubud'))



const multiplyAll = (arr) => (n) => arr.map((int) => int * n)
console.log(multiplyAll([1, 2, 3])(2))



function incrementer(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const incrementedDigit = (nums[i] + i + 1) % 10
    result.push(incrementedDigit)
  }
  return result
}

console.log(incrementer([4, 6, 7, 1, 3]))





function calculate(num1, operation, num2) {
  if (operation === 'm' || operation === 'w') return null
  if (operation === '+') return num1 + num2
  if (operation === '-') return num1 - num2
  if (operation === '*') return num1 * num2
  if (operation === '/') {
    if (num2 !== 0) return num1 / num2
    else return null
  }
}

console.log(calculate(3.2, '+', 8))
console.log(calculate(3.2, '-', 8))
console.log(calculate(3.2, '*', 8))
console.log(calculate(3.2, '/', 8))
console.log(calculate(3.2, 'm', 8))


function containAllRots(strng, arr) {
  for (let i = 0; i < strng.length; i++) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
      return false
    }
  }
  return true
}

console.log(
  containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']),
)



// ! REVIEW
let javaScriptIsFun = true
console.log(javaScriptIsFun)

console.log(typeof true)
console.log(typeof javaScriptIsFun)
console.log(typeof 23)
console.log(typeof 'Jonas')

javaScriptIsFun = 'Yes!'
console.log(typeof javaScriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)

console.log(typeof null)

let age = 30
age = 31

const birthYear = 1991

var job = 'programmer'
job = 'techer'



const now = 2037

const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Jonas'
const lastName = 'Schmedtmann'

console.log(firstName + ' ' + lastName)

//? Assigment Operators
let x = 10 + 5
x += 10
x *= 4
x++
x--

console.log(x)

//? Comparison operators
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)


const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

let x, y
x = y = 25 - 10 - 5
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge)
console.log(ageJonas, ageSarah)




//! Chalange
const marksWeight = 78
const marksHeight = 1.69

const johnsWeight = 92
const johnsHeight = 1.95

const MarksBMI = marksWeight / marksHeight ** 2
const JohnsBMI = johnsWeight / johnsHeight ** 2

console.log(MarksBMI)
console.log(JohnsBMI)


const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const yaer = 2037

const jonas =
  "I'm " + firstName + ', a ' + (yaer - birthYear) + ' years old ' + job + ' !'

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${yaer - birthYear} years old ${job} !`

console.log(jonasNew)

console.log(`Just a regular string...`)


const age = 15
const isOldEnough = age >= 18

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is too young, Wait another ${yearsLeft} years 😊`)
}

const birthYear = 1991

let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}

console.log(century)

// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(String(23))

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' * '2')


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(NaN))

const money = 0
if (money) {
  console.log('do not spend it all')
} else {
  console.log('You should get a job!')
}

let height = 0
if (height) {
  console.log('YAY! Height is defined')
} else {
  console.log('Height is UNDEFINED')
}

const age = '18'
if (age === 18) console.log('You just became an adult (strict)')
if (age == 18) console.log('You just became an adult (loose)')

const favorite = Number(prompt('What is your favorite number ?'))

console.log(favorite)

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
  console.log('Cool! 7 is an amazing number!')
} else {
  console.log('Number is not 23 or 7')
}

if (favorite !== 23) console.log('why not the 23 ?')


const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive')
} else {
  console.log('Someone else should drive...')
}

const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired)


if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive')
} else {
  console.log('Someone else should drive...')
}


const day = 'monday'

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
    console.log('Prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend ')
    break
  default:
    console.log('Not a valid day!')
}

if (day === 'monday') {
  console.log('Plan course structure')
  console.log('Go to coding meetup')
} else if (day === 'tuesday') {
  console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples')
} else if (day === 'friday') {
  console.log('Record videos')
} else if (day === 'saturday ' || day === 'sunday') {
  console.log('Enjoy the weekend ')
} else {
  console.log('Not a valid day!')
}

const age = 15
age >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink water 💧')

const drink = age >= 18 ? 'wine 🍷' : 'water 💧'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 💧'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)


const bill = 275
const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
)


let hasDriversicense = false
const passTest = true

if (passTest) hasDriversicense = true
if (hasDriversicense) console.log('I can drive 🚗')


function logger() {
  console.log('My name ise Jonas')
}

logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)


function calcAge1(birthYear) {
  return 2037 - birthYear
}

const age1 = calcAge1(1991)

const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2)


// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirment = 65 - age
  // return retirment
  return `${firstName} retires in ${retirment} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))


function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of orange.`
  return juice
}

console.log(fruitProcessor(2, 3))

const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age
  return retirement > 0 ? retirement : -1
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1970, 'Mike'))



const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)
console.log(years)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = 'Jonas'
const jonas = [firstName, 'Schedtmann', 2037 - 1991, 'teacher', friends]

console.log(jonas)

const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('Jhon')
console.log(friends)

friends.pop()
console.log(friends)

friends.shift()
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))

if (friends.includes('Peter')) console.log('You have a friend called Peter')


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
}

console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'

console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// const intrestedIn = prompt('What do you want to know about jonas ? ')

// if (jonas[intrestedIn]) {
//   console.log(jonas[intrestedIn])
// } else {
//   console.log('Wrong Request')
// }

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtmann'

console.log(jonas)

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  //   calcAge: function () {
  //     return 2037 - this.birthYear
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },
}

console.log(jonas.calcAge())

// console.log(jonas['calcAge']())


let rep = 1
for (; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep} ⛹🏻‍♀️`)
}

const jonas = [
  'Jonas',
  'Schemdtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
]

const types = []

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i])

  //types[i] = typeof jonas[i]
  types.push(typeof jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}
console.log(ages)

console.log('<--- ONLY STRINGS --->')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue
  console.log(jonas[i], typeof jonas[i])
}

console.log('<--- BREAK WITH NUMBER --->')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break
  console.log(jonas[i], typeof jonas[i])
}


const jonas = [
  'Jonas',
  'Schemdtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
]

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`<--- Starting Exercise ${exercise} --->`)

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ⛹🏻‍♀️`)
  }
}



let rep = 1
while (rep) {
  console.log(`Lifting weights repetion ${rep} ⛹🏻‍♀️`)
  if (rep === 10) break
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
}



function countBy(x, n) {
  const z = []

  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }

  return z
}

console.log(countBy(1, 10))
console.log(countBy(2, 5))



*/
