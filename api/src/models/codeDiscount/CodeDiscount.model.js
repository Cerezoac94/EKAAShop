import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class CodeDiscount extends Model {}

CodeDiscount.init(
  {
    name: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    idCodeDiscount:{
      type: Dt.INTEGER
    }
  },
  {
    sequelize: conn,
    modelName: "CodeDiscount",
    timestamps: false,
  }
);
export default CodeDiscount;
