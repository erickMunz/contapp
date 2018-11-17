export function post(type,data){
    let url ='http://localhost:10010/';
    const API_HOST = process.env.NODE_ENV === 'production' ? 'www.algo.com' : 'localhost'
    const API_PORT = process.env.API_PORT || '10010'
    const API_URL = `http://${API_HOST}:${API_PORT}/`
    
return new Promise((resolve,reject)=>{
        fetch(API_URL+type,{
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8"},
            body:JSON.stringify(data)
        })
        .then(res => {
            if (res.status!==200){
                reject(res.status);
            }else{
                return res.text();
            }
        })
        .then(body =>{
            let res =JSON.parse(body);
            if(!res.success){
                reject(res.error);
            }
            
        }).catch((error)=>{
            reject(error);
        })
    })

}

export function getToken () {
    return {
        'X-API-KEY': window.localStorage('API_TOKEN')
    }

}