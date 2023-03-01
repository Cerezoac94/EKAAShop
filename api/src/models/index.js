import Product from "./product/Product.model.js";
import User from "./user/User.model.js"
import WishProduct from "./wishProduct/WishProduct.model.js";
import Wish from "./wish/Wish.model.js";
import State from "./state/State.model.js";
import Role from "./role/Role.model.js";
import Category from "./category/Category.model.js";
import Payment from "./payment/Payment.model.js";
import CartProduct from "./cartProduct/CartProduct.model.js";
import Order from "./order/Order.model.js";
import Cart from "./cart/Cart.model.js";
import Review from "./review/Review.model.js";
import Card from "./card/Card.model.js";
import OrderDetail from './orderDetail/OrderDetail.model.js'
import Discount from "./discount/Discount.model.js";

// user-state
User.belongsTo(State, {
    foreignKey:'idState',
        onDelete: 'set null'
})

State.hasMany(User, {
    foreignKey: 'idState',
        // allowNull: false
})

// user-role
User.belongsTo(Role, {
  foreignKey:'idRole',
      onDelete: 'RESTRICT'
})
Role.hasMany(User, {
  foreignKey: 'idRole',
      // allowNull: false
})

// card-user
Card.belongsTo(User, {
  foreignKey: 'idUser',
  onDelete: 'CASCADE'
})
User.hasMany(Card, {
  foreignKey:'idUser'
})

// review-user
Review.belongsTo(User, {
  foreignKey: 'idUser',
  onDelete: 'CASCADE'
})
User.hasMany(Review, {
  foreignKey: 'idUser'
})

// user-cart
Cart.belongsTo(User,{
  foreignKey:'idUser',
  onUpdate:'CASCADE'
})
Cart.belongsToMany(Product, {
  through: CartProduct
})
Cart.hasMany(CartProduct,{
  foreignKey: 'idCart'
})
User.hasOne(Cart,{
  foreignKey:'idUser'
})

// cart-cart_product
CartProduct.belongsTo(Cart,{
  foreignKey:'idCart',
})
CartProduct.belongsTo(Product, { 
  foreignKey: 'idProduct'
})
Cart.hasMany(CartProduct,{
  foreignKey:'idCart'
})

// wish-user
Wish.belongsTo(User, {
  foreignKey:'idUser',
      onDelete: 'CASCADE'
})
Wish.belongsToMany(Product, {
  through: WishProduct
})
Wish.hasMany(WishProduct,{
  foreignKey: 'idWish'
})
User.hasOne(Wish, {
  foreignKey: 'idUser',
      // allowNull: false
})

// wish-wish_product
WishProduct.belongsTo(Wish,{
  foreignKey:'idWish',
})
WishProduct.belongsTo(Product, { 
  foreignKey: 'idProduct'
})
Wish.hasMany(WishProduct,{
  foreignKey:'idWish'
})
// wishProduct (wish & product)
// Wish.belongsToMany(Product, { through: WishProduct, foreignKey:'idWish' })
// Product.belongsToMany(Wish, { through: WishProduct, foreignKey:'idProduct' })

// product (wish & cart)
Product.belongsToMany(Cart,  { through: CartProduct })
Product.belongsToMany(Wish,  { through: WishProduct })
Cart.belongsToMany(Product, { through: CartProduct })
Wish.belongsToMany(Product, { through: WishProduct })

// product-category
Product.belongsTo(Category,{
  foreignKey: 'idCategory',
  // onDelete:'set null', Esto me marca un error
  onDelete:'RESTRICT',
  onUpdate:'CASCADE'
})
Category.hasMany(Product,{
  foreignKey: 'idCategory'
})


//Product-discount
Discount.belongsTo(Product, {
  foreignKey: 'idProduct',
  onDelete: 'CASCADE'
});
Product.hasMany(Discount, {
  foreignKey: 'idProduct',
});

// //Product-cart_Product
// CartProduct.belongsTo(Product,{
//   foreignKey:'idProduct',
// })
// Product.hasMany(CartProduct,{
//   foreignKey:'idProduct'
// })

//Product-review

// Review.belongsTo(Product,{
//   foreignKey:'idProduct',
//   onDelete:'CASCADE'
// })
// Product.hasMany(Review,{
//   foreignKey:'idProduct',  
// })

//Product-order_details
OrderDetail.belongsTo(Product,{
  foreignKey:'idProduct',
  // onUpdate:'CASCADE' Esto no va, porque si cambia porque si por ejemplo el precio del producto cambia, el precio anterior se respeta porque ya esta en la oden
})
Product.hasMany(OrderDetail,{
  foreignKey:'idProduct'
})

//order_details-order
OrderDetail.belongsTo(Order,{
  foreignKey:'idOrder'
})
Order.hasMany(OrderDetail,{
  foreignKey:'idOrder'
})

// Order-Payment
Payment.belongsTo(Order,{
  foreignKey:'idOrder'
})
Order.hasMany(Payment,{
  foreignKey:'idOrder',
  onUpdate:'CASCADE'
})

// Order-User
Order.belongsTo(User,{
  foreignKey:'idUser',
  onUpdate:'CASCADE'
})
User.hasMany(Order,{
  foreignKey:'idUser'
})







export { 
  Product,
  User,
  WishProduct,
  Wish,
  State,
  Role, 
  Category, 
  Payment, 
  CartProduct, 
  Order,
  Cart,
  Review,
  Card,
  Discount,
  OrderDetail
};




