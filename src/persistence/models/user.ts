import { Model,DataTypes, Sequelize } from "sequelize";
import sequelize from "../repositories/sqlConnection";


export interface UserAttributes {
    id : any
    name: string
    email: string
    password: string
    createdAt?: Date
    updatedAt?: Date
}

export class UserModel extends Model implements UserAttributes {
    
    public id!:any
    public name!: string
    public email: string
    public password!: string
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}


UserModel.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
    modelName:'Users'
  })
  
