import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EmployeesComponent } from './employees/employees.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule }    from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EmployeeRegistrationComponent,
    ViewEmployeesComponent,
    EmployeesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    InputsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    GridModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
