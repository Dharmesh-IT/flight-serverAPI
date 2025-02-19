import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "./db";

export class Database {
    public sequelize: Sequelize | undefined;

    constructor() {
        this.connectToDatabase();
    }

    private async connectToDatabase() {
        console.log(config);
        this.sequelize = new Sequelize({
            dialect: 'postgres',
            database: config.database,
            username: config.user,
            password: config.password,
            host: config.host,
            port: config.port,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            models: [__dirname + "/../database"],
            define: {
                underscored: false, // Disable automatic lowercasing of column names 

            },
        });

        await this.sequelize.authenticate()
            .then(() => { console.log("connection established successfully."); })
            .catch((err) => { console.log("Unable to connect to the database:", err); });

    }
}