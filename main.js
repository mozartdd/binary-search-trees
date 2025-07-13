import * as myBst from './bst.js';


export let array = new myBst.Tree();
for (let i = 0; i < 25; i++) {
  array.insert(i);
}

myBst.prettyPrint(myBst.buildTree(array.treeData, 0, array.treeData.length - 1));

console.log(array.depth(0));

