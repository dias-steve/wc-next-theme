import {
    addItemInTaxinomieFilter,
    isInTaxinomieFilter,
    removeItemInTaxinomieFilter,
  } from "../ProductCategorieFilter.utils";
  
  describe("Add id in taxinomie filter", () => {
    test("Check that adding a fist id a new taxynomie filter", () => {
      const initialFilter = {
        taxinomy: {},
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };
      const newFilter1 = addItemInTaxinomieFilter(
        "product_cat",
        2,
        initialFilter
      );
  
      expect(newFilter1).toStrictEqual({
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [2],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      });
    });
  
    test("Check that adding a new id a existing taxynomie filter", () => {
      const initialFilter = {
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [2],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };
  
      const newFilter1 = addItemInTaxinomieFilter(
        "product_cat",
        3,
        initialFilter
      );
  
      expect(newFilter1).toStrictEqual({
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [2, 3],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      });
    });
  });
  
  describe("Remove id in taxinomie filter", () => {
    test("Check that removing a id which exist in taxynomie filter", () => {
      const initialFilter = {
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [2, 3],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };
  
      const newFilter1 = removeItemInTaxinomieFilter(
        "product_cat",
        3,
        initialFilter
      );
  
      expect(newFilter1).toStrictEqual({
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [2],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      });
    });
  
    test("Check that removing the last id which is in taxynomie filter", () => {
      const initialFilter = {
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [3],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };
  
      const newFilter1 = removeItemInTaxinomieFilter(
        "product_cat",
        3,
        initialFilter
      );
  
      expect(newFilter1).toStrictEqual({
        taxinomy: {},
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      });
    });
  
    test("Check that removing the last id which is in taxynomie but  with other taxynomnie in the array filter", () => {
      const initialFilter = {
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [3],
          },
          product: {
            taxinomyKey: "product",
            value: [30],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };
  
      const newFilter1 = removeItemInTaxinomieFilter(
        "product_cat",
        3,
        initialFilter
      );
  
      expect(newFilter1).toStrictEqual({
        taxinomy: {
          product: {
            taxinomyKey: "product",
            value: [30],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      });
    });
  });
  
  /**
   * Testing isInCategoryFilter
   */
  describe("Check is In taxinomie id ", () => {
    test('work if the value is in taxinomie id array', () => {
        const initialFilter = {
            taxinomy: {
            product_cat: {
                taxinomyKey: "product_cat",
                value: [3,78],
            },
            product: {
                taxinomyKey: "product",
                value: [30],
            },
            },
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [],
        };

        const newfilter = isInTaxinomieFilter('product_cat', 3 ,initialFilter);

        expect(newfilter).toStrictEqual(true)
    })

    test('work if the value is not in taxinomy id array', () => {
        const initialFilter = {
            taxinomy: {
            product_cat: {
                taxinomyKey: "product_cat",
                value: [3,78],
            },
            product: {
                taxinomyKey: "product",
                value: [30],
            },
            },
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [],
        };

        const newfilter = isInTaxinomieFilter('product_cat', 5 ,initialFilter);

        expect(newfilter).toStrictEqual(false)
    })

    test('work if taxinomie not exist', () => {
        const initialFilter = {
            taxinomy: {
                product: {
                    taxinomyKey: "product",
                    value: [30],
                },
            },
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [],
        };

        const newfilter = isInTaxinomieFilter('product_cat', 5,initialFilter );

        expect(newfilter).toStrictEqual(false)
    })

  })