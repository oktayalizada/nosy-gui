import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InputSystem} from './input-system';
import {Observable} from 'rxjs/Observable';
import {GlobalService} from '../../auth/global.service';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class NosyHttpService {

  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient, private globalService: GlobalService ) {}

  getInputSystems(): Observable<[InputSystem]> {
    // const headers: HttpHeaders = new HttpHeaders({
    //    'Authorization' : this.keycloakService.getToken().toString()
    //
    //     });
    return this.http.get<[InputSystem]>(this.baseUrl + '/inputsystems', this.globalService.getAuthHeader());
  }

  postInputSystemName(inputSystemName: string) {
    const inputSystem = new InputSystem(inputSystemName);
    // noinspection JSAnnotator
    delete inputSystem.id;
    return this.http.post(this.baseUrl + '/inputsystems', inputSystem, this.globalService.getAuthHeader());
  }

  deleteExistingInputSystem(inputSystem: string) {
    return this.http.delete(this.baseUrl + '/inputsystems/' + inputSystem, this.globalService.getAuthHeader());
  }

  updateExistingInputSystem(inputSystem: InputSystem) {
    const urlAdder = inputSystem.id;
    return this.http.put(this.baseUrl + '/inputsystems/' + urlAdder, inputSystem, this.globalService.getAuthHeader());
  }

}
