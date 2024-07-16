// Berilgan ikki massivning umumiy elementlarini toping
function commonElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// Berilgan ikki qatorning umumiy belgilarini qaytaring.

function commonCharacters(str1, str2) {
  let result = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        result.push(str1[i]);
      }
    }
  }
  return result.join("");
}

console.log(commonCharacters("hello", "world")); // "lo"

// Berilgan ikki massivdan simmetrik farqni toping (faqat birida bor va ikkinchisida yo'q elementlar).

function symmetricDifference(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result.concat(arr2.filter((x) => !arr1.includes(x)));
}

console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]

// Berilgan massiv ichida musbat, manfiy va nol qiymatli raqamlarning foizini hisoblang.

function calculatePercentages(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  return {
    positive: (positive / arr.length) * 100,
    negative: (negative / arr.length) * 100,
    zero: (zero / arr.length) * 100,
  };
}

console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0]));
// {positive: 42.86, negative: 28.57, zero: 28.57}

// Berilgan qator ichidagi har bir belgini faqat bir marta qoldirib, unikal belgilar ketma-ketligini yarating.

function uniqueCharacters(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result.join("");
}

console.log(uniqueCharacters("hello world")); // "helo wrd"

// Berilgan massivdan yig'indisi ma'lum bir qiymatga teng bo'lgan sonlar juftligini toping.
function findPairs(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]

// Berilgan massiv ichidagi har bir raqamning kvadratini hisoblang va yangi massiv qaytaring.

function squareNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// Berilgan oraliqda nechta palindrom son borligini toping.

function countPalindromNumbers(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i.toString() === i.toString().split("").reverse().join("")) {
      result.push(i);
    }
  }
  return result;
}

console.log(countPalindromNumbers(1, 100)); // 18 (1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99)

// Berilgan sonlar qatorini vergul bilan ajratilgan qator ko'rinishida qaytaring.

function joinWithCommas(arr) {
  return arr.join(", ");
}

console.log(joinWithCommas([1, 2, 3, 4, 5])); // "1, 2, 3, 4, 5"
