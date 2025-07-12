let array = [3, 5, 2, 1, 1, 5, 12, 15, 5, 1, 2, 5, 0, 22];

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
}

function mergeSort(array) {
  if (array.length <= 1) return array; // Base case

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort and merge
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let l = 0, r = 0;

  // Merge until one side is empty
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  // Append any remaining elements
  return result.concat(left.slice(l)).concat(right.slice(r));
}

function checkForDuplicates(array) {
  let newArray = new Array;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) continue;
    else newArray.push(array[i]);
  }
  return newArray;
}
array = mergeSort(array);
console.log(checkForDuplicates(array));


