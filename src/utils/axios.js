import axios from "axios";
import config from "../../config.json";

axios.defaults.baseURL = `http://${config.server_host}:${config.server_port}`;

console.log(`axios default header: ${axios.defaults.headers.common}`);

export default axios;
