import { InputCollection, ResponseCollection } from '../types/data-collection';

export class MergeService {
  private static reverseArray(arr: number[]): number[] {
    const reversed: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }

  private static insertionSort(arr: number[]): number[] {
    const sorted = [...arr];
    for (let i = 1; i < sorted.length; i++) {
      const key = sorted[i];
      let j = i - 1;
      while (j >= 0 && sorted[j] > key) {
        sorted[j + 1] = sorted[j];
        j--;
      }
      sorted[j + 1] = key;
    }
    return sorted;
  }

  static merge(input: InputCollection): ResponseCollection {
    const { collection_1, collection_2, collection_3 } = input;

    console.log('Original collection_1:', collection_1);
    console.log('Original collection_2:', collection_2);
    console.log('Original collection_3:', collection_3);

    const [collection1Asc, collection2Asc, collection3Asc] = [
      collection_1,
      collection_2,
      collection_3,
    ].map((arr) => this.insertionSort(arr));

    console.log('Sorted collection_1 (asc):', collection1Asc);
    console.log('Sorted collection_2 (asc):', collection2Asc);
    console.log('Sorted collection_3 (asc):', collection3Asc);

    const merged: number[] = [];
    let i = 0,
      j = 0,
      k = 0;

    while (
      i < collection1Asc.length ||
      j < collection2Asc.length ||
      k < collection3Asc.length
    ) {
      const values: { val: number; src: string }[] = [];

      if (i < collection1Asc.length)
        values.push({ val: collection1Asc[i], src: 'i' });
      if (j < collection2Asc.length)
        values.push({ val: collection2Asc[j], src: 'j' });
      if (k < collection3Asc.length)
        values.push({ val: collection3Asc[k], src: 'k' });

      let min = values[0];
      for (const v of values) {
        if (v.val < min.val) min = v;
      }

      merged.push(min.val);
      if (min.src === 'i') i++;
      else if (min.src === 'j') j++;
      else k++;
    }

    return { result: merged };
  }
}
