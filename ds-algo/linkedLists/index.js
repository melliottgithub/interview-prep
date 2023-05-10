"use strict";

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

/*
 * Complete the 'printForward' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST node as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function printForward(node) {
  // Write your code here
  /*                   h              t
                         1 -> 5 -> 7-> 10 -> null
                         
                         1
                         5
                         7
                         10
                         
            pseudocode
            ------------------
            while current is not null
                print current.data
                change current to the next node
                         
            code
            ------------      
            */
  let currNode = node;

  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

function printBackward(node) {
  // Write your code here
  /*                   h              t
                             1 -> 5 -> 7-> 10 -> null
                                           ^ 
                                           recursion
                        
                          10
                          7
                          5
                          1
                        
                          Pseudocode  
                for readability currNode = node
                
                if(currNode === null) return
                
                printBackward(currNo                     print currNode.data
                
                  */

  //code
  let currNode = node;
  function helper(currentNode) {
    if (currentNode === null) return;

    helper(currentNode.next);
    console.log(currentNode.data);
  }
  helper(currNode);
}

function reverseLinkedList(node) {
  // Write your code here

  /*                   
  p = previous
  c = current
  r = reference
  h                 t
  (1)-->(5)-->(7)-->(10)-->null
  c    
  p    
  r    
  p = null
  r = null
  c = head node
  
  
  while c is not null 
  h                 t
  null<--(1)<--(5)<--(7)-->(10)-->null
  c                              
  p    
  r                        
  r = c.next -> c.next = p -> p = c -> c = r
  
  pseudocode
  ------------------
  let prev  = null
  ref = null
  curr = node
  
  while curr is not null
  ref = curr.next
  curr.next = prev
  prev = curr
  curr = ref
  return prev
  */
  //code
  let prev = null;
  let ref = null;
  let curr = node;

  while (curr !== null) {
    ref = curr.next;
    curr.next = prev;
    prev = curr;
    curr = ref;
  }
  return prev;
}

function swapNodes(head, a, b) {
  // Write your code here
  /*           
  ph = initial parent head        
  p = currParent
  c = currNode
  r = reference
  
        cA = current A 
        pA = parent A
        cB = current B
        pB = parent B
      h                 t
     (1)-->(5)-->(7)-->(10)-->null
     c    
     ph = create a new node                  
     ph.next = head   
     
     while c is not null
             h                 t
     (ph)-->(1)-->(5)-->(7)-->(10)-->null
             c                              
      p    
  cA
  pA           
  cB
  pB        
  r   
     
     if c.data = a -> cA = c = (1) --> pA = p = (ph)
     if c.data = b -> cB = c = (7) --> pB = p = (5)
     
     c = c.next
     p = p.next        
     
     pseudocode
     ------------------
     let prev  = null
     ref = null
     curr = node
     
     while curr is not null
     ref = curr.next
     curr.next = prev
     prev = curr
     curr = ref
     return prev
     */
  //code
  let ph = new SinglyLinkedListNode(null);

  ph.next = head;
  let c = head;
  let p = ph;

  let [cA, pA, cB, pB] = [null, null, null, null];
  let r = null;

  while (c !== null) {
    if (c.data === a && cA === null) {
      cA = c;
      pA = p;
    }
    if (c.data === b && cB === null) {
      cB = c;
      pB = p;
    }

    c = c.next;
    ph = ph.next;
  }
  if (cA === null || cB === null) return ph.next;

  pA.next = cB;
  pB.next = cA;

  r = cA.next;
  cA.next = cB.next;
  cB.next = r;
  console.log('data==========>',ph)
  return ph.next;
}

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);

console.log("print forward \n-----------------");
printForward(list.head);

console.log("print backward \n-----------------");
printBackward(list.head);

swapNodes(list.head, 1, 3);
