import axios from 'axios'
import qs from 'qs'
export function postRequest(urlApi,data) {
//   return axios.post(urlApi, qs.stringify({
//     data
// }),
// { headers:{ 'Content-Type':'application/x-www-form-urlencoded' }},
// );
const instance = axios.create({
    withCredentials:true
 });
return instance.post(urlApi,data)
     .then(response=>{
         console.log(response);
     }).catch(error=>{
         console.log(error);
      })
}