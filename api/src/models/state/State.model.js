import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class State extends Model { }

State.init({
  name: {
    type: Dt.STRING(25),
    allowNull: null,
  }
}, {
  sequelize: conn,
  modelName: "State",
  timestamps: false
})

export default State;