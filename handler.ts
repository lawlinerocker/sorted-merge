import { MergeService } from './src/services/merge.service';
import { InputCollection } from './src/types/data-collection';

const sampleInput: InputCollection = {
  collection_1: [9, 7, 5],
  collection_2: [1, 4, 6],
  collection_3: [2, 3, 8],
};

// const sampleInput: InputCollection = {
//   collection_1: [9, 7, 5],
//   collection_2: [1, 6, 4],
//   collection_3: [8, 2, 3],
// };

export const handleMerge = (
  input: InputCollection,
): ReturnType<typeof MergeService.merge> => {
  const result = MergeService.merge(input);
  console.log('Merged Result:', result.result);
  return result;
};

void handleMerge(sampleInput);
