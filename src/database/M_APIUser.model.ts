
import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "m_apiuser",
    timestamps: true, // Disable timestamps
})
export class m_apiuser extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "id"
    })
    ID?: number;
    @Column({ type: DataType.STRING, field: "username" })
    UserName?: string;
    @Column({ type: DataType.STRING, field: "password" })
    Password?: string;
    @Column({ type: DataType.STRING, field: "isactive" })
    IsActive?: boolean;
    // @Column({ type: DataType.DATE, field: "Crd" })
    // Crd?: Date
}

export default m_apiuser;