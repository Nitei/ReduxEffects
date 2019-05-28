import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects/index';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    UsuariosModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot( effectsArr ),
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument( {
      maxAge: 25,
      logOnly: environment.production,
    } )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
