import {ROUTE_API,BASE_URL} from "./../config/apiConstant"
import axios from 'axios';
/**
 * @description Wrapper over axios
 */
const client = axios.create({
    baseURL: BASE_URL
});
/**
 * 
 * @param data : post data 
 */
export const submitDirection = data => {
    return client.post(ROUTE_API,data);
}
/**
 * 
 * @param token : send token in url to fetch the route detail
 */
export const getDirection = (token) => {
    return  client.get(ROUTE_API+'/'+token);
}


