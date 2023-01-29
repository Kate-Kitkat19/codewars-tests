console.log("hello");

// function likes(names) {
//   if (names.length <= 3) {
//     switch (names.length) {
//       case 0:
//         return "no one likes this";

//       case 1:
//         return `${names[0]} likes this`;
//       case 2:
//         return `${names[0]} and ${names[1]} like this`;

//       case 3:
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     }
//   } else {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// function spinWords(string) {
//   const words = string.split(" ");
//   const newString = words.reduce((arr, word) => {
//     arr.push(word.length <= 4 ? word : word.split("").reverse().join(""));
//     return arr;
//   }, []);
//   return newString.join(" ");
// }

// function findOdd(A) {
//   const count = {};
//   for (let i = 0; i < A.length; i++) {
//       let num = A[i];
//       if (count[num]) {
//           count[num] = count[num] + 1;
//       } else {
//           count[num] = 1;
//       }
//   }
//   let res = 0;
//   for (const prop in count) {
//       if (count[prop] % 2 != 0) {
//           res = prop;
//       }
//   }
//   return parseInt(res);
// }

function findOutlier(integers) {
  const oddOrEven = { 0: 0, 1: 0 };
  for (let i = 0; i < integers.length; i++) {
    const num = integers[i];
    if (num % 2 !== 0) {
      oddOrEven[1] = oddOrEven[1] += 1;
    } else {
      oddOrEven[0] = oddOrEven[0] += 1;
    }
  }

  let res = null;
  let value = null;

  for (const int in oddOrEven) {
    if (oddOrEven[int] === 1) {
      value = int;

      for (const number of integers) {
        if (number % 2 === Number(value) || number % 2 === -Number(value)) {
          res = number;

          return res;
        }
      }
    }
  }
  return res;
}

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

