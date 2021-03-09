import React from 'react';
import './App.css';
import {SpotifyLookup} from "./components/SpotifyLookup";
// @ts-ignore
import TrackObjectSimplified from "spotify-api"

function App() {
  return (
    <div className={'container'}>
      <h1 className={'text-center'}>Spotify Lookup, with ❤️by KreiTech.io</h1>
      <SpotifyLookup/>
    </div>
  )
}

export default App;
