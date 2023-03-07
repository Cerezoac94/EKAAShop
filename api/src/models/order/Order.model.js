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
      allowNull: true
    },
    paid:{
      type: Dt.BOOLEAN,
      allowNull: false
    },
    shipmentState:{
      type: Dt.STRING(12),
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
