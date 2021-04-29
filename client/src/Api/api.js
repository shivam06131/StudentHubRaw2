import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getData = (subCode, chapterNo) =>
  API.get(`/getData/${subCode}/${chapterNo}`);

export const createData = (formData) => API.post(`/create`, formData);
