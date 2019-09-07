export async function simpleLinearRegression(dataset) {
  const avg = set => set.reduce((a, b) => a + b) / set.length;
  const codev = (set, xAvg, yAvg) => set.reduce((acc, {x, y}) => acc + ((x - xAvg) * (y - yAvg)), 0);
  const dev = (set, avg) => set.reduce((acc, x) => acc + (x - avg) ** 2);
  const xAvg = avg(dataset.map(point => point.x));
  const yAvg = avg(dataset.map(point => point.y));
  const m = codev(dataset, xAvg, yAvg) / dev(dataset.map(point => point.x), xAvg);
  const q = yAvg - (m * xAvg);
  return x => m * x + q
}
