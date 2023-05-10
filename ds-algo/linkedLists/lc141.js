'use strict';

const fs = require('fs');

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
 * Complete the 'isCircular' function below.
 *
 * The function is expected to return a BOOLEAN.
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

function isCircular(node) {
    //Enter your code here
    /* 
    while f.next is not null and f.next.next is not null
        3 , 2 , 0 , -4
        s   f
        3 , 2 , 0 , -4
            s        f
        3 , 2 , 0 , -4
                s   
                f
        

    */
  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { return true; }
  }
  return false;
}

// Test case 1: Empty list
let emptyList = new SinglyLinkedList();
console.log(isCircular(emptyList.head)); // Expected output: false

// Test case 2: List without cycle
let listWithoutCycle = new SinglyLinkedList();
listWithoutCycle.insertNode(1);
listWithoutCycle.insertNode(2);
listWithoutCycle.insertNode(3);
console.log(isCircular(listWithoutCycle.head)); // Expected output: false

// Test case 3: List with cycle
let listWithCycle = new SinglyLinkedList();
listWithCycle.insertNode(1);
listWithCycle.insertNode(2);
listWithCycle.insertNode(3);
listWithCycle.insertNode(4);
listWithCycle.tail.next = listWithCycle.head.next; // Create a cycle (4 -> 2)
console.log(isCircular(listWithCycle.head)); // Expected output: true
