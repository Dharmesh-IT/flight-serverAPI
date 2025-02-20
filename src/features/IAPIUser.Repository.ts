import m_apiuser from "../database/M_APIUser.model";

export interface IAPIUserRepository {
    findbyUsername(username: string): Promise<m_apiuser | null>;
    singInUser(username: string, password: string): Promise<m_apiuser | null>;
}
