export const addProductToCart = (productToAdd, productList) => {
    let productAddedStatus = false;
    const newProductList = productList.map(itemProduct => {
    
        if(itemProduct.id === productToAdd.id ){
            productAddedStatus = true;
            if(!productToAdd.sold_individualy){
            const newQuantity = Number(itemProduct.quantity) + Number(productToAdd.quantity)
            return {...itemProduct, quantity: newQuantity }
            }
        }
        return itemProduct;
    })

    if(productAddedStatus){
        return newProductList;
    }else{
        return [...productList,productToAdd ];
    }
}

export const removeProductToCart = (productToRemove, productList) => {
    let productRemovedStatus = false;

    const newProductList = productList.reduce((newItemList, currentItemProduct) => {

        if(currentItemProduct.id=== productToRemove.id){
            productRemovedStatus = true;

            const newQuantity = Number(currentItemProduct.quantity) - Number(productToRemove.quantity)
            if(newQuantity <1){
                return  newItemList;
            }

            return  newItemList = [...newItemList,{...currentItemProduct, quantity: newQuantity }]
        }

        return newItemList = [...newItemList,currentItemProduct];
    }, [])

    if(productRemovedStatus){
        return newProductList;
    }else{
        return [...productList];
    }
}

export const getTotalPrice = (productList) => {
    if(Array.isArray(productList)){
        return productList.reduce((total, product) => {
            const {price} = product;
            return total + Number(price)
        }, 0)
    }
    return 0;
  
}

export const getTotalQuatity = (productList) => {
    if(Array.isArray(productList)){
        return productList.reduce((total, product) => {
            const {quantity} = product;
            return total + Number(quantity)
        }, 0)
    }
    return 0;
}

export const isInCart = (product , productList) => {

     const result = productList.filter(productCart => {
        const {id} = productCart
        return product.id === id;
    })

    return result.length > 0 ? true : false;
}

