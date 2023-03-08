import { DataTypes as Dt, Model } from "sequelize";
import conn from "../../db/db.js";
import bcrypt from "bcrypt"

class User extends Model { 

  hashAuth(password, salt){
    return bcrypt.hash(password, salt)
  }

  async validatePassword(password) {
    const passwordHash = await this.hashAuth(password, this.salt)
    return passwordHash === this.password
  }
 }

User.init(
  {
    userName: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    firstName: {
      type: Dt.STRING(30)
    },
    lastName: {
      type: Dt.STRING(30)
    },
    email: {
      type: Dt.STRING(100),
      allowNull: false,
    },
    password: {
      type: Dt.TEXT,
      allowNull: false,
    },
    birthday: {
      type: Dt.DATEONLY,
    },
    phone: {
      type: Dt.STRING(15)
    },
    adress: {
      type: Dt.TEXT
    },
    memberSince: {
      type: Dt.DATE
    },
    salt: {
      type: Dt.STRING
    },
    idState: {
      type: Dt.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    idRole: {
      type: Dt.INTEGER,
      allowNull: false
    },
    idCart: {
      type: Dt.INTEGER,
      allowNull: true
    },
    idWish: {
      type: Dt.INTEGER,
      allowNull: true
    }

  },
  {
    sequelize: conn,
    modelName: "User",
    timestamps: false
  }
);

User.beforeCreate(async(user, options)=>{
  const salt = await bcrypt.genSalt()
  user.salt = salt
  const passwordHash = await user.hashAuth(user.password, user.salt)
  user.password = passwordHash
})

User.afterCreate(async user => {
  if (user.id === 1) {
  await user.update({ idRole: 1 })
  }
})


export default User;