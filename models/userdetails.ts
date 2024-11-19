'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize: any, DataTypes: any) => {
  class UserDetails extends Model {
    static associate(models: any) {
      // Define association here
      UserDetails.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user', // Optional: use this alias when fetching associated data
      });
    }
  }

  UserDetails.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',    
      },
    },
  }, {
    sequelize,
    modelName: 'UserDetails',
    tableName: 'userdetails',
    timestamps: true,
  });

  return UserDetails;
};
