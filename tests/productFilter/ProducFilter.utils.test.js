import {
  addItemInTaxinomieFilter,
  filterConverterToQuery,
  isInTaxinomieFilter,
  removeItemInTaxinomieFilter,
} from "../../utils/product/productFilter/ProductFilter.utils";

describe("Add id in taxinomie filter", () => {
  test("Check that adding a fist id a new taxynomie filter", () => {
    const initialFilter = {
      taxinomy: null,
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
          value: [2, 3,4],
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
          value: [2,4],
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
      taxinomy: null,
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

  test("if Work when we try to remove a id when taxinomy is null", () => {
    const initialFilter = {
      taxinomy: null,
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
      taxinomy: null,
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
  test("work if the value is in taxinomie id array", () => {
    const initialFilter = {
      taxinomy: {
        product_cat: {
          taxinomyKey: "product_cat",
          value: [3, 78],
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

    const newfilter = isInTaxinomieFilter("product_cat", 3, initialFilter);

    expect(newfilter).toStrictEqual(true);
  });

  test("work if the value is not in taxinomy id array", () => {
    const initialFilter = {
      taxinomy: {
        product_cat: {
          taxinomyKey: "product_cat",
          value: [3, 78],
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

    const newfilter = isInTaxinomieFilter("product_cat", 5, initialFilter);

    expect(newfilter).toStrictEqual(false);
  });

  test("work if taxinomie not exist", () => {
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

    const newfilter = isInTaxinomieFilter("product_cat", 5, initialFilter);

    expect(newfilter).toStrictEqual(false);
  });
});

/*=============================================
  =            TanslaterFilter traduction test            =
  =============================================*/

describe("filterConverterToQuery", () => {

  test("Work with no all filter null", () => {
    const initialFilter = {
      taxinomy: null,
      sort: null,
      limit: null,
      page: null,
      postin: null,
      numericalfilter: [],
    };

    const query = filterConverterToQuery(initialFilter);
    expect(query).toStrictEqual("");
  });
  /* Test Taxinomy */
  describe("TaxinomyToQuery", () => {
    test("Work with just one taxinomy in the taxinomies list in the filter", () => {
      const initialFilter = {
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [30, 18],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };

      const query = filterConverterToQuery(initialFilter);
      expect(query).toStrictEqual("?taxinomy=product_cat=30,18");
    });

    test("Work with just tow taxinomies in the taxinomies list in the filter", () => {
      const initialFilter = {
        taxinomy: {
          product_cat: {
            taxinomyKey: "product_cat",
            value: [30, 18],
          },
          product: {
            taxinomyKey: "product",
            value: [2, 5],
          },
        },
        sort: null,
        limit: null,
        page: null,
        postin: null,
        numericalfilter: [],
      };

      const query = filterConverterToQuery(initialFilter);
      expect(query).toStrictEqual("?taxinomy=product_cat=30,18!product=2,5");
    });
  });


  test("Work with limit , page, sort, numericalFilter, postin together", () => {
    const initialFilter = {
      taxinomy:null,
      sort: 'price',
      limit: 2,
      page: 1,
      postin: [190,234,78],
      numericalfilter: [{
        key: 'price',
        operator: '=',
        value:'20'
      },
      {
        key: 'date',
        operator: '>',
        value:'30'
      }
    ]
    };

    const query = filterConverterToQuery(initialFilter);
    expect(query).toStrictEqual("?sort=price&limit=2&page=1&numericalfilter=price=20!date>30&postin=190,234,78");
  });

    /* Test Taxinomy */
    describe("Checking Sort, Page, postin ", () => {
      test("Work with sort", () => {
        const initialFilter = {
          taxinomy:null,
          sort: '-price',
          limit: null,
          page: null,
          postin: null,
          numericalfilter: [],
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?sort=-price");
      });

      test("Work with page", () => {
        const initialFilter = {
          taxinomy:null,
          sort: null,
          limit: null,
          page: 1,
          postin: null,
          numericalfilter: [],
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?page=1");
      });

      test("Work with limit", () => {
        const initialFilter = {
          taxinomy:null,
          sort: null,
          limit: 1,
          page: null,
          postin: null,
          numericalfilter: [],
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?limit=1");
      });


    });


    
    /*=============================================
    =            Numeric filter            =
    =============================================*/
    describe("Numeric filter", () => {

  
      test("Work with just one numeric in the numeric list in the filter", () => {
        const initialFilter = {
          taxinomy: null,
          sort: null,
          limit: null,
          page: null,
          postin: null,
          numericalfilter: [{
            key: 'price',
            operator: '=',
            value:'20'
          }],
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?numericalfilter=price=20");
      });

      test("Work with tow numerics in the numeric list in the filter", () => {
        const initialFilter = {
          taxinomy: null,
          sort: null,
          limit: null,
          page: null,
          postin: null,
          numericalfilter: [{
            key: 'price',
            operator: '=',
            value:'20'
          },
          {
            key: 'date',
            operator: '>',
            value:'30'
          }
        ],
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?numericalfilter=price=20!date>30");
      });
    });
    
    /*=============================================
    =            Postin          =
    =============================================*/

    describe("Post in", () => {

  
      test("Work with just one postin the postinlist in the filter", () => {
        const initialFilter = {
          taxinomy: null,
          sort: null,
          limit: null,
          page: null,
          postin: [256],
          numericalfilter:null,
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?postin=256");
      });

      test("Work with tow postin in the postinlist in the filter", () => {
        const initialFilter = {
          taxinomy: null,
          sort: null,
          limit: null,
          page: null,
          postin: [256,789],
          numericalfilter:null,
        };
  
        const query = filterConverterToQuery(initialFilter);
        expect(query).toStrictEqual("?postin=256,789");
      });
    });
  
    
    
    

  });


