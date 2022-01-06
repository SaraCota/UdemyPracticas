import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 49s9_Jv2ONJF-iXyJf0e0mnXwvM-YF3cj_Hq7ZIhUbs",
  },
});
