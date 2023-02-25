import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class User extends Model {}

User.init(
  {
    userName: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    firstName: {
      type: Dt.STRING(30)
    },
    lastName: {
      type: Dt.STRING(30)
    },
    email: {
      type: Dt.STRING(100),
      allowNull: false,
    },
    password: {
      type: Dt.TEXT,
      allowNull: false,
    },
    birthday: {
      type: Dt.DATEONLY,
    },
    phone: {
      type: Dt.STRING(15)
    },
    adress: {
      type: Dt.TEXT
    },
    memberSince: {
      type: Dt.DATE
    },
    isActive: {
      type: Dt.BOOLEAN,
      allowNull: false,
    }
  },
  {
    sequelize: conn,
    modelName: "User",
    timestamps: false
  }
);

export default User;