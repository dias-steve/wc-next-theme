import { getTotalPrice } from "../../utils/product/cart/cart.utils";

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
    =            TOTAL PRICE TO CARD TESTING           =
    =============================================*/

  /***
   *
   */

  export function getTotalPriceTesting () {
    test('Works with products in cart', () => {
        const total = getTotalPrice(INITIAL_LIST_PRODUCT);
    
        expect(total).toBe(110.99)
      }) 
    
      test('Works with none product in cart', () => {
        const total = getTotalPrice([]);
    
        expect(total).toBe(0)
      }) 
  }
