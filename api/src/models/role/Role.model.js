import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Role extends Model {}

Role.init({
  name: {
    type: Dt.STRING(15),
    allowNull: false,
  }
},{
  sequelize: conn,
  modelName: "Role",
  timestamps: false
})

export default Role;