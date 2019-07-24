//初始化一个购物车状态
const state = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  sheet: false
}
const getters = {
  getSheetStatus: (state) => {//获取操作表显示状态
    return state.sheet
  },
  getCartItems(state) {//获取购物车列表
    return state.cartItems
  },
  getCartTotal(state){ //获取购物车总数
    let count = 0
    state.cartItems.forEach(item => {
      count += item.count
    })
    return count
  },
  getCartItemTotal: (state) => (id) => {//获取某项商品的总数
    let item = state.cartItems.find(item => item.id == id)
    return item.count
  },
  calcTotalPrice: (state) => (idArr) => {
    let totalPrice = 0
    idArr.forEach(id => {
     let item = state.cartItems.find(item => item.id == id)
      totalPrice += item.price * item.count
    })
    return totalPrice
  }
}

const actions = {}

const mutations = {
  setSheetStatus: (state) => {//设置操作表的显示隐藏状态
    state.sheet = !state.sheet
  },
  addGoodsToCart(state, obj) {//添加到购物车
    let cartItem = state.cartItems.find(item => item.id === obj.id)
    if (cartItem) {
      cartItem.count += obj.count
      cartItem.selected = obj.selected
      console.log(cartItem)
    } else {
      state.cartItems.push(obj)
    }
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
  },
  addQuantity(state, id) {//增加购买数量
    let item = state.cartItems.find(item => item.id == id)
    console.log(item)
    item.count++
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
  },
  subtractQuantity(state, id) {//增加购买数量
    let item = state.cartItems.find(item => item.id == id)
    if (item.count > 1) {
      item.count--
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    }
  },
  setSelectedStatus(state,idArr){//更新购物车选中状态
    state.cartItems.forEach(item => {//遍历循环每一项，并将选中状态设置为false
      item.selected = false
    })
    idArr.forEach(id => {//遍历每一项，并将id匹配的项的selected设置为true
     let item = state.cartItems.find(item => item.id == id)
      item.selected = true
    })
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
