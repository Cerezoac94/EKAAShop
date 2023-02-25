import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Discount extends Model{}

Discount.init({
    discount:{
        type: Dt.TINYINT
    }
},{
    sequelize:conn,modelName: "Discount", timestamps: false
})

export default Discount;