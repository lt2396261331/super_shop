export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // payload新添加的商品
      // 1.查找数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct 有就加一没有就添加count为1
      if (oldProduct) {
        // 购物车已经存在该商品了
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1')
      } else {
        // 第一次添加该商品到购物车
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('添加了新的商品')

      }
    })
  }
}
