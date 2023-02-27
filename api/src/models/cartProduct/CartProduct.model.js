import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class CartProduct extends Model {}

CartProduct.init(
  {
    idProduct:{
      type:Dt.INTEGER,
      allowNull:false
    },
    idCart:{
      type:Dt.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize: conn,
    modelName: "Cart_Product",
    timestamps: false,
  }
);

export default CartProduct;
