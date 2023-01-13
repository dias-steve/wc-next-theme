import { addProductToCartTestings } from "./_addProductToCartTesting.utlis";
import { removeProductToCartTestings } from "./_removeToCartProductTesting.utilis";


describe("Cart Managing", () => {
  describe("Add Product to Card", () => {
    addProductToCartTestings();
  });
  describe("Remove Product to Card", () => {
    removeProductToCartTestings();
  });
});
