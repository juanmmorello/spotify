import {ITrackRepository} from "../../adapters/ITrackRepository";
// @ts-ignore
import TrackObjectSimplified from "spotify-api"

export class MockTrackRepository implements ITrackRepository {
  findAllByTrackQuery(query: String): Promise<TrackObjectSimplified[]> {
    return Promise.resolve([
      MockTrackRepository.createTrack('song 1'),
      MockTrackRepository.createTrack('song 2'),
      MockTrackRepository.createTrack('song 3'),
    ]);
  }

  private static createTrack(name: string): TrackObjectSimplified {
    return {
      artists: [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0cc6vw3VN8YlIcvr1v7tBL"
          },
          "href": "https://api.spotify.com/v1/artists/0cc6vw3VN8YlIcvr1v7tBL",
          "id": "0cc6vw3VN8YlIcvr1v7tBL",
          "name": "Mötley Crüe",
          "type": "artist",
          "uri": "spotify:artist:0cc6vw3VN8YlIcvr1v7tBL"
        }
      ],
      disc_number: 0,
      duration_ms: 0,
      explicit: false,
      external_urls: {
        "spotify": "https://open.spotify.com/album/18fYN6Hlig5t7ObBfQYUPe"
      },
      href: "",
      id: "",
      name: name,
      preview_url: "https://p.scdn.co/mp3-preview/a1c6b90fd23e72c1dd9dcc764a3c14448168cf2b?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 0,
      type: "track",
      uri: ""
    }
  }
}