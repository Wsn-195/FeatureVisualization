import { render, screen } from '@testing-library/react';
import App from './App';
import { calculateMean, calculateMedian, calculateMode } from './utils/Stats';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/


describe('calculateMean function', () => {
  it('should calculate the mean correctly', () => {
    const wineData = [
      { Alcohol: 1, Measure: 10 },
      { Alcohol: 1, Measure: 20 },
      { Alcohol: 1, Measure: 30 },
    ];

    const className = 1;
    const measure = 'Measure';

    const mean = calculateMean(wineData, className, measure);

    expect(mean).toBe('20.000'); 
  });
});

describe('calculateMedian function', () => {
  it('should calculate the median correctly', () => {
    const wineData = [
      { Alcohol: 1, Measure: 10 },
      { Alcohol: 1, Measure: 20 },
      { Alcohol: 1, Measure: 30 },
      { Alcohol: 1, Measure: 40 },
    ];

    const className = 1;
    const measure = 'Measure';

    const median = calculateMedian(wineData, className, measure);

    expect(median).toBe('25.000'); 
  });
});


it('should handle even number of data for calculateMedian', () => {
  const wineData = [
    { Alcohol: 1, Measure: 10 },
    { Alcohol: 1, Measure: 20 },
    { Alcohol: 1, Measure: 30 },
    { Alcohol: 1, Measure: 40 },
  ];

  const className = 1;
  const measure = 'Measure';

  const median = calculateMedian(wineData, className, measure);

  expect(median).toBe('25.000'); // Median of [20, 30] is 25
});


describe('calculateMode function', () => {
  it('should calculate the mode correctly', () => {
    const wineData = [
      { Alcohol: 1, Measure: 10 },
      { Alcohol: 1, Measure: 20 },
      { Alcohol: 1, Measure: 20 },
      { Alcohol: 1, Measure: 30 },
    ];

    const className = 1;
    const measure = 'Measure';

    const mode = calculateMode(wineData, className, measure);

    expect(mode).toBe('20.000'); 
  });
});

it('should handle multiple modes for calculateMode', () => {
  const wineData = [
    { Alcohol: 1, Measure: 10 },
    { Alcohol: 1, Measure: 20 },
    { Alcohol: 1, Measure: 20 },
    { Alcohol: 1, Measure: 30 },
    { Alcohol: 1, Measure: 30 },
  ];

  const className = 1;
  const measure = 'Measure';

  const mode = calculateMode(wineData, className, measure);

  expect(mode).toBe('20.000'); // Both 20 and 30 are modes
});

it('should handle no mode for calculateMode', () => {
  const wineData = [
    { Alcohol: 1, Measure: 10 },
    { Alcohol: 1, Measure: 20 },
    { Alcohol: 1, Measure: 30 },
  ];

  const className = 1;
  const measure = 'Measure';

  const mode = calculateMode(wineData, className, measure);

  expect(mode).toBe('N/A'); // No mode, as all values are unique
});



it('should calculate mean and median for multiple classes', () => {
  const wineData = [
    { Alcohol: 1, Measure: 10 },
    { Alcohol: 1, Measure: 20 },
    { Alcohol: 2, Measure: 15 },
    { Alcohol: 2, Measure: 25 },
    { Alcohol: 3, Measure: 30 },
  ];

  // Calculate mean and median for class 1
  const meanClass1 = calculateMean(wineData, 1, 'Measure');
  const medianClass1 = calculateMedian(wineData, 1, 'Measure');

  // Calculate mean and median for class 2
  const meanClass2 = calculateMean(wineData, 2, 'Measure');
  const medianClass2 = calculateMedian(wineData, 2, 'Measure');

  expect(meanClass1).toBe('15.000'); // Mean of [10, 20] for class 1
  expect(medianClass1).toBe('15.000'); // Median of [10, 20] for class 1

  expect(meanClass2).toBe('20.000'); // Mean of [15, 25] for class 2
  expect(medianClass2).toBe('20.000'); // Median of [15, 25] for class 2
});
