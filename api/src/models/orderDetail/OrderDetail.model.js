import { DataTypes as Dt, Model } from 'sequelize'
import conn from '../../db/db.js'

class OrderDetail extends Model {}

OrderDetail.init({
    quantity: {
        type: Dt.SMALLINT,
        allowNull: false
    },
    unitPrice: {
        type: Dt.DECIMAL(10,2),
        allowNull: false
    },
    idOrder:{
        type: Dt.INTEGER,
        allowNull:false
    },
    idProduct:{
        type: Dt.INTEGER,
        allowNull:false
    }
}, {
    sequelize: conn,
    modelName: 'Order_Detail',
    timestamps: false
})

export default OrderDetail