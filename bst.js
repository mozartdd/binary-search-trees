import { array } from "./main.js";
// Class used for each individual node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
    this.tree = new Array;
    this.treeData = new Array;
  }
  insert(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Type of addLeaf parameter must be number.');
    }
    this.treeData.push(value);
    this.treeData = mergeSort(this.treeData);
  }
  remove(value) {
    this.treeData = this.treeData.filter((el) => el !== value);
  }
  find(value) {
    let current = this.root;
    while (current !== null) {
      if (current.data === value) {
        return current;
      }
      if (current.data < value) 
      current = current.right;
      else 
      current = current.left;
    }
    return null;
  }
}

function mergeSort(array) {
  if (array.length <= 1) return array; // Base case

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort and merge
  return checkForDuplicates(merge(mergeSort(left), mergeSort(right)));
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
    else if (typeof array[i] !== 'number') continue;
    else newArray.push(array[i]);
  }
  return newArray;
}

// Recursive function to construct binary tree. Source: www.geeks\for\geeks.org/sorted-array-to-balanced-bst/
export function buildTree(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = buildTree(arr, start, mid - 1);

    // Create right subtree
    root.right = buildTree(arr, mid + 1, end);

    array.tree.push(root);
    array.root = root;
    return root;
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};