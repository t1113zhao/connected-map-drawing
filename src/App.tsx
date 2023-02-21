import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Map, MapProps } from './components/mapdrawing/Map';
import {LatLng} from 'leaflet'
import { Station } from './state/stations/stationState';
import { Transfer } from './state/transfers/transferState';
import { Track } from './state/tracks/trackState';
import { generateStations, generateTracks, generateTransfers } from './components/mapdrawing/TestStateGenerator';

let stations = generateStations([[51.51,0.01],[51.49,0.01], [51.52,0.02], [51.51,0.03], [51.51,0.04], [51.53,-0.01], [51.49,0.04]])

let transfers = generateTransfers(stations, [[3,4],[2,4]])

let tracks = generateTracks(
  stations,
  [
    {stationIds: [0,1], nodeNumbers: [[51.505,0.01],[51.5025,0.015],[51.50,0.005],[51.495, 0.005]]}
  ]
)
console.log('=======')
console.log(JSON.stringify(tracks))

let center  = new LatLng(51.50, 0.02)
function App() {
  return (
    <div className="App">
      <Map stations={stations} transfers={transfers} tracks={tracks} center={center} zoom={13}/>
    </div>
  );
}

export default App;
