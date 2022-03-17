import axios, { AxiosRequestConfig } from "axios";

interface Reponse<T = any> {
  data?: T[];
}

function request<T>(url: string, option: AxiosRequestConfig) {}
