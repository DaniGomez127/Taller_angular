import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: SeriesListComponent }, // Ruta principal que carga SeriesListComponent
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeriesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Añade las rutas aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
