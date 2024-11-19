"use strict";
module.exports = (sequelize: any, DataTypes: any) => {
  const ForgotPassword = sequelize.define(
    "ForgotPassword",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      tableName: "ForgotPasswords",
    }
  );

  // Associations
  ForgotPassword.associate = function (models: any) {
    ForgotPassword.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user", 
    });
  };

  return ForgotPassword;
};
