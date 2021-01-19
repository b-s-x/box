import {tree} from "./methods/dataTree.js"

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root || null
  }

  insert(data) {
    let newKey = new Node(data)

    if(this.root === null) {
      this.root = newKey
    } else {
      this.insertNode(this.root, newKey)
    }
  }

  insertNode(node, newKey) {
    if(newKey.data < node.data) {
      if(node.left === null) {
        node.left = newKey
      } else {
        this.insertNode(node.left, newKey)
      }
    } else {
      if(node.right === null) {
        node.right = newKey
      } else {
        this.insertNode(node.right, newKey)
      }
    }
  }

// inOrderTraverseIMG = "https://res.cloudinary.com/practicaldev/image/fetch/s--CcrzJORj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qn6dtt7tccizpg76swp8.png"

  inOrderTraverse(node, callback) {
    if(node != null) {
      this.inOrderTraverse(node.left, callback)
      callback(node.key)
      this.inOrderTraverse(node.right, callback)
    }
  }

  //preOrderTraverseIMG = "https://res.cloudinary.com/practicaldev/image/fetch/s--YAGbFd5t--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rrqqihedxk7svv3pntcj.png"

  preOrderTraverse(node, callback) {
    if(node != null) {
      callback(node.key)
      this.inOrderTraverse(node.left, callback)
      this.inOrderTraverse(node.right, callback)
    }
  }

  //postOrderTraverseIMG = "https://res.cloudinary.com/practicaldev/image/fetch/s--8FllWLaA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mldxkzqjjqnfmuhwke2b.png"

  postOrderTraverse(node, callback) {
    if(node != null) {
      this.inOrderTraverse(node.left, callback)
      this.inOrderTraverse(node.right, callback)
      callback(node.key)
    }
  }

  search(node, key) {

    if(!node) return
    if(node.key === key) return true
    if(key < node.key) {
      return this.search(node.left, key)
    } else {
      return this.search(node.right, key)
    }
  }

  findMinNode(node) {
    if(node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if(node === null) return null
    if(key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if(key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if(node.left === null && node.right === null) {
        return node = null
      }

      if(node.left === null) {
        return node = node.right
      } else if(node.right === null) {
        return node = node.left
      }

      let newNode = this.findMinNode(node.right)
      node.key = newNode.key
      node.right = this.removeNode(node.right, newNode.key)
      return node
    }
  }
}

const logger = (item) => {
  console.log(item)
}

const BST = new BinarySearchTree();
// BST.insert(11);
BST.insert(7);
BST.insert(9);
BST.insert(15);
// BST.insert(6);
// let orderTraverse = BST.inOrderTraverse(tree, logger)
// console.log(orderTraverse);

// BST.remove(8)

console.log(BST);
let x = BST.search(BST, 7)
console.log(x);


