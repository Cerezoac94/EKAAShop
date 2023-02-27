import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Order extends Model {}

Order.init(
  {
    orderDate: {
      type: Dt.DATE,
      allowNull: false,
    },
    idUser:{
      type: Dt.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: conn,
    modelName: "Order",
    timestamps: false,
  }
);
export default Order;
