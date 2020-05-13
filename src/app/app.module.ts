import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { ProfileSettingsComponent } from './modules/profile/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CustomersComponent,
    ProfileSettingsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
