import axios from "axios"

const request = axios.create({
    baseURL: "https://cnodejs.org/api/v1",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    responseType: "json",
    transformResponse(data) {
        console.log(data, "transformResponse")
        return data;
    },
    proxy: { // 代理
        host: "",
        port: 80
    }
})

request.interceptors.response.use((response) => {
    return response.data;
})

export default request;

export function get(url, params) {
    return request.get(url, {params})
}

export function post(url, params) {
    return request.post(url, {data: params})
}


