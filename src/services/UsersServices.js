import axios from "axios";
const HOST = "https://venbest-test.herokuapp.com/";

const $host = axios.create({
  baseURL: HOST,
  headers: {
    "Content-type": "application/json",
  },
});

export default class UsersService {
  static getAll = async () => {
    const { data } = await $host.get();
    return data;
  };
}
