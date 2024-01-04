import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "http://localhost:9090/";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
