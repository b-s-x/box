import {tree} from "./dataTree.js"

function size(tree) {
  if (!tree) {
      return 0;
  }

  return 1 + size(tree.left) + size(tree.right);
}

console.log(size(tree));