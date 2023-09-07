import React from 'react';
import StatsTable from './StatsTable';
import { WineData } from '../contracts/winedata';

interface FlavanoidsStatisticsProps {
  wineData: WineData[]; // Replace 'WineItem' with the actual type of your data
}

const FlavanoidsStatistics: React.FC<FlavanoidsStatisticsProps> = ({ wineData }) => {
  return (
    <>
      <h4>Flavanoids Statistics</h4>
      <StatsTable wineData={wineData} measure="Flavanoids" />
    </>
  );
};

export default FlavanoidsStatistics;
