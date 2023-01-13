export const addProductToCard = (productToAdd, productList) => {
    let productAddedStatus = false;
    const newProductList = productList.map(itemProduct => {
    
        if(itemProduct.id=== productToAdd.id && !productToAdd.sold_individualy){
            productAddedStatus = true;
            const newQuantity = Number(itemProduct.quantity) + Number(productToAdd.quantity)
            return {...itemProduct, quantity: newQuantity }
        }
        return itemProduct;
    })

    if(productAddedStatus){
        return newProductList;
    }else{
        return [...productList,productToAdd ];
    }
}

export const removeProductToCard = (productToRemove, productList) => {
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

}

export const getTotalQuatity = (productList) => {
    
}

