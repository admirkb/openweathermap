import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-weather-load',
  templateUrl: './weather-load.component.html',
  styleUrls: ['./weather-load.component.css']
})
export class WeatherLoadComponent implements OnInit {
  private sub: Subscription;
  public urlArgs: string;
  private lang = "en"
  private _city: string;
  constructor(private weatherService: WeatherService, protected route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.weatherService.hello());
    // http://www.vu-it.es/customerChannel1;cId=DtJiXFJACHi3QJ9Ym;chId=1;showListing=true;etag=true

    this.sub = this.route.params.subscribe(params => {

      (params['c'] !== undefined) ? this._city = params['c'] : null;


      this.GetWeatherDetails('weather?q=' + this._city + ',uk&units=metric&lang=' + this.lang);
      // this.GetWeatherDetails('forecast?q=Blaina,uk&units=metric&lang=' + this.lang);
    });





  }

  protected GetWeatherDetails(args) {
    this.urlArgs = args;


    this.weatherService.get(this.urlArgs).subscribe((data: any) => {
      console.log("weatherService Results")

      console.dir(data)
    });
  }

}
