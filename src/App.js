import './App.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import OpenWeather from 'react-open-weather-widget';
import { useState } from 'react';
import AreaSearch from './components/AreaSearch';
function App() {
  const [areaInfo,setAreaInfo]= useState({
    lat:'37.566535',
    lon:'126.9779692'
  })
  return (
    <div className="App">
      <AreaSearch setAreaInfo={setAreaInfo} />
      {areaInfo && <OpenWeather 
        forecast="5days" 
        apikey="d3dfecd012d9d87130b207f81ac199bd" 
        type="geo"
        lat={areaInfo.lat}
        lon={areaInfo.lon}        
      />}

    </div>
  );
}

export default App;
