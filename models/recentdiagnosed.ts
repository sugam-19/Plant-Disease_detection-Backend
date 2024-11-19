'use strict';

import { Sequelize } from "sequelize";

const { Model } = require('sequelize');

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: any }) => {
  class RecentDiagnosed extends Model {
    /**
     * Define associations.
     */
    static associate(models: any) {
      // Association with User model
      RecentDiagnosed.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      // Association with PlantDisease model
      RecentDiagnosed.belongsTo(models.PlantDisease, {
        foreignKey: 'plant_disease_id',
        as: 'plantDisease',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  RecentDiagnosed.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Path to the uploaded image file',
      },
      plant_disease_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'RecentDiagnosed',
      tableName: 'RecentDiagnosed',
      timestamps: true,
    }
  );

  return RecentDiagnosed;
};
