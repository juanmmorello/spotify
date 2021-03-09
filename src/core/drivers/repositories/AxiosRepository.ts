import axios, {AxiosInstance} from "axios";

export class AxiosRepository {
  oAuthToken: String = 'BQCm1naeLdYlVnPxG6X43p3mY16QfL1HLu891R9NXsm_ktrDOUvSKAit9qLCSkmDY97wWtUwJWHwnNYDoIhOIE4QuYW2LCwmBXAqEtBwUOTGuTUli-79YvgE80O_B6MaU1C9yFgkmte4etPWdK4m-475KWH8LW32W_Ni4ivMYhqGQkd2LsmH6RckkCGo-1HUO-vZZdWF-5tJcm6w'

  client(): AxiosInstance {
    console.log(this.oAuthToken)
    return axios.create({
      headers: {'Authorization': 'Bearer ' + this.oAuthToken},
    });
  }
}
