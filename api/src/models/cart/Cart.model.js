import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Cart extends Model {}

Cart.init(
  {
    idUser:{
      type:Dt.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: conn,
    modelName: "Cart",
    timestamps: false,
  }
);
export default Cart;
