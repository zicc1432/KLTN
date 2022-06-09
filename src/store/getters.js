export default {
    quantity(state) {
        return state.quantity
    },
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory >0)
    },
    product: (state, getters) => id => {
      if (getters.availableProducts.length > 0) {
        return getters.availableProducts.filter(p => p._id === id)[0]
      } else {
        return state.product
      }
    },
    saleProducts (state, getters) {
      return state.products.filter(product => product.sale == true)
    },
    tonerProducts (state, getters) {
      return state.products.filter(product => product.category === 'toner')
    },
    cosrxProducts (state, getters) {
      return state.products.filter(product => product.brand == 'Cosrx')
    },
    
    cartProducts(state, getters) {
        return state.cart.map(cartItem => {
          const product = state.products.find(product => product.id === cartItem.id)
          return {
            title: product.title,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: cartItem.quantity
          }
        })
    },
    cartTotal (state, getters) {
        let total = 0
        // getters.cartProducts.forEach(product => {
        //   total += product.price* product.quantity
        // })
        // return total
        return getters.cartProducts.reduce((total, product) => total + product.price*product.quantity, 0)
    },
    quantityTotal (state, getters) {
      let total = 0
      // getters.cartProducts.forEach(product => {
      //   total += product.price* product.quantity
      // })
      // return total
      return getters.cartProducts.reduce((total, product) => total + product.quantity, 0)
  }
}