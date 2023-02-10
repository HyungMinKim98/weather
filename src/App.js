import './App.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import OpenWeather from 'react-open-weather-widget';
import { useEffect, useState } from 'react';
import AreaSearch from './components/AreaSearch';
function App() {
  const [areaInfo,setAreaInfo]= useState(undefined)

  const currentPostion=() =>{
    const positionCurrent = navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude} = position.coords;
      console.log(latitude,longitude)
      setAreaInfo({lat: String(latitude), lon:String(longitude) })
    })
  }
    useEffect(()=>{
      currentPostion();
    },[])
    
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
