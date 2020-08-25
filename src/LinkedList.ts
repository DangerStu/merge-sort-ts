//=======================================================================
// not fully implemeted
//

import { Sorter } from "./Sorter";

class Node {
	next: Node | null = null;

	constructor(public data: number) {}
}



export class LinkedList extends Sorter<Node> {
	head: Node | null = null;

	add(data: number): void {
		const node = new Node(data);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}

		return length;
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error("Index out of bounds");
		}

		let counter = 0;
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		throw new Error("Index out of bounds");
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error("List is empty");
		}

		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex);
		const rightNode = this.at(rightIndex);

		const leftHand = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftHand;
	}

	print(): void {
		if (!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}

	setCollection(collection: LinkedList): void {
		// this.data = collection.data;
	}

	splitCollection(midPoint: number): { left: LinkedList; right: LinkedList } {
		let left = new LinkedList(); //this.data.slice(0, midPoint));
		let right = new LinkedList(); //this.data.slice(midPoint));
		return { left, right };
	}

	getEmptyCollection(): LinkedList {
		return new LinkedList(]);
	}

	addTail(val: Node): void {
		//this.data.push(val);
	}

	removeHead(): any {
		return this.head;
	}

	getHead(): Node|null {
		return this.head;
	}

	combine(left: LinkedList, right: LinkedList): void {
		//this.data = [...this.data, ...left.data, ...right.data];
	}
}
