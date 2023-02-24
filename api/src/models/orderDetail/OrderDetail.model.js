import { DataTypes as Dt, Model } from 'sequelize'
import conn from '../../db/db.js'

class OrderDetail extends Model {}

OrderDetail.init({
    quantity: {
        type: Dt.SMALLINT,
        allowNull: false
    }
}, {
    sequelize: conn,
    modelName: 'OrderDetail',
    timestamps: false
})

export default OrderDetail