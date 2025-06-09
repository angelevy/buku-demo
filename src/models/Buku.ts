import { Model, DataTypes } from "sequelize";
import database from "../database/database";

class Buku extends Model {
    public id!: number;
    public userid!: string;
    public title!: string;
    public author!: string;
    public imageUrl!: string;
}

Buku.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false
        }
        ,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: database,
        tableName: "buku"
    }
).sync()
    .then(() => console.log("Buku model synced successfully."))
    .catch((error: any) => console.error(`Error syncing Buku model: ${error.message}`));

export default Buku;