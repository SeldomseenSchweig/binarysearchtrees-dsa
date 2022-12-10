class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let finished = false
    let newNode = new Node(val)
    let current = this.root;
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      while (!finished) {
        if (newNode.val > current.val && current.right === null) {
          current.right = newNode
          finished = true
        } else if (newNode.val > current.val && current.right != null) {
          current = current.right

        }

        if (newNode.val < current.val && current.left === null) {
          current.left = newNode;
          finished = true;
        } else if (newNode.val < current.val && current.left != null) {
          current = current.left
        }
      }

    }
    return this;

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val)
        return current;

      current = val < current.val
        ? current.left
        : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined

    if (val < current.val) {
      if (current.left === null) return undefined
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined
      return this.findRecursively(val, current.right);
    }
    return current;

  }



  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, res = []) {
    res.push(node.val)
    if (node.left) this.dfsPreOrder(node.left,res);
    if (node.right) this.dfsPreOrder(node.right,res);

    return res
  }



  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, res=[]) {

    if (node.left) this.dfsInOrder(node.left,res);
  res.push(node.val);
  if (node.right) this.dfsInOrder(node.right,res);
  return res
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, res = []) {
    if (node.left) this.dfsPostOrder(node.left,res);
    if (node.right) this.dfsPostOrder(node.right,res);
    res.push(node.val);
    return res

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
