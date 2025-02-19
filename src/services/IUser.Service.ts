import m_apiuser from "../database/M_APIUser.model";

export interface IUserService {
    getUserProfile(username: string): Promise<m_apiuser | null>;
}