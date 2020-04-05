
import axios from 'axios';
// import qs from 'qs';

// axios.interceptors.response.use(res => {
//     window.console.log('响应:', res.config.url, res)
//     return res.data
//   })



const get =(url,params)=>{
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			//将返回值返回给调用者
            resolve(res.data);
            window.console.log(res);
		}).catch(err => {
			reject(err.data);
		})
	});
}


const post =(url,params)=>{
		axios.post(url,params,{
			header:{
				"emulateJSON":"true",
				'Content-Type':'application/json'
				// "Content-Type":"application/json"
			}
		}).then(res => {
			//将返回值返回给调用者
            window.console.log(res.data);
            return res.data;
        
		}).catch(err => {
			return err.data;
		})
	
}


// const post = (url, params) => {
// 	return new Promise((resolve, reject) => {
// 		axios.post(url,{
// 			data:params,
// "emulateJSON":"true",
// 			// data:JSON.stringify(params),	
// 		},{
// 			headers:{
// 				// 'Content-Type':'application/json'
// 				// "Content-Type": "application/x-www-form-urlencoded"
// 			}
// 		}).then(res => {
// 			//将返回值返回给调用者
// 			resolve(res.data);
// 		}).catch(err => {
// 			reject(err.data);
// 		})
// 	});
// }




export default {
	get,
	post
}