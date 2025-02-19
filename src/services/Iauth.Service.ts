import m_apiuser from "../database/M_APIUser.model";

export interface IAuthService {




    authenticate(userName: string, password: string): Promise<m_apiuser | null>;
}
