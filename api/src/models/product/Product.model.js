import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Product extends Model {}

Product.init(
  {
    name: {
      type: Dt.STRING(100),
      allowNull: false,
    },
    description: {
      type: Dt.TEXT,
    },
    price: {
      type: Dt.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: Dt.INTEGER,
      allowNull: false,
    },
    image: {
      type: Dt.TEXT,
      allowNull: false
    },
    idCategory:{
      type: Dt.INTEGER,
      allowNull:true
    }
  },
  {
    sequelize: conn,
    modelName: "Product",
    timestamps: false,
  }
);

export default Product;
