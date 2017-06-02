import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLoadComponent } from './weather-load.component';

describe('WeatherLoadComponent', () => {
  let component: WeatherLoadComponent;
  let fixture: ComponentFixture<WeatherLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
