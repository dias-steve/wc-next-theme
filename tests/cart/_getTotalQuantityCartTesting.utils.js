import { getTotalQuatity } from "../../utils/product/cart/cart.utils";

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
    =            TOTAL QUANTITY TO CARD TESTING           =
    =============================================*/

  /***
   *
   */

  export function getTotalQuatityTesting () {
    test('Works with products in cart', () => {
        const total = getTotalQuatity(INITIAL_LIST_PRODUCT);
    
        expect(total).toBe(7)
      }) 
    
      test('Works with none product in cart', () => {
        const total = getTotalQuatity([]);
    
        expect(total).toBe(0)
      }) 
  }
