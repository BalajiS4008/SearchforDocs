const DATA_COUNT = 12;
const START_YEAR = 2017;
export const generateInitialScatterData = () => {
  const arr = [];
  for (let i = 0; i < DATA_COUNT; i++) {
    arr.push({ x: START_YEAR + i, y: Math.random() * 50 });
  }
  return arr;
};