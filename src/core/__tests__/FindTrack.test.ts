import {FindTrack} from "../interactors/FindTrack";
import {Configuration} from "../drivers/configuration/Configuration";
import TrackObjectSimplified from "spotify-api"

const findTrack: FindTrack = Configuration.FindTrack()

test('find all tracks by query name', () => {
  findTrack.findTracksByQuery('song', {
    result: ((result: TrackObjectSimplified[]) => {
      expect(result.length).toBe(3)
      result.forEach(track => expect(track.name).toContain('song'))
    })
  })
})