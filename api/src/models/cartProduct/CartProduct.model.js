import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class CartProduct extends Model { }

CartProduct.init({
  idCart: {
    type: Dt.INTEGER,
    allowNull: false
  },
  idProduct: {
    type: Dt.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Dt.SMALLINT,
    allowNull: true
  }
},
  {
    sequelize: conn,
    modelName: "Cart_Product",
    timestamps: false,
  }
);

export default CartProduct;
