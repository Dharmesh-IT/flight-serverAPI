import m_apiuser from "../database/M_APIUser.model";

export interface IAPIUserRepository {
    findbyUsername(userName: string): Promise<m_apiuser | null>;
    singInUser(userName: string, password: string): Promise<m_apiuser | null>;
}
