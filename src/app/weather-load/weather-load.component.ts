import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-load',
  templateUrl: './weather-load.component.html',
  styleUrls: ['./weather-load.component.css']
})
export class WeatherLoadComponent implements OnInit {
  public urlArgs: string;
  private lang = "en"
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    console.log(this.weatherService.hello());

    this.GetWeatherDetails('weather?q=Blaina,uk&units=metric&lang=' + this.lang);
    this.GetWeatherDetails('forecast?q=Blaina,uk&units=metric&lang=' + this.lang);


  }

  protected GetWeatherDetails(args) {
    this.urlArgs = args;


    this.weatherService.get(this.urlArgs).subscribe((data: any) => {
      console.log("weatherService Results")

      console.dir(data)
    });
  }

}
