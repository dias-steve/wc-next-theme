import { INITIAL_CHILDREN_LIST } from "./intialChildrenList"
import {getChildBySelector, getListVariationValueAvailble} from '../ProductVariationSelector.utils'


describe('Get Child product by selector', () => {
    test('work with child' , () => {


        const variationSelected = {
            attribute_pa_size: "large",
            attribute_pa_color: "yellow"
        }

        const childrensProduct = INITIAL_CHILDREN_LIST;
        const child = getChildBySelector( variationSelected, childrensProduct)


        expect(child).toStrictEqual(
            {
                "id": 274,
                "name": "produit variable - Large, Yellow",
                "price": "5",
                "regular_price": "5",
                "stock_status": "outofstock",
                "variation_name": {
                    "attribute_pa_size": "large",
                    "attribute_pa_color": "yellow"
                },
                "ship_class": "",
                "free_shippement": null,
                "on_sale": false,
                "shipping_cost_unit": "",
                "thumnail": {
                    "url": "parent",
                    "alt": "alt_parent"
                },
                "product_is_in_stock": true,
                "cleanResult": true,
            }
        )
    })

})

describe('Check getListValiationValueAvailble', () => {
    test('work with child' , () => {


        const variationSelected = {
            attribute_pa_size: "large",
            attribute_pa_color: "yellow"
        }

        const childrensProduct = INITIAL_CHILDREN_LIST;
        const varationKey = "attribute_pa_color"
        const child = getListVariationValueAvailble(variationSelected, varationKey, childrensProduct)


        expect(child).toEqual(
            {
                variationKey:"attribute_pa_color",
                valueList:[
                    {
                        value: "blue",
                        availble: true,
                    },
                    {
                        value: "gray",
                        availble: false,
                    },
                    {
                        value: "green",
                        availble: false,
                    },
                    {
                        value: "red",
                        availble: false,
                    },
                    {
                        value: "yellow",
                        availble: true,
                    },
                ]

            }
        )
    })
})