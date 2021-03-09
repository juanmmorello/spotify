import {InteractorListener} from "../types";
// @ts-ignore
import TrackObjectSimplified from "spotify-api"
import {ITrackRepository} from "../adapters/ITrackRepository";

export interface FindTrackListener extends InteractorListener<TrackObjectSimplified[]> {
}

export class FindTrack {
  private repository: ITrackRepository

  constructor(repository: ITrackRepository) {
    this.repository = repository;
  }

  findTracksByQuery(query: String, listener: FindTrackListener) {
    console.log(query)
    this.repository.findAllByTrackQuery(query)
      .then((tracks: TrackObjectSimplified[]) => {
        listener.result(tracks)
      })
      .catch(
        reason => console.log(reason)
      )
  }
}