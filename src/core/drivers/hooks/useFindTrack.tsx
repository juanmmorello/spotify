import {FindTrack} from "../../interactors/FindTrack";
import {Configuration} from "../configuration/Configuration";
import {SpotifyTrackRepository} from "../repositories/SpotifyTrackRepository";

export default () => {
  const findTrack: FindTrack = Configuration.FindTrackWithRepository(new SpotifyTrackRepository())
  return {findTrack}
}