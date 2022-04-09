import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyForm } from '../../models/my-form';
import { UserProfile } from '../../models/user-profile';
import { UserProfileResponse } from '../../models/user-profile-response';

@Injectable()
export class RegisterService {

  public registerForm: BehaviorSubject<any> = new BehaviorSubject<MyForm>(new MyForm());
  private $registerForm(): Observable<any> {
    return this.registerForm.asObservable();
  }

  constructor(private _http: HttpClient) { }

  postUser(profile: UserProfile): Observable<any> {
    const url: string = environment.registerUrl + 'RegisterUser';

    return this._http.post<UserProfile>(url, profile)
  }

  getRegisterFormFields() {

    this._http.get<MyForm>('assets/data/register-form.json')
      .subscribe((response: MyForm) => {
        console.log(response);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  registerUser(profile: UserProfile) {
    if (profile) {
      this.postUser(profile)
        .subscribe((response: UserProfileResponse) => {
          if (response && response.success) {
            this.processRegisterResponse(response);
          } else {
            this.processRegisterError(response);
          }
        });
    }
  }

  processRegisterResponse(response: UserProfileResponse) {
    console.log(response);
  }

  processRegisterError(response: UserProfileResponse) {
    console.log(response);
  }
}
