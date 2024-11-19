'use strict';

import { Sequelize } from "sequelize";

const { Model } = require('sequelize'); 

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class PlantDisease extends Model {
    static associate(models: any) {
      // Define associations here if necessary
      // e.g., PlantDisease.hasMany(models.RecentDiagnosed);
    }
  }
  
  PlantDisease.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      symptoms: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      prevention: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cause: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      effect: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'PlantDisease',
      tableName: 'PlantDiseases',
      timestamps: true,
    }
  );

  return PlantDisease;
};
