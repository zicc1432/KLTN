import axios from "axios"
const API_BASE = 'http://localhost:8000/api'

export default {
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCT(state, products) {
            state.products = products
        }
    },
    actions: {
        async getProduct(context) {
            try {
            let response = await axios.get("http://localhost:8080/products")
            context.commit("SET_PRODUCT", response.data)
            } catch (err) {
                console.log(err.response)
            }
        },
    }
}
