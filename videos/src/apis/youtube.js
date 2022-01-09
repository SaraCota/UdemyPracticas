import axios from "axios";

const KEY = "AIzaSyAzsemDutWfloQ7lnvroGpFc_XEyh0DA3Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
