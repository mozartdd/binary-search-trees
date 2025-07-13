import * as myBst from './bst.js';


export let array = new myBst.Tree();
array.insert(1);
array.insert(2);
array.insert(3);
array.insert(4);
array.insert(5);
array.insert(6);
array.insert(7);
array.insert(11);
array.insert(13);
array.insert(15);
array.insert(21);
array.insert(8);
array.insert(8);
array.insert(9);
array.insert(0);
array.insert(221);

array.remove(0);
array.remove(9);
array.remove(7);

myBst.prettyPrint(myBst.buildTree(array.treeData, 0, array.treeData.length - 1));

console.log(array.find(13));

// console.log(array.tree);

