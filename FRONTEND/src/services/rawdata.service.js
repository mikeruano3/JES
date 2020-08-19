import axios from "axios";
import authHeader from "./auth-header";
import httpcommon from "./http-common";

export default class dataService {
    API_URL = `${httpcommon.baseURL}/api/fiscalia`;
    
    findOne = id => {
        return axios.get(this.API_URL+`/findone/${id}`);
    };
      
    findMany = query => {
        return axios.post(this.API_URL+`/findmany`, query);
    };
      
    insertOne = data => {
        return axios.post(this.API_URL+`/insert`, data);
    };
    
    findAll = () => {
        return axios.get(this.API_URL+`/findall`);
    };
    
    update = (query, data) => {
        let queryAndData = { query: query, data: data }
        return axios.put(this.API_URL+`/update`, queryAndData);
    };
      
    remove = query => {
        return axios.delete(this.API_URL+`/delete`, { data: query});
    };
}
    
// return http.get(`/tutorials?title=${title}`);

/*
export default {
    setTable
};
*/