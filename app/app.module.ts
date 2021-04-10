import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BusinessAccountComponent } from "./business-account/business-account.component";
import { PersonalAccountComponent } from "./personal-account/personal-account.component";

import { environment } from '../environments/environment';

const config = {
  apiKey: "AIzaSyCNbndtICG2GtT7aGT-_g1-F97aGpWRVbQ",
  authDomain: "opendata-opbk.firebaseapp.com",
  databaseURL: "https://opendata-opbk-default-rtdb.firebaseio.com",
  projectId: "opendata-opbk",
  storageBucket: "opendata-opbk.appspot.com",
  messagingSenderId: "1038952025262"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BusinessAccountComponent,
    PersonalAccountComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
