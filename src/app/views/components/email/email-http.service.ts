import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EmailTemplate} from './email-template';
import {environment} from '../../../../environments/environment.prod';
import {GlobalService} from '../../../auth/global.service';

@Injectable()
export class EmailHttpService {

  private baseUrl = environment.backendUrl + '/input-systems/';

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  getEmailTemplates(inputSystemId): Observable<[EmailTemplate]> {
    return this.http.get<[EmailTemplate]>(this.baseUrl  + inputSystemId + '/emailtemplates', this.globalService.getAuthHeader());
  }

  getAllAvailableProviders(): Observable<[string]> {
    return this.http.get<[string]>(this.baseUrl  + 'emailproviders', this.globalService.getAuthHeader())
  }

  postNewTemplate(newEmailTemplate, inputSystemId) {
    return this.http.post(this.baseUrl + inputSystemId + '/emailtemplates', newEmailTemplate, this.globalService.getAuthHeader())
  }

  deleteEmailTemplate(emailTemplateId, inputSystemName) {
    return this.http.delete(this.baseUrl + inputSystemName + '/emailtemplates/' + emailTemplateId, this.globalService.getAuthHeader());
  }

  updateEmailTemplate(updateTemplate, inputSystemName, emailTemplateId) {
    return this.http.put(this.baseUrl + inputSystemName + '/emailtemplates/' + emailTemplateId, updateTemplate, this.globalService.getAuthHeader());
  }

  postEmail(templateId, inputSystemId, postProperties) {
    return this.http.post(this.baseUrl + inputSystemId + '/emailtemplates/' + templateId + '/post', postProperties, this.globalService.getAuthHeader());
  }

}
