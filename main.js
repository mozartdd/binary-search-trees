import * as myBst from './bst.js';

let array = new myBst.Tree();
// Inserts 25 elements in to the new Tree instance treeData array
for (let i = 0; i < 50; i++) {
  array.insert(i);
}

array.insert(101);
array.insert(105);
array.insert(106);
array.insert(1022);
array.insert(122);
array.insert(133);
array.insert(155);
array.insert(111);
array.insert(1111);


array.levelOrderForEach(displayTreeData);

function displayTreeData(data) {
  console.log(data.data);
}

myBst.prettyPrint(array.root);

console.log(array.isBalanced(14));