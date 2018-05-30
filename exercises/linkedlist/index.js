// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const node = new Node(data, this.head);
		this.head = node;
	}

	size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
	}

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (!lastNode) {
      this.head = new Node(data);
    } else {
      lastNode.next = new Node(data);
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    const length = this.size();

    if (length < index) {
      return null;
    }
    while (node) {
      if (count === index) {
        return node;
      }
      count += 1;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    }

    if (index === 0) {
      let currNode = this.getAt(index);
      this.head = new Node(data);
      this.head.next = currNode;
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, previous.next);
    previous.next = newNode;
  }

}

module.exports = { Node, LinkedList };
