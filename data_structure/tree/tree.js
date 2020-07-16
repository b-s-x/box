class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    create(value) {
      const newNode = new Node(value);
      if(!this.root) {
        this.root = newNode;
        return this
      }
  
      let current = this.root;
  
      const addSide = (side) => {
        if(!current[side]) {
          current[side] = newNode;
          return this;
        }
        current = current[side]
      }
      while(true) {
        if(value === current.value) return this;
        if(value < current.value) addSide('left')
        else addSide('right')
      }
    }
  }
  
  const tree = new BinarySearchTree()
  
  tree.create(20)
  tree.create(14)
  tree.create(57)
  tree.create(9)
  tree.create(19)
  tree.create(31)
  tree.create(62)
  tree.create(3)
  tree.create(11)
  tree.create(72)
  
  console.log(tree);