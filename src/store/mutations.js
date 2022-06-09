
export default {
    setProducts(state,products) {
        state.products = products
    },
    setProduct(state,product) {
        state.product = product
    },
    increment(state) {
        state.quantity ++
    },
    decrement(state) {
        if (state.quantity >=2){

            state.quantity --
        }
    },
    pushProductToCart(state, productId) {
        state.cart.push({
            id: productId,
            quantity: 1
          })
          state.cartItems++
    },
    incrementItemQuantity(state,cartItem) {
        cartItem.quantity++
        state.cartItems++
      },
    decrementProductInventory(state,product) {
        product.inventory--
    },
    //   setCheckoutStatus(state,status) {
    //     state.checkoutStatus = status
    //   },
}