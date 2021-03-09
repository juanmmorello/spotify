import {ITrackRepository} from "../../adapters/ITrackRepository";
import {FindTrack} from "../../interactors/FindTrack";
import {MockTrackRepository} from "../repositories/MockTrackRepository";

export class Configuration {
  static FindTrackWithRepository(trackRepository: ITrackRepository) {
    return new FindTrack(trackRepository)
  }

  static FindTrack() {
    return this.FindTrackWithRepository(new MockTrackRepository())
  }
}
