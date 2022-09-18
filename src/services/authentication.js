import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";

const API_URL = BASE_API_URL + "/api";

class AuthenticationService {
  login(user) {
    return axios.post(API_URL + "/login", user);
  }
  register(user) {
    return axios.post(API_URL + "/save/user", user);
  }
}
export default new AuthenticationService();
