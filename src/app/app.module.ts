import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment'; // Importa el entorno

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule , IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDRFHy0TMKa9fdzkWJsE4jzCcjWuoOdh18",
      authDomain: "bdd-live-d724a.firebaseapp.com",
      databaseURL: "https://bdd-live-d724a-default-rtdb.firebaseio.com",
      projectId: "bdd-live-d724a",
      storageBucket: "bdd-live-d724a.appspot.com",
      messagingSenderId: "911159781854",
      appId: "1:911159781854:web:8b293e103670b71091d54f",
    }))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
