import m_apiuser from '../database/M_APIUser.model';
import { inject, injectable } from "inversify";
import { IAPIUserRepository } from '../features/IAPIUser.Repository';

import { IUserService } from './IUser.Service';

@injectable()
export class UserService implements IUserService {

    constructor(@inject("IAPIUserRepository") private _apiUserRepository: IAPIUserRepository) { }

    async getUserProfile(username: string) {
        return this._apiUserRepository.findbyUsername(username);
    }
}
