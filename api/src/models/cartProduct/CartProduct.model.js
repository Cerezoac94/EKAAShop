import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class CartProduct extends Model {}

CartProduct.init(
  {},
  {
    sequelize: conn,
    modelName: "Cart_Product",
    timestamps: false,
  }
);

export default CartProduct;
