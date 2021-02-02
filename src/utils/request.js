import axios from 'axios'
import {Redirect} from "react-router-dom";




export function postRequest(urlApi,data) {
   axios({
       method:'post',
       url:urlApi,
       data:data,

       headers:{"Content-Type":"application/x-www-form-urlencoded",
       'Accept':'application/json'}
   }).then(function(res){
       if(res.data.code==10000){
        console.log("发布成功了");
        alert("发布成功了")
        // <Redirect to="/404"/>
       }else if(res.data.code=10001){
           console.log("发布失败");
 
       }else{
           console.log("发布异常")
       }
       console.log("res",res)
   })
}


export function getRequest(url,callback)  {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(json => {
            callback(json)
            if (json.code == 10000) {

                console.log("请求成功");
            } else if (json.code == 10001) {
                console.log("请求失败")
            }
        })
        .catch(err => {
            console.log('异常！！！', err);
        })
}