import axios from 'axios'

import { BASE_URl } from '../config/SummaryApi'

const Axios = axios.create({
    baseURL:BASE_URl,
    withCredentials:true  // we are using it so store data as cookies
})

export default Axios;