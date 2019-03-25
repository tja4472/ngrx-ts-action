import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter-using-ts-action/counter-using-ts-action.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { CounterUsingActionCreatorComponent } from './counter-using-action-creator/counter-using-action-creator.component';
import { CounterUsingClassesComponent } from './counter-using-classes/counter-using-classes.component';
import { CounterUsingTsActionComponent } from './counter-using-ts-action/counter-using-ts-action.component';

import { reducers } from '.';

import { CounterUsingActionCreatorEffects } from './counter-using-action-creator/counter-using-action-creator.effects';
import { CounterUsingClassesEffects } from './counter-using-classes/counter-using-classes.effects';
import { CounterUsingTsActionEffects } from './counter-using-ts-action/counter-using-ts-action.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterUsingActionCreatorComponent,
    CounterUsingClassesComponent,
    CounterUsingTsActionComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    EffectsModule.forRoot([
      CounterUsingActionCreatorEffects,
      CounterUsingClassesEffects,
      CounterUsingTsActionEffects,
    ]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
