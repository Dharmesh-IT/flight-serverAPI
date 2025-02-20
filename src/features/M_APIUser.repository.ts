import { WhereOptions, Op } from "sequelize";
import { BaseSequelizeRepository } from "../core/repository/BaseSquelizeRepository";
import { m_apiuser } from "../database/M_APIUser.model";
import { IAPIUserRepository } from "./IAPIUser.Repository";

export class APIUserRepository extends BaseSequelizeRepository<m_apiuser> implements IAPIUserRepository {
    constructor() {
        super(m_apiuser);
    }

    async findbyUsername(username: string): Promise<m_apiuser | null> {

        return this.findOne({
            username: username

        } as WhereOptions<m_apiuser>);

        ////below code working with sequelize 6
        // console.log("Model Attributes:", Object.keys(this.model.rawAttributes));
        // const result = await this.model.findOne({ where: { username: { [Op.iLike]: 'test' } } });
        // console.log("RESULT FROM DATABASE:", result);
        // const result2 = await this.model.findOne({ where: { UserName: { [Op.iLike]: username } } });
        // console.log("RESULT FROM DATABASE with result2:", result2);

        // return result;
    }

    async singInUser(username: string, password: string): Promise<m_apiuser | null> {

        return this.findOne({
            UserName: {
                [Op.iLike]: username
            },
            Password: password
        } as WhereOptions<m_apiuser>);
    }
}