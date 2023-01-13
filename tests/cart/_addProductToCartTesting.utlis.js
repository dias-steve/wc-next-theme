import { addProductToCard, removeProductToCard } from "../../utils/Product/cart/cart.utils";

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
    =            ADD TO CARD TESTING           =
    =============================================*/

  /***
   *
   */
export const addProductToCartTestings = () => {

  test("Work when add new product", () => {
    const product = {
      id: "50",
      name: "Product 50",
      price: "15",
      thumnail: {},
      quantity: 1,
      sold_individualy: false,
    };
    const newlist = addProductToCard(product, INITIAL_LIST_PRODUCT);

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
      {
        id: "50",
        name: "Product 50",
        price: "15",
        thumnail: {},
        quantity: 1,
        sold_individualy: false,
      },
    ]);
  });

  /**
   *
   */
  test("Work when add a product already in the cart", () => {
    const product = {
      id: "45",
      name: "Product 45",
      price: "10",
      thumnail: {},
      quantity: 1,
      sold_individualy: false,
    };
    const newlist = addProductToCard(product, INITIAL_LIST_PRODUCT);

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
        quantity: 7,
        sold_individualy: false,
      },
    ]);
  });

  /**
   *
   */
  test("Work when add the product is a sold indiviadualy", () => {
    const product = {
      id: "50",
      name: "Product 50",
      price: "15",
      thumnail: {},
      quantity: 1,
      sold_individualy: true,
    };
    const newlist = addProductToCard(product, INITIAL_LIST_PRODUCT);

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
      {
        id: "50",
        name: "Product 50",
        price: "15",
        thumnail: {},
        quantity: 1,
        sold_individualy: true,
      },
    ]);
  });
};
/*=====  End of ADD TO CARD TESTING ======*/