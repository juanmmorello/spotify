import axios, {AxiosInstance} from "axios";

export class AxiosRepository {
  oAuthToken: String = ''

  client(): AxiosInstance {
    console.log(this.oAuthToken)
    return axios.create({
      headers: {'Authorization': 'Bearer ' + this.oAuthToken},
    });
  }
}
