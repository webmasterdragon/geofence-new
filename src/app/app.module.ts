import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { Firebase } from "@ionic-native/firebase";
// import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { Storage } from "@ionic/storage";
import { IonicStorageModule } from "@ionic/storage";
import { Geofence } from "@ionic-native/geofence";
import { Geolocation } from "@ionic-native/geolocation";
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult
} from "@ionic-native/native-geocoder";
import { LocationProvider } from "../providers/location/location";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { OneSignal } from "@ionic-native/onesignal";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ClientlocationPage } from '../pages/clientlocation/clientlocation';
import { SetlocationPage } from '../pages/setlocation/setlocation';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ClientlocationPage,
    SetlocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ClientlocationPage,
    SetlocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    Geofence,
    Geolocation,
    LocationProvider,
    NativeGeocoder,
    OneSignal,
    Camera  ]
})
export class AppModule {}
