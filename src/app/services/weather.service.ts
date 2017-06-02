import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class WeatherService {
  private baseUrl: string = 'http://api.openweathermap.org/data/2.5/';
  private APPID: string = '9f418aa13e4981ce8b349706db67309e';
  constructor(private http: Http) {


  }

  public get(args: any): Observable<Response> {

    // var dataToSend = { "RestService": restService, "RestData": restData }
    // dataToSend['Context'] = context;
    // let fullUrl = url + JSON.stringify(dataToSend);

    console.dir(this.http)
    return this.http.get(this.baseUrl + args + '&APPID=' + this.APPID)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};

    // Mapping to concrete class maybe here if required
    // AddressesAPIFormModelMapper.Map(body);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead

    alert(errMsg)
    return Observable.throw(errMsg);
  }

  // 9f418aa13e4981ce8b349706db67309e
  // Admir__TV	

  // api.openweathermap.org/data/2.5/weather?q=London,uk


  public hello() {

    return "Hello2";
  }


}
