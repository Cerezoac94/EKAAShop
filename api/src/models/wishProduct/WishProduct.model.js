import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class WishProduct extends Model {}

WishProduct.init({
    idWishProduct:{
        type:Dt.INTEGER,
        allowNull: false
    },
    idWish:{
        type:Dt.INTEGER,
        allowNull: false
    },idProduct:{
        type:Dt.INTEGER,
        allowNull: false
    }

},{
    sequelize: conn,
    modelName: "Wish_Product",
    timestamps: false
});

export default WishProduct;