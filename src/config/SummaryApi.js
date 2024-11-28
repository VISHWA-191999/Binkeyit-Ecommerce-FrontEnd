// Backend endpoint 
export const BASE_URl = "http://localhost:8080"

const SummaryApi = {
    register : {
        url : 'api/user/register',
        method: 'post'
    },
    login : {
        url : 'api/user/login',
        method:'post'
    }
}

export default SummaryApi;