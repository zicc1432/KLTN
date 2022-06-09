import shop from "../api/shop"
import axios from 'axios'
const API_BASE = 'http://localhost:8000/api'

export default {
    increment: ({commit}) => {
        commit('increment')
    },
    decrement: ({commit}) => {
        commit('decrement')
    },
    
    async fetchProducts(context) {
        // try {
        //     let response = await axios.get("http://localhost:8080/products")
        //     context.commit("setProducts", response.data)
        //     } catch (err) {
        //         console.log(err.response)
        //     }
        return new Promise (function(resolve) {
            shop.getProducts(products => {
                context.commit('setProducts', products)
                resolve()
            })
        })
    
    },
    // fetchProducts ({commit}) {
    //     commit(ALL_PRODUCTS)
    //     // Fetch actual products from the API
    //     axios.get(`${API_BASE}/products`).then(response => {
    //     commit(ALL_PRODUCTS_SUCCESS, response.data)
    //     })
    // },
    productDetail({commit}, id) {
        // return new Promise (function(resolve) {
        //     shop.getProduct(product => {
        //         context.commit('setProduct', product)
        //         resolve()
        //     })
        // })
    },
    addProductToCart(context, product) {
        if (product.inventory > 0) {
            const cartItem = context.state.cart.find(item => item.id === product.id)
            //find cartItem
            if (!cartItem) {
                context.commit('pushProductToCart', product.id)
            } else {
                context.commit('incrementItemQuantity', cartItem)
            }
            context.commit('decrementProductInventory', product)
        }
    }
}