import { tree } from "./dataTree.js"

function height(tree) {
  if (!tree) {
      return 0;
  }

  return 1 + Math.max(height(tree.left), height(tree.right));
}

console.log(height(tree));