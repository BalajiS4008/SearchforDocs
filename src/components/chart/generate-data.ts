interface ChartData {
  x: number;
  y: number;
  size: number;
}
export const generateInitialData = (): ChartData[] => {
  const chartData: ChartData[] = [];
  for (let i = 1; i <= 7; i++) {
    chartData.push({
      x: i,
      y: Math.floor(Math.random() * (75) + 15),
      size: Math.random() * 0.6 + 0.1
    });
  }
  return chartData;
};