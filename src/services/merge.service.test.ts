import { InputCollection } from '../types/data-collection';
import { MergeService } from './merge.service';

describe('MergeService.merge', () => {
  it('should merge sorted arrays correctly', () => {
    const input: InputCollection = {
      collection_1: [9, 7, 5],
      collection_2: [1, 4, 6],
      collection_3: [2, 3, 8],
    };

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const { result } = MergeService.merge(input);
    console.log('Merged Result (random arrays):', result);

    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const input: InputCollection = {
      collection_1: [],
      collection_2: [],
      collection_3: [],
    };

    const expected: number[] = [];
    const { result } = MergeService.merge(input);
    console.log('Merged Result (random arrays):', result);

    expect(result).toEqual(expected);
  });

  it('should handle random numbers', () => {
    const randArray = (size: number) =>
      Array.from({ length: size }, () => Math.floor(Math.random() * 100));

    const input: InputCollection = {
      collection_1: randArray(5),
      collection_2: randArray(5),
      collection_3: randArray(5),
    };

    const { result } = MergeService.merge(input);
    console.log('Merged Result (random arrays):', result);

    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
    }
  });
});
