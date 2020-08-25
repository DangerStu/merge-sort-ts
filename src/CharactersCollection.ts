import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter<string> {
	data: string;
	array: string[];
	constructor(data: string) {
		super();
		this.data = data;
		this.array = data.split("");
	}
	get length(): number {
		return this.data.length;
	}
	setCollection(collection: CharactersCollection): void {
		this.data = collection.data;
		this.array = this.data.split("");
	}

	splitCollection(midPoint: number): { left: CharactersCollection; right: CharactersCollection } {
		let left = new CharactersCollection(this.array.slice(0, midPoint).join(""));
		let right = new CharactersCollection(this.array.slice(midPoint).join(""));
		return { left, right };
	}

	getEmptyCollection(): CharactersCollection {
		return new CharactersCollection("");
	}

	addTail(val: string): void {
		this.array.push(val);
		this.data = this.array.join("");
	}

	removeHead(): any {
		const char = this.array.shift();
		this.data = this.array.join("");
		return char;
	}

	getHead(): string {
		return this.data[0].toLowerCase();
	}

	combine(left: CharactersCollection, right: CharactersCollection): void {
		this.array = [...this.array, ...left.array, ...right.array];
		this.data = this.array.join("");
	}
}
