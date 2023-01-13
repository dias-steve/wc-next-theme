import { isInCart } from "../../utils/Product/cart/cart.utils";

const INITIAL_LIST_PRODUCT = [
    {
      id: "2",
      name: "Product 2",
      price: "100.99",
      thumnail: {},
      quantity: 1,
      sold_individualy: true,
    },
    {
      id: "45",
      name: "Product 45",
      price: "10",
      thumnail: {},
      quantity: 6,
      sold_individualy: false,
    },
  ];

   /*=============================================
    =             IS IN CART TESTING           =
    =============================================*/

  /***
   *
   */
  export function isInCartTesting () {
    test('Works with product in cart', () => {
        const result = isInCart({
            id: "2",
            name: "Product 2",
            price: "100.99",
            thumnail: {},
            quantity: 1,
            sold_individualy: true,
          },INITIAL_LIST_PRODUCT);
        expect(result).toBe(true)
    }) 
    
    test('Works with product not in cart', () => {
        const result = isInCart({
            id: "56",
            name: "Product 2",
            price: "100.99",
            thumnail: {},
            quantity: 1,
            sold_individualy: true,
          },INITIAL_LIST_PRODUCT);
        expect(result).toBe(false)
    }) 
  }