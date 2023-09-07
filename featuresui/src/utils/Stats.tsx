import { WineData as WineItemType} from "../contracts/winedata";


export const calculateMean = (data: WineItemType[], className: number, measure: string): string => {
  const classData = data.filter((item) => item.Alcohol === className);

  const MeasureSum=classData.reduce((acc, item) => acc + parseFloat(item[measure] as string), 0);
  /*
  const flavanoidsSum = parseInt(
    classData.reduce((acc, item) => acc + parseFloat(item[measure]), 0)
  );
  */
  return (MeasureSum / classData.length).toFixed(3);
};
/*
export const calculateMedian = (wineData: WineItemType[], className: number, measure: string): string => {
  const classData = wineData
    .filter((wine) => wine.Alcohol === className)
    .map((wine) => parseFloat(wine[measure]))
    .sort((a, b) => a - b);

  const middle = Math.floor(classData.length / 2);

  if (classData.length % 2 === 0) {
    return ((classData[middle - 1] + classData[middle]) / 2).toFixed(3);
  } else {
    return classData[middle].toFixed(3);
  }
};
*/

export const calculateMedian = (
  wineData: WineItemType[], // Replace 'WineItemType' with your actual type
  className: number,
  measure: string
): string => {
  const classData = wineData
    .filter((wine) => wine.Alcohol === className)
    .map((wine) => parseFloat(wine[measure] as string))
    .sort((a, b) => a - b);

  const middle = Math.floor(classData.length / 2);

  if (classData.length % 2 === 0) {
    return ((classData[middle - 1] + classData[middle]) / 2).toFixed(3);
  } else {
    return classData[middle].toFixed(3);
  }
};


export const calculateMode = (wineData: WineItemType[], className: number, measure: string): string => {
  const classData = wineData.filter((wine) => wine.Alcohol === className);
  const counts: Record<string, number> = {};
  let mode: string | null = null;
  let maxCount = 0;

  classData.forEach((wine) => {
    const value = wine[measure].toString(); // Convert to string to ensure consistency in counts
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      counts[value]++;
    }

    if (counts[value] > maxCount) {
      maxCount = counts[value];
      mode = value;
    }
  });

  return mode !== null ? parseFloat(mode).toFixed(3) : 'N/A';
};
