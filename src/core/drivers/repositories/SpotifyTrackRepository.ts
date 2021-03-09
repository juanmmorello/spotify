import {AxiosRepository} from "./AxiosRepository";
import {ITrackRepository} from "../../adapters/ITrackRepository";
// @ts-ignore
import TrackObjectSimplified from "spotify-api"

export class SpotifyTrackRepository extends AxiosRepository implements ITrackRepository {
  findAllByTrackQuery(query: String): Promise<TrackObjectSimplified[]> {
    return this.client().get('https://api.spotify.com/v1/search?q=' + query + '&type=track&limit=15').then((res: {data: TrackObjectSimplified[]}) => {
      // @ts-ignore
      return Promise.resolve(res.data.tracks.items as TrackObjectSimplified[])
    })
  }
}