import { Model,DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/sequelize";
import { Guid } from "guid-typescript";

export interface TodoAttributes {
  id : any
  title: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

export class TodoModel extends Model implements TodoAttributes {
  
  public id!:any
  public title!: string
  public description: string
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}


TodoModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  sequelize: sequelize,
  paranoid: true,
  modelName:'todos'
})