import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Card extends Model {}

Card.init({
  cardNumber: {
    type: Dt.BIGINT,
    allowNull: false
  },
  expirationDate: {
    type: Dt.DATEONLY,
    allowNull: false
  },
  cvv: {
    type: Dt.SMALLINT,
    allowNull: false
  },
  idUser: {
    type: Dt.INTEGER,
    allowNull: false
  }
},{
  sequelize: conn,
  modelName: "Card",
  timestamps: false
})

export default Card;