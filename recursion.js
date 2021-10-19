/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums[0] === undefined) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;

  words[0].length > words[1].length ? words.splice(1, 1) : words.shift();
  return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str[0] === undefined) {
    return "";
  }
  return (str[0] += everyOther(str.slice(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i;
  if (i === arr.length) return -1;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str[0] === undefined) return "";
  return (str[str.length - 1] += revString(str.slice(0, -1)));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (typeof element === "string") {
        arr.push(element);
      }
      if (typeof element === "object") gatherStrings(element, arr);
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, r = 0, l = arr.length - 1) {
  // console.slog(val, r, l);
  if (r > l) return -1;
  let middle = Math.floor((r + l) / 2);

  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] < val) {
    return binarySearch(arr, val, (r = middle + 1), (l = arr.length - 1));
  } else if (arr[middle] > val) {
    return binarySearch(arr, val, (r = 0), (l = middle - 1));
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
