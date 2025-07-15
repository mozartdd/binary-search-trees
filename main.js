import * as myBst from './bst.js';

export let array = new myBst.Tree();
// Inserts 25 elements in to the new Tree instance treeData array
for (let i = 0; i < 25; i++) {
  array.insert(i);
}

// Builds binary tree of nodes based on data of treeData
array.buildTree(array.treeData, 0, array.treeData.length - 1);
array.preOrderForEach(multiplyByTwo);

function multiplyByTwo(data) {
  data.data += 0;
}

myBst.prettyPrint(array.root);


