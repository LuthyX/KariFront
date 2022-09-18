import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";
import { authHeader } from "./baseService";

const API_URL = BASE_API_URL + "/api/package";
const WALLET_API_URL = BASE_API_URL + "/api/wallet";
const PAY_PACKAGE_API_URL = BASE_API_URL + "/api/package/pay";
const GET_HISTORY = BASE_API_URL + "/api/history";
const CONTACT_US = BASE_API_URL + "/api/contact";

class packageService {
  getPackages(id) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }
  getWallet(id) {
    return axios.get(WALLET_API_URL + "/" + id, { headers: authHeader() });
  }
  payPackage(pay) {
    return axios.post(PAY_PACKAGE_API_URL, pay, { headers: authHeader() });
  }
  getHistory(id) {
    return axios.get(GET_HISTORY + "/" + id, { headers: authHeader() });
  }
  postContact(contact) {
    return axios.post(CONTACT_US, contact, { headers: authHeader() });
  }
}

export default new packageService();
