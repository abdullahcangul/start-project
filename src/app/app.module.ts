import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './components/home/lists/home.component';
import { UsersComponent } from './components/users/lists/users.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserUptComponent } from './components/users/user-upt/user-upt.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeUptdateComponent } from './components/employee/employee-uptdate/employee-uptdate.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import { CustomerUptdateComponent } from './components/customer/customer-uptdate/customer-uptdate.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { ProjectUptdateComponent } from './components/project/project-uptdate/project-uptdate.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProcessAddComponent } from './components/process/process-add/process-add.component';
import { ProcessUptdateComponent } from './components/process/process-uptdate/process-uptdate.component';
import { ProcessListComponent } from './components/process/process-list/process-list.component';
import { TitleAddComponent } from './components/title/title-add/title-add.component';
import { TitleUptdateComponent } from './components/title/title-uptdate/title-uptdate.component';
import { TitleListComponent } from './components/title/title-list/title-list.component';
import { DepartmanAddComponent } from './components/departman/departman-add/departman-add.component';
import { DepartmanUptdateComponent } from './components/departman/departman-uptdate/departman-uptdate.component';
import { DepartmanListComponent } from './components/departman/departman-list/departman-list.component';
import { ContentAddComponent } from './components/content/content-add/content-add.component';
import { ContentUptdateComponent } from './components/content/content-uptdate/content-uptdate.component';
import { ContentListComponent } from './components/content/content-list/content-list.component';
import { CustomerEmployeeAddComponent } from './components/customer-employee/customer-employee-add/customer-employee-add.component';
import { CustomerEmployeeListComponent } from './components/customer-employee/customer-employee-list/customer-employee-list.component';
import { CustomerEmployeeUptdateComponent } from './components/customer-employee/customer-employee-uptdate/customer-employee-uptdate.component';
import { AlertifyService } from './services/alertify.service';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { ProcessDetailComponent } from './components/process/process-detail/process-detail.component';
import { JwtInterceptor } from './security/jwtIntercapter';
import { AuthGuard } from './security/aut-guard';
import { AuthService } from './services/auth.service';
import { ErrorInterceptor } from './security/authentication.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    HomeComponent,
    UsersComponent,
    UserAddComponent,
    UserUptComponent,
    EmployeeListComponent,
    EmployeeUptdateComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    CustomerAddComponent,
    CustomerUptdateComponent,
    CustomerListComponent,
    ProjectAddComponent,
    ProjectUptdateComponent,
    ProjectListComponent,
    ProcessAddComponent,
    ProcessUptdateComponent,
    ProcessListComponent,
    TitleAddComponent,
    TitleUptdateComponent,
    TitleListComponent,
    DepartmanAddComponent,
    DepartmanUptdateComponent,
    DepartmanListComponent,
    ContentAddComponent,
    ContentUptdateComponent,
    ContentListComponent,
    CustomerEmployeeAddComponent,
    CustomerEmployeeListComponent,
    CustomerEmployeeUptdateComponent,
    LoginComponent,
    LayoutComponent,
    CustomerDetailComponent,
    ProjectDetailComponent,
    ProcessDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,

    NgbModule.forRoot()
  ],
  providers: [
    AlertifyService,
    AuthGuard,
    AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }