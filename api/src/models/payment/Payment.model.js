import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Payment extends Model {}

Payment.init(
  {
    paymentMethod: {
      type: Dt.STRING(20),
      allowNull: false,
    },
    transactionDate: {
      type: Dt.DATE,
      allowNull: false,
    },
    transactionStatus: {
      type: Dt.STRING(20),
      allowNull:false
    },
    idOrder:{
      type:Dt.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize: conn,
    modelName: "Payment",
    timestamps: false,
  }
);

export default Payment;
