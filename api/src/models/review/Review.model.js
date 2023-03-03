import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Review extends Model {}

Review.init({
  rating: {
    type: Dt.TINYINT,
    allowNull: false
  },
  title: {
    type: Dt.STRING(50)
  },
  description: {
    type: Dt.TEXT
  },
  reviewDate: {
    type: Dt.DATEONLY,
    allowNull: false
  },
  idUser: {
    type: Dt.INTEGER,
    allowNull: false
  },
  idProduct:{
    type: Dt.INTEGER,
    allowNull: false
  }
  // Falata agregar el campo de la clave foranea de product
}, {
  sequelize: conn,
  modelName: "Review",
  timestamps: false
})

export default Review;