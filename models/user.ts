import { Model, Sequelize } from "sequelize";

export interface UserSchema {
  id?: number;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  first_name: string;
  last_name: string;
  contact?: string;
  address?: string;
  username?: string;
}

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: any }) => {
  class User extends Model {
    static associate(models: any) {
      // define association here
    //   this.hasMany(models.ForgetPassword, {
    //     foreignKey: "user_id",
    //   });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};