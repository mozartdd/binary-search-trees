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
    this.tree = [];
    this.treeData = [];
  }
    // Recursive function to construct binary tree. Source: www.geeksForGeeks.org/sorted-array-to-balanced-bst/
    buildTree(arr, start, end) {
      if (start > end) return null;

      // Find the middle element
      let mid = start + Math.floor((end - start) / 2);

      // Create root node
      let root = new Node(arr[mid]);

      // Create left subtree
      root.left = this.buildTree(arr, start, mid - 1);

      // Create right subtree
      root.right = this.buildTree(arr, mid + 1, end);

      this.tree.push(root);
      this.root = root;
      return root;
  }

  insert(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Type of insert parameter must be number.');
    }
    this.treeData.push(value);
    this.treeData = mergeSort(this.treeData);
    this.buildTree(this.treeData, 0, this.treeData.length - 1);
  }

  remove(value) {
    this.treeData = this.treeData.filter((el) => el !== value);
    this.buildTree(this.treeData, 0, this.treeData.length - 1);
  }

  find(value) {
    let current = this.root;
    while (current !== null) {
      if (current.data === value) {
        return current;
      } else if (current.data < value) 
        current = current.right;
        else 
        current = current.left;
      }
    return null;
  }

  // Iterates trough binary tree with breadth-first method and call's the callback function on each element
  levelOrderForEach(callback) {
    if (typeof callback !== 'function') throw new Error('Callback function is required.');
    if (!this.root) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      callback(current);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  // Root-left-right traversal method
  preOrderForEach(callback, root = this.root) {
    if (typeof callback !== 'function') throw new Error('Callback function is required.');
    if (!root) return;

    callback(root);
    this.preOrderForEach(callback, root.left);
    this.preOrderForEach(callback, root.right);
  }
  // left-root-right traversal method
  inOrderForEach(callback, root = this.root) {
    if (typeof callback !== 'function') throw new Error('Callback function is required.');
    if (!root) return;

    this.inOrderForEach(callback, root.left);
    callback(root);
    this.inOrderForEach(callback, root.right);
  }
  // left-right-root traversal method
  postOrderForEach(callback, root = this.root) {
    if (typeof callback !== 'function') throw new Error('Callback function is required.');
    if (!root) return;

    this.postOrderForEach(callback, root.left);
    this.postOrderForEach(callback, root.right);
    callback(root);
  }

  // Returns height of node containing given value (element -> end of tree)
  height(value) {
    let current = this.find(value);
    let leftHeight = 0;
    let rightHeight = 0;

    if (current === null) return -1;
    // If value is last leaf of tree
    else if (current.left === null && current.right === null) {
      return 0;
    }
    while (current.left !== null) {
      current = current.left;
      leftHeight++;
    }
    current = this.find(value);
    while (current.right !== null) {
      current = current.right;
      rightHeight++;
    }
    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

  // Return depth of node with given value (root -> element)
  depth(value) {
    let current = this.root;
    let depth = 0;
    
    // If not found in binary tree return -1
    if (current === null) return -1;
    // If value is first root node return 0 depth
    else if (current.data === value) return depth;
    while (current !== null && current.data !== value) {
      if (current.data < value) {
      current = current.right;
      depth++;
    } else {
      current = current.left;
      depth++;
      }
    }
    return depth;
  }
  // Checks if binary tree is balanced starting given value
  isBalanced(value) {
    let current = this.find(value);
    let leftHeight = 0;
    let rightHeight = 0;

    if (current === null) return true;
    // If value is last leaf of tree
    else if (current.left === null && current.right === null) {
      return true;
    }
    while (current.left !== null) {
      current = current.left;
      leftHeight++;
    }
    current = this.find(value);
    while (current.right !== null) {
      current = current.right;
      rightHeight++;
    }
    if (leftHeight - rightHeight <= 1 || rightHeight - leftHeight <= 1) return true;
    else false;
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
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) continue;
    else if (typeof array[i] !== 'number') continue;
    else newArray.push(array[i]);
  }
  return newArray;
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
}