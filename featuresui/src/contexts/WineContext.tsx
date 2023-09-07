import React, { createContext, useContext, useState ,ReactNode} from 'react';
import WineData from '../Data/SampleData';
import { WineData as wineItem } from '../contracts/winedata';



// Made a TypeScript interface for the context value
interface WineContextValue {
  data: wineItem[];
  addGammaToData: () => void;
}

const WineContext = createContext<WineContextValue | undefined>(undefined);

interface WineDataProviderProps {
  children: ReactNode;
}

export const WineDataProvider: React.FC<WineDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<wineItem[]>(WineData);

  const addGammaToData:()=>void = () => {
    const newData = data.map(item =>{ let newGammaVal= (parseFloat(item.Ash as string)*parseFloat((item.Hue as unknown ) as string)/parseFloat(item.Magnesium as unknown as string));
                                        newGammaVal=parseFloat(newGammaVal.toFixed(2) as unknown as string);
                                       return ({ ...item, Gamma: newGammaVal })
                                      });
    console.log("new data", newData);
    setData(newData);
  };

  return (
    <WineContext.Provider value={{ data, addGammaToData }}>
      {children}
    </WineContext.Provider>
  );
};

export const useWineContext = (): WineContextValue => {
  const context = useContext(WineContext);

  if (context === undefined) {
    throw new Error('useWineContext must be used within a WineDataProvider');
  }

  return context;
};

