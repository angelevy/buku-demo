import { Model, DataTypes } from "sequelize";
import database from "../database/database";

class Buku extends Model {
    public id!: number;
    public userid!: String;
    public title!: String;
    public author!: String;
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
        }
    },
    {
        sequelize: database,
        tableName: "buku"
    }
).sync()
.then(() => console.log("Buku model synced successfully."))
.catch((error: any) => console.error(`Error sycing Buku model: ${error.message}`));
export default Buku;