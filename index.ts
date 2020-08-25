// import { Sorter } from "./src/Sorter";
import { NumbersCollection } from "./src/NumbersCollection";
import { CharactersCollection } from "./src/CharactersCollection";
// import { LinkedList } from "./src/LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -37, 102, 33, -51, 4, -371]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("zXaBcDUts");
charactersCollection.sort();
console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(20);
// linkedList.add(6);
// linkedList.add(-10);
// linkedList.add(-1);
// linkedList.sort();
// linkedList.print();
