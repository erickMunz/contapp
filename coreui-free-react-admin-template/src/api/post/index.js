export function post(type,data){
    let url ='http://localhost:3000/';
    
return new Promise((resolve,reject)=>{
        fetch(url+type,{
            method:'POST',
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