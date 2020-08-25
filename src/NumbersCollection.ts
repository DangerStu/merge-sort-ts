import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter<number> {
	constructor(public data: number[]) {
		super();
	}
	get length(): number {
		return this.data.length;
	}

	setCollection(collection: NumbersCollection): void {
		this.data = collection.data;
	}

	splitCollection(midPoint: number): { left: NumbersCollection; right: NumbersCollection } {
		let left = new NumbersCollection(this.data.slice(0, midPoint));
		let right = new NumbersCollection(this.data.slice(midPoint));
		return { left, right };
	}

	getEmptyCollection(): NumbersCollection {
		return new NumbersCollection([]);
	}

	addTail(val: number): void {
		this.data.push(val);
	}

	removeHead(): any {
		return this.data.shift();
	}

	getHead(): number {
		return this.data[0];
	}

	combine(left: NumbersCollection, right: NumbersCollection): void {
		this.data = [...this.data, ...left.data, ...right.data];
	}
}
