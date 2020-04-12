export function usingFetch(url,actionType){
    return fetch(url, 
    {
         method: actionType,
         headers: {
            'Content-Type': 'application/json',            
          },
       }
      )
      .then(result=>{
        return result;
    });
}