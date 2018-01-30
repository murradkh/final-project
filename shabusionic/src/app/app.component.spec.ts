//first note: we have to test every class (or component) in isolation, to make sure every one is working . during the isolation testing, if we find the class is depending on other class , so we need to mock the dependency (becuse we want in isolation). isolation is better becouse it will make us focusing on specific class(or specific unit).
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform,MenuController } from 'ionic-angular';
import {} from 'jasmine';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import {Authunication} from '../services/serverside';
import { Geolocation } from '@ionic-native/geolocation';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler } from 'ionic-angular';

// import {
//   PlatformMock,
//   StatusBarMock,
//   SplashScreenMock
// } from '../../test-config/mocks-ionic';

describe('App Component Testing', () => {



//   let fixture;
//   let MyAppComponent;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [MyApp],
//       imports: [
//         IonicModule.forRoot(MyApp)
//       ],
//       providers: [
//         Geolocation,
//         StatusBar,
//         SplashScreen,
//        Authunication,
//        SMS,
//         {provide: ErrorHandler, useClass: IonicErrorHandler}
    
//       ]
//     })
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MyApp);
//     MyAppComponent = fixture.componentInstance;
//   });

  // it('should be created', () => {
  //  expect(MyAppComponent instanceof MyApp).toBe(true);
  // });

  // it('should have two pages', () => {
  //   expect(MyAppComponent.pages.length).toBe(2);
  // });

});