const maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

const maxDepth1 = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

//binary tree follow along

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 0
    }

    size(){
        return this.count
    }
    insert(){
        this.count++

        let newNode = new Node(value)

        //adding recursive function when it sees itself
        const searchTree = node => {
            //if value < node.value, go left
            if (value < node.value) {

            }

            //if value > node.value go right
            else if (value > node.value) {
                
            }
        }

    }
    min(){

    }
    max(){

    }
    contains(){

    }

    //depth first search

    //in-order
    dfsInOrder(){

    }

    //pre-order
    dfsPreOrder(){

    }

    //post order
    dfsPostOrder(){

    }
}