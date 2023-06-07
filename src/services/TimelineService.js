import axios from 'axios'

const timelineService = axios.create({
  withCredentials: false,
  headers: {
    'Accept': 'text/plain',         // We'll be using YAML for the timeline data
    'Content-Type': 'text/plain'    // so stick to plain text as the mime type
  }
})

export default {
  get(url) {
    return timelineService.get(url);
  }
}
