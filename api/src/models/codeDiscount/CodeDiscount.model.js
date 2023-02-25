import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class CodeDiscount extends Model {}

CodeDiscount.init(
  {
    name: {
      type: Dt.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: conn,
    modelName: "Code_Discount",
    timestamps: false,
  }
);
export default CodeDiscount;
