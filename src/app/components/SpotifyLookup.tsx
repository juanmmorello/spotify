import React, {useState} from "react";
import useFindTrack from "../../core/drivers/hooks/useFindTrack";
// @ts-ignore
import TrackObjectSimplified from "spotify-api"

export interface SpotifyLookupProps {
}

export const SpotifyLookup: React.FC<SpotifyLookupProps> = (props: SpotifyLookupProps) => {
  const [query, setQuery] = useState<String>('')
  const [tracks, setTracks] = useState<TrackObjectSimplified[]>([])
  const {findTrack} = useFindTrack()

  const displayTrackOnCard = (track: TrackObjectSimplified, index: number) => {
    return (
      <div className={'col-4'}>
        <div className="card" style={{marginRight: '10px', marginBottom: '10px'}} key={index}>
          <div className="card-body">
            <h5 className="card-title">{track.name}</h5>
            <p className="card-text">Song by {track.artists[0].name}. Has a popularity index of {track.popularity}</p>
            <a href={track.external_urls.spotify} className="btn btn-primary">Want to listen to it?</a>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = (htmlFormElement: any) => {
    htmlFormElement.preventDefault()
    htmlFormElement.stopPropagation()
    findTrack.findTracksByQuery(query, {
      result: (result: TrackObjectSimplified[]) => {
        setTracks(result)
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="trackName">Song name</label>
          <input type="text" className="form-control" id="trackName" aria-describedby="trackHelp" onChange={(event => setQuery(event.target.value))} />
            <small id="trackHelp" className="form-text text-muted">We'll try our best to look up for your desired song</small>
        </div>
        <button type="submit" className="btn btn-primary">Go!</button>
      </form>
      <div className="row mt-5">
        {tracks.map((track, index) => displayTrackOnCard(track, index))}
      </div>
    </div>
  )
}