import { AxiosRequestConfig } from "axios";
import qs from "qs";

export function reqBody(option: AxiosRequestConfig) {
  if (option.method === "post") {
    option.data = qs.stringify(option.data);
  } else {
    option.params = {
      ...option.params,
      ...option.data,
    };
  }

  return option;
}
