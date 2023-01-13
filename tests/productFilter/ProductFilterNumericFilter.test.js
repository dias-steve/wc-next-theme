import { getAddListOfNumericalFilter, getAddNumericalFilterInFilter, getRemoveNumericalFilterInFilter } from "../../utils/product/productFilter/ProductFilter.utils";

describe("Adding new numeric Filter",() => {
    test("Work with a first new numeric Filter", () => {
        const initialFilter = {
            taxinomy: null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: null,
          };
          const newFilter1 = getAddNumericalFilterInFilter(
            "price",
            "=",
            '20',
            initialFilter
          );


        expect(newFilter1).toStrictEqual({
            taxinomy:null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [{
                key: 'price',
                operator: '=',
                value:'20'
              }],
        });
    })


    test("Work for update a existing numeric Filter", () => {
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
          const newFilter1 = getAddNumericalFilterInFilter(
            "price",
            "=",
            '50',
            initialFilter
          );


        expect(newFilter1).toStrictEqual({
            taxinomy:null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [{
                key: 'price',
                operator: '=',
                value:'50'
              }],
        });
    })

    test("Work add an other numerical filter to existing list", () => {
        const initialFilter = {
            taxinomy: null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [{
                key: 'price',
                operator: '=',
                value:'50'
              }],
          };
          const newFilter1 = getAddNumericalFilterInFilter(
            "date",
            ">",
            '23452',
            initialFilter
          );


        expect(newFilter1).toStrictEqual({
            taxinomy:null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [{
                key: 'price',
                operator: '=',
                value:'50'
              },
              {
                key: 'date',
                operator: '>',
                value:'23452'
              }],
            
        });

    })
})


describe("Remove new numeric Filter",() => {


    test("Work for removing a not existing numeric Filter", () => {
        const initialFilter = {
            taxinomy:null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: null,
        }
          const newFilter1 = getRemoveNumericalFilterInFilter(
            "price",
            "=",
            initialFilter
          );


        expect(newFilter1).toStrictEqual({
            taxinomy: null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: null,
          });
    })
    test("Work for removing the last numeric Filter", () => {
        const initialFilter = {
            taxinomy:null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [{
                key: 'price',
                operator: '=',
                value:'20'
              }],
        }
          const newFilter1 = getRemoveNumericalFilterInFilter(
            "price",
            "=",
            initialFilter
          );


        expect(newFilter1).toStrictEqual({
            taxinomy: null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: null,
          });
    })


    test("Work removing one numerical filter in the list", () => {
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
                value:'200'
              }
            ],
          };
          const newFilter1 = getRemoveNumericalFilterInFilter(
            "date",
            ">",
            initialFilter
          );


        expect(newFilter1).toStrictEqual({
            taxinomy:null,
            sort: null,
            limit: null,
            page: null,
            postin: null,
            numericalfilter: [{
                key: 'price',
                operator: '=',
                value:'20'
              }],
        });
    })

    
     


})



describe("Add numericalfilter list",() => {
  test("Work with a first new numeric Filter", () => {
      const initialFilter = {
          taxinomy: null,
          sort: null,
          limit: null,
          page: null,
          postin: null,
          numericalfilter: null,
        };
        const newFilter1 = getAddListOfNumericalFilter(
          [{operator: '>=', key:'_price', value:'20'}, {operator: '<=', key:'_price', value:'200'}],
          initialFilter
        );


      expect(newFilter1).toStrictEqual({
          taxinomy:null,
          sort: null,
          limit: null,
          page: null,
          postin: null,
          numericalfilter: [{
              key: '_price',
              operator: '>=',
              value:'20'
            }, {
              key: '_price',
              operator: '<=',
              value:'200'
            }],
      });
  })
})