import axios from 'axios'

export function postRequest(urlApi,data) {
   axios({
       method:'post',
       url:urlApi,
       data:data,

       headers:{"Content-Type":"application/x-www-form-urlencoded",
       'Accept':'application/json'}
   }).then(function(res){
       if(res.code==10000){
           
       }
       console.log(res)
   })
}