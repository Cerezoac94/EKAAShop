import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";

class Role extends Model { }

Role.init({
  name: {
    type: Dt.STRING(15),
    allowNull: false,
  }
}, {
  sequelize: conn,
  modelName: "Role",
  timestamps: false
})

Role.afterSync(async role => {
  const roles = await Role.findAll({
    where: {
      name: ['Admin', 'User'] 
    } 
  });
  if (roles.length === 2) return;
  await Role.bulkCreate([
    { name: 'Admin' },
    { name: 'User' }
  ], { validate: true })
})

export default Role;