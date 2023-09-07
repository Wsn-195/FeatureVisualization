import React, { useMemo } from 'react';
import { calculateMean, calculateMedian, calculateMode } from '../utils/Stats';
import { WineData } from '../contracts/winedata';



interface StatsTableProps {
  wineData: WineData[];
  measure: string;
}

const StatsTable: React.FC<StatsTableProps> = ({ wineData, measure }) => {
  console.log("measure", measure);

  const tableStyle: React.CSSProperties = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const tdStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const evenRowStyle: React.CSSProperties = {
    backgroundColor: 'white',
  };

  const classNames: number[] = useMemo(() => {
    return [...new Set(wineData.map((wine) => wine.Alcohol))];
  }, [wineData]);

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Measure</th>
            {classNames.map((className) => (
              <th style={thStyle} key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr style={evenRowStyle}>
            <td style={tdStyle}>{measure} - Mean</td>
            {classNames.map((className, i) => (
              <td style={tdStyle} key={className}>{calculateMean(wineData, className, measure)}</td>
            ))}
          </tr>
          <tr>
            <td style={tdStyle}>{measure}  - Median</td>
            {classNames.map((className) => (
              <td style={tdStyle} key={className}>{calculateMedian(wineData, className, measure)}</td>
            ))}
          </tr>
          <tr style={evenRowStyle}>
            <td style={tdStyle}>{measure} - Mode</td>
            {classNames.map((className) => (
              <td style={tdStyle} key={className}>{calculateMode(wineData, className, measure)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
