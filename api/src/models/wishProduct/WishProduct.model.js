import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class WishProduct extends Model {}

WishProduct.init({

},{
    sequelize: conn,
    modelName: "Wish_Product",
    timestamps: false
});

export default WishProduct;