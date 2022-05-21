/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
  // 1. if root is null return null
  // 2. set temp variable so we can store a value to swap later (root.left)
  // 3. swap root.left to be root.right
  // 4. set root.right to be the temp variable
  // call invertTree on both the root.left & root.right
var invertTree = function(root) {
  if (root === null) {
    return null
  }
  let tempNode = root.left
  root.left = root.right
  root.right = tempNode
  
  invertTree(root.left)
  invertTree(root.right)
  
  return root
};