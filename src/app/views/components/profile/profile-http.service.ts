import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../../auth/global.service';
import {environment} from '../../../../environments/environment.prod';

@Injectable()
export class ProfileHttpService {
  private baseUrl = environment.backendUrl + '/users';

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  public getProfileInfo() {
    return this.http.get(this.baseUrl, this.globalService.getAuthHeader());
  }

  public deleteProfile() {
    return this.http.delete(this.baseUrl, this.globalService.getAuthHeader());
  }

}
