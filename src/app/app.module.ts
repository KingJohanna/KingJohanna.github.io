import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-page/login-page.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from 'src/environments/environment';
import { LogInComponent } from './components/google-login/google-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from 'src/app/shared/auth.service';
import { GroupPageComponent } from './components/group-page/group-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogInComponent,
    DashboardComponent,
    GroupPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
