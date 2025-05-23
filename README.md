# Merge Sort Project

A TypeScript-based project that merges three number arrays into a single ascending sorted array without using any built-in sort functions.

## 📋 Problem Description

Implement a function with this interface:

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```
* collection_1 is sorted descending (max to min).

* collection_2 and collection_3 are sorted ascending (min to max).

* The function returns one merged array sorted in ascending order.

* ✅ No built-in sort() allowed.

## Project Setup
**1. Clone Repository**
```bash
git clone https://github.com/lawlinerocker/merge-sorted.git
cd merge-sorted
```

**2. Clone Repository**
```bash
npm i
```


## ⚙️ Scripts
| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm run build`  | Compile TypeScript using Webpack       |
| `npm start`      | Run the built Node.js output (`dist/`) |
| `npm test`       | Run unit tests via Jest                |
| `npm run lint`   | Run ESLint for code quality            |
| `npm run format` | Format code using Prettier             |


## 🧪 Running Unit Tests
To run the test suite:
```bash
npm test
```

Sample test cases are located in:
```bash
src/merge.service.spec.ts
```

## 🚀 Usage
Example usage (in src/handler.ts):
```ts
import { MergeService } from './merge.service';

const result = MergeService.merge({
  collection_1: [9, 7, 5],
  collection_2: [1, 4, 6],
  collection_3: [2, 3, 8]
});

console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 🔧 Build and Run
Build the project and start:
```bash
npm run build
npm start
```
This compiles TypeScript to dist/handler.js via webpack and runs it with Node.js.

