
import './App.css';
import FlavanoidsStatistics from './components/FlavanoidsStatistics';
import winedata from '../src/Data/SampleData'
import GammaStats from './components/GammaStats';
import { WineDataProvider } from './contexts/WineContext.tsx';

function App() {
  return (

  <div className='app'>
  <WineDataProvider>
  <header className="header">
            <h1>Wine Statistics</h1>
   </header>
  <FlavanoidsStatistics wineData={winedata}/>
  <GammaStats/>
  </WineDataProvider>
  </div>

 
  );
}

export default App;
