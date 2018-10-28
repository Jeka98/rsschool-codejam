module.exports = function recursion(obj) {
  const result = [];
  function treeTraversal(node, count) {
    if (!result[count]) {
      result[count] = [];
      result[count].push(node.value);
    } else {
      result[count].push(node.value);  
    }

    if (node.left) treeTraversal(node.left, ++count);
    if (node.right) treeTraversal(node.right, count++);
  }

  treeTraversal(obj, 0);
  return result;
}