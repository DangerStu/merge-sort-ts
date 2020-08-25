export interface SortableCollection {
	length: number;

	sort(): void;
	merge(left: SortableCollection, right: SortableCollection): SortableCollection;
	splitCollection(midPoint: number): { left: SortableCollection; right: SortableCollection };
	getEmptyCollection(): SortableCollection;
	combine(left: SortableCollection, right: SortableCollection): void;
	removeHead(): any;
	getHead(): any;
	addTail(val: any): void;
	setCollection(d: any): void;
}

export abstract class Sorter<T> {
	abstract length: number;
	abstract splitCollection(midPoint: number): { left: SortableCollection; right: SortableCollection };
	abstract getEmptyCollection(): SortableCollection;
	abstract addTail(val: T): void;
	abstract removeHead(): T;
	abstract getHead(): T;
	abstract combine(left: SortableCollection, right: SortableCollection): void;
	abstract setCollection(d: SortableCollection): void;

	sort(): void {
		const { length } = this;
		if (length === 1) {
			return;
		}
		const { left, right } = this.splitCollection(Math.floor(length / 2));
		left.sort();
		right.sort();
		this.setCollection(this.merge(left, right));
	}
	merge(left: SortableCollection, right: SortableCollection): SortableCollection {
		const result = this.getEmptyCollection();
		while (left.length && right.length) {
			if (left.getHead() < right.getHead()) {
				result.addTail(left.removeHead());
			} else {
				result.addTail(right.removeHead());
			}
		}
		result.combine(left, right);

		return result;
	}
}
