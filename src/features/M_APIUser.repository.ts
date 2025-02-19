
import { WhereOptions } from "sequelize";
import { BaseSequelizeRepository } from "../core/repository/BaseSquelizeRepository";
import { m_apiuser } from "../database/M_APIUser.model";
import { IAPIUserRepository } from "./IAPIUser.Repository";


export class APIUserRepository extends BaseSequelizeRepository<m_apiuser> implements IAPIUserRepository {
    constructor() {
        super(m_apiuser);
    }

    async findbyUsername(userName: string): Promise<m_apiuser | null> {
        return this.findOne({ username: userName } as WhereOptions<m_apiuser>);

    }
    async singInUser(userName: string, password: string): Promise<m_apiuser | null> {
        return this.findOne({ username: userName, password: password } as WhereOptions<m_apiuser>);


    }
}