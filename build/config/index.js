"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db_1 = require("./db");
class Database {
    constructor() {
        this.connectToDatabase();
    }
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(db_1.config);
            this.sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                database: db_1.config.database,
                username: db_1.config.user,
                password: db_1.config.password,
                host: db_1.config.host,
                port: db_1.config.port,
                pool: {
                    max: db_1.config.pool.max,
                    min: db_1.config.pool.min,
                    acquire: db_1.config.pool.acquire,
                    idle: db_1.config.pool.idle
                },
                models: [__dirname + "/../database"],
                define: {
                    underscored: false, // Disable automatic lowercasing of column names 
                },
            });
            yield this.sequelize.authenticate()
                .then(() => { console.log("connection established successfully."); })
                .catch((err) => { console.log("Unable to connect to the database:", err); });
        });
    }
}
exports.Database = Database;
//# sourceMappingURL=index.js.map