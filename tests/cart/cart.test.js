import { addProductToCartTestings } from "./_addProductToCartTesting.utlis";
import { getTotalPriceTesting } from "./_getTotalPriceCart";
import { getTotalQuatityTesting } from "./_getTotalQuantityCartTesting.utils";
import { isInCartTesting } from "./_isInCartTesting.utils";
import { removeProductToCartTestings } from "./_removeToCartProductTesting.utilis";


describe("Cart Managing", () => {
  describe("Add Product to Cart", () => {
    addProductToCartTestings();
  });
  describe("Remove Product to Cart", () => {
    removeProductToCartTestings();
  });

  describe("Calcul Total Price of the Cart", () => {
    getTotalPriceTesting();
  });

  describe("Calcul Total Quantity Product of the Cart", () => {
    getTotalQuatityTesting();
  });

  describe("Is in Cart", () => {
    isInCartTesting();
  });
});
