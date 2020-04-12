import { usingFetch } from '../GlobalElements/FetchMethodProvider';

export function GetShoppingItems(){    
    return usingFetch('https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d', 'get')
    // return usingFetch('https://api.myjson.com/bins/qzuzi', 'get')
    .then(response=>{
        if (response.ok) {
            return response.json()      
          } else {            
            console.log("Something went wrong while fetching the data")
            return []
          }
    })
    .catch((error) => {
        //it comes inside catch when server refuses the connection
        console.log("Something went wrong. Please try after some time.")
        return []
    });
}