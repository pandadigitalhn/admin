import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Login } from 'app/_models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {
  connected: boolean = false;

  current_api: string = "http://10.216.62.107:8081/";//"http://creaxisapi.creaxis.xyz/";

  constructor(private _http: Http) {
  }

  validarLogin(login: Login) {
    var body = JSON.stringify(login);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.current_api + 'api/Common/Login/User', body, requestOptions).map((data: Response) => {
      return data.json() as Login;
    }, error => {
      console.log("Error al login: ", error);
    });
  }
}
