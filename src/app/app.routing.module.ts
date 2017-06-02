import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLoadComponent } from './weather-load/weather-load.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WeatherLoadComponent,
    },
    {
        path: 'weather',
        component: WeatherLoadComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard,
        // PreloadSelectedModules
    ]
})
export class AppRoutingModule { }
