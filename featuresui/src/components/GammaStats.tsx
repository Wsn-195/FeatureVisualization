import React, { useEffect, useState } from "react";
import { useWineContext } from "../contexts/WineContext";
import StasTable from "./StatsTable";

const GammaStats: React.FC = () => {
  const { data, addGammaToData } = useWineContext();
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    console.log("after adding gamma");
    console.log(data);
  }, [data]);

  const handleClick = () => {
    addGammaToData();
    setShowTable(!showTable);
  };

  return (
    <section className="gamma-stats">
      <button onClick={handleClick}>
        {showTable ? "Hide Gamma Statistics" : "Get Gamma Statistics"}
      </button>
      {showTable && <StasTable wineData={data} measure="Gamma" />}
    </section>
  );
};

export default GammaStats;
