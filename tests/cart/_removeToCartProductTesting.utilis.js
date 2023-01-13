import { removeProductToCart } from "../../utils/product/cart/cart.utils";

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
    =            REMOVE TO CARD TESTING           =
    =============================================*/

/***
 *
 */

export const removeProductToCartTestings = () => {
    test("Works when remove a product not in the cart", () => {
      const product = {
        id: "50",
        name: "Product 50",
        price: "15",
        thumnail: {},
        quantity: 1,
        sold_individualy: false,
      };
      const newlist = removeProductToCart(product, INITIAL_LIST_PRODUCT);
  
      expect(newlist).toStrictEqual([
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
      ]);
    });
  
    /**
     *
     */
    test("Works when remove a product already in the cart", () => {
      const product = {
        id: "45",
        name: "Product 45",
        price: "10",
        thumnail: {},
        quantity: 1,
        sold_individualy: false,
      };
      const newlist = removeProductToCart(product, INITIAL_LIST_PRODUCT);
  
      expect(newlist).toStrictEqual([
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
          quantity: 5,
          sold_individualy: false,
        },
      ]);
    });
  
    /**
     *
     */
    test("Work when remove a the last product", () => {
      const product = {
        id: "2",
        name: "Product 2",
        price: "100.99",
        thumnail: {},
        quantity: 1,
        sold_individualy: true,
      };
      const newlist = removeProductToCart(product, INITIAL_LIST_PRODUCT);
  
      expect(newlist).toStrictEqual([
        {
          id: "45",
          name: "Product 45",
          price: "10",
          thumnail: {},
          quantity: 6,
          sold_individualy: false,
        },
      ]);
    });
  };
  
  /*=====  End of REMOVE TO CARD TESTING ======*/