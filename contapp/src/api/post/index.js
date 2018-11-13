export function post(type,data){
    let url ='http://localhost:10010/';
    
return new Promise((resolve,reject)=>{
        fetch(url+type,{
            method:'POST',
            headers:{"Content-Type": "application/json; charset=utf-8"},
            body:JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((responseJSON)=>{
            resolve(responseJSON);
        }).catch((error)=>{
            reject(error);
        })
    })

}