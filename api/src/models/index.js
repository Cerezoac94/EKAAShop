import Product from "./product/Product.model.js";
import User from "./user/User.model.js"
import WishProduct from "./wishProduct/WishProduct.model.js";
import Wish from "./wish/Wish.model.js";
import State from "./state/State.model.js";
import Role from "./role/Role.model.js";
import Category from "./category/Category.model.js";
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
    
})

// user-role
User.belongsTo(Role, {
  foreignKey:'idRole',
      onDelete: 'RESTRICT'
})
Role.hasMany(User, {
  foreignKey: 'idRole',
  
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
  onDelete:'CASCADE'
})
Cart.belongsToMany(Product, {
  through: CartProduct,
  foreignKey: 'idCart'
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
  onDelete: 'CASCADE'
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
  through: WishProduct,
  foreignKey: 'idWish'
})
Wish.hasMany(WishProduct,{
  foreignKey: 'idWish'
})
User.hasOne(Wish, {
  foreignKey: 'idUser',
})

// wish-wish_product
WishProduct.belongsTo(Wish,{
  foreignKey:'idWish',
  onDelete: 'CASCADE'
})
WishProduct.belongsTo(Product, { 
  foreignKey: 'idProduct',
  onDelete: 'CASCADE'
})
Wish.hasMany(WishProduct,{
  foreignKey:'idWish'
})


// product (wish & cart)
Product.belongsToMany(Cart, {
  through: CartProduct,
  foreignKey: 'idProduct',
   
})
Product.belongsToMany(Wish,  {
  through: WishProduct,
  foreignKey: 'idProduct',
   
})


// product-category
Product.belongsTo(Category,{
  foreignKey: 'idCategory',
  onDelete:'SET NULL',
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


// Product-review
Review.belongsTo(Product,{
  foreignKey:'idProduct',
  onDelete:'CASCADE'
})
Product.hasMany(Review,{
  foreignKey:'idProduct',  
})


OrderDetail.belongsTo(Product,{
  foreignKey:'idProduct',
  onDelete: 'SET NULL'
})
Product.hasMany(OrderDetail,{
  foreignKey:'idProduct'
})

//order_details-order
OrderDetail.belongsTo(Order,{
  foreignKey:'idOrder',
  onDelete: 'CASCADE'
})
Order.hasMany(OrderDetail,{
  foreignKey:'idOrder'
})

// Order-User
Order.belongsTo(User,{
  foreignKey:'idUser',
  onDelete:'SET NULL'
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
  CartProduct, 
  Order,
  Cart,
  Review,
  Card,
  Discount,
  OrderDetail
};




