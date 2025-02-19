


import { inject, injectable } from 'inversify';
import { APIUserRepository } from '../features/M_APIUser.repository';
import { IAPIUserRepository } from '../features/IAPIUser.Repository';
import { IAuthService } from './Iauth.Service';

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject("IAPIUserRepository") private _apiUserRepository: IAPIUserRepository) { }

  async authenticate(username: string, password: string) {
    return this._apiUserRepository.singInUser(username, password);
  }
}

