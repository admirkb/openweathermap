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
  public city: string;
  private data: any;
  public weather: any;
  private main: any;
  public humidity: any;
  public pressure: any;
  public temp: any;
  public temp_max: any;
  public temp_min: any;
  public sunrise: any;
  public sunset: any;
  public today:Date;

  constructor(private weatherService: WeatherService, protected route: ActivatedRoute) {
    this.today = new Date();
   }

  ngOnInit() {

    console.log(this.weatherService.hello());
    // http://www.vu-it.es/customerChannel1;cId=DtJiXFJACHi3QJ9Ym;chId=1;showListing=true;etag=true

    this.sub = this.route.params.subscribe(params => {

      (params['c'] !== undefined) ? this.city = params['c'] : null;


      this.GetWeatherDetails('weather?q=' + this.city + ',uk&units=metric&lang=' + this.lang);
      // this.GetWeatherDetails('forecast?q=Blaina,uk&units=metric&lang=' + this.lang);
    });





  }

  protected GetWeatherDetails(args) {
    this.urlArgs = args;


    this.weatherService.get(this.urlArgs).subscribe((data: any) => {
      this.data = data;
      this.weather = data.weather;
      this.main = data.main;
      this.temp = data.main.temp;
      console.dir(data)

      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.temp = data.main.temp;
      this.temp_max = data.main.temp_max;
      this.temp_min = data.main.temp_min;

      this.sunrise = new Date(1000 * data.sys.sunrise);
      this.sunset = new Date(1000 * data.sys.sunset);
    });
  }

}
