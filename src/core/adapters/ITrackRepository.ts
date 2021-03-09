import TrackObjectSimplified = SpotifyApi.TrackObjectSimplified;

export interface ITrackRepository {
  findAllByTrackQuery(query: String): Promise<TrackObjectSimplified[]>
}