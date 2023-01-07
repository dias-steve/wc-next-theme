

export const handleFetchProductList = (query) =>{
    return new Promise((resolve, reject) => {
        fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/products"+query, {
            // Adding method type
            method: "GET",
        
            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then( response => response.json())
            .then(response => resolve(response))
            .catch(err => reject(err))
    });
}