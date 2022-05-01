import axios, { AxiosRequestConfig, Method } from "axios";
import instance from "./instance";
import { reqBody } from "./function";
interface Reponse<T = any> {
  data?: T[];
}

function request<T>(option: AxiosRequestConfig) {
  const { url = "", method = "get" } = option;

  const reqMethod = method.toLocaleLowerCase() as Method;

  reqBody({
    ...option,
    method: reqMethod,
  });

  if (reqMethod === "get") {
    return instance.get<Reponse<T>>(url, option);
  } else {
    return instance.post<Reponse<T>>(url, option);
  }
}

export default request;
