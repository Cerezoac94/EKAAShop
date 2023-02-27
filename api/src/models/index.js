import Product from "./product/Product.model.js";
import User from "./user/User.model.js"
import WishProduct from "./wishProduct/WishProduct.model.js";
import Wish from "./wish/Wish.model.js";
import State from "./state/State.model.js";
import Role from "./role/Role.model.js";
import Category from "./category/Category.model.js";
import Payment from "./payment/Payment.model.js";
import CartProduct from "./cartProduct/CartProduct.model.js";
import CodeDiscount from "./codeDiscount/CodeDiscount.model.js";
import Order from "./order/Order.model.js";
import TypeDiscount from "./typeDiscount/TypeDiscount.model.js";
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

// wish-user
Wish.belongsTo(User, {
  foreignKey:'idUser',
      onDelete: 'CASCADE'
})
User.hasMany(Wish, {
  foreignKey: 'idUser',
      // allowNull: false
})

// wish-user
Wish.belongsToMany(Product, { through: WishProduct, foreignKey:'idWish' })
Product.belongsToMany(Wish, { through: WishProduct, foreignKey:'idProduct' })

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
  CodeDiscount, 
  Order,
  TypeDiscount,
  Cart,
  Review,
  Card,
  Discount,
  OrderDetail
};




