import { AxiosRequestConfig } from "axios";
import request from "./request";

export function get<T>(url: string, option?: AxiosRequestConfig) {
  return request<T>({
    url,
    method: "get",
    ...option,
  });
}
