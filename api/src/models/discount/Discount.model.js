import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Discount extends Model{}

Discount.init({
    code:{
        type:Dt.STRING(30),
        
    },
    startDate:{
        type:Dt.DATE,
        allowNull:false
        
    },
    endDate:{
        type:Dt.DATE,
        allowNull:false
    },
    discount:{
        type: Dt.TINYINT,
        allowNull:false
    },
    idProduct:{
        type:Dt.INTEGER,
        allowNull:false
    }
},{
    sequelize:conn,modelName: "Discount", timestamps: false
})

export default Discount;