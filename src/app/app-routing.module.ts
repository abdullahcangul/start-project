import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserUptComponent } from './components/users/user-upt/user-upt.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeUptdateComponent } from './components/employee/employee-uptdate/employee-uptdate.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import { CustomerUptdateComponent } from './components/customer/customer-uptdate/customer-uptdate.component';
import { TitleUptdateComponent } from './components/title/title-uptdate/title-uptdate.component';
import { TitleAddComponent } from './components/title/title-add/title-add.component';
import { TitleListComponent } from './components/title/title-list/title-list.component';
import { DepartmanListComponent } from './components/departman/departman-list/departman-list.component';
import { DepartmanAddComponent } from './components/departman/departman-add/departman-add.component';
import { DepartmanUptdateComponent } from './components/departman/departman-uptdate/departman-uptdate.component';
import { CustomerEmployeeListComponent } from './components/customer-employee/customer-employee-list/customer-employee-list.component';
import { CustomerEmployeeAddComponent } from './components/customer-employee/customer-employee-add/customer-employee-add.component';
import { CustomerEmployeeUptdateComponent } from './components/customer-employee/customer-employee-uptdate/customer-employee-uptdate.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { ProjectUptdateComponent } from './components/project/project-uptdate/project-uptdate.component';
import { ProcessListComponent } from './components/process/process-list/process-list.component';
import { ProcessUptdateComponent } from './components/process/process-uptdate/process-uptdate.component';
import { ProcessAddComponent } from './components/process/process-add/process-add.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { ContentListComponent } from './components/content/content-list/content-list.component';
import { AuthGuard } from './security/aut-guard';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,canActivate:[AuthGuard],
    children:[
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'accordions', component: AccordionsComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'progressbar', component: ProgressbarComponent },
      { path: 'breadcrumbs', component: BreadcrumbsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'dropdowns', component: DropdownComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'user/add', component: UserAddComponent },
      { path: 'uptdate/:id', component: UserUptComponent },
    
      { path: 'employee', component: EmployeeListComponent },
      { path: 'employee/add', component: EmployeeAddComponent },
      { path: 'employee/uptdate', component: EmployeeUptdateComponent },
      { path: 'employee/detail', component: EmployeeDetailComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'customer/add', component: CustomerAddComponent },
      { path: 'customer/uptdate', component: CustomerUptdateComponent },
      { path: 'customer/detail', component: CustomerDetailComponent },
      { path: 'title/uptdate', component: TitleUptdateComponent },
      { path: 'title/add', component: TitleAddComponent },
      { path: 'title', component: TitleListComponent },
      { path: 'departmant', component: DepartmanListComponent },
      { path: 'departmant/add', component: DepartmanAddComponent },
      { path: 'departmant/uptdate', component: DepartmanUptdateComponent },
      { path: 'customer-employee', component: CustomerEmployeeListComponent },
      { path: 'customer-employee/add', component: CustomerEmployeeAddComponent },
      { path: 'customer-employee/uptdate', component: CustomerEmployeeUptdateComponent },
      { path: 'project', component: ProjectListComponent },
      { path: 'project/add', component: ProjectAddComponent },
      { path: 'project/uptdate', component: ProjectUptdateComponent },
      { path: 'project/detail', component: ProjectDetailComponent },
      { path: 'process', component: ProcessListComponent },
      { path: 'process/uptdate', component: ProcessUptdateComponent },
      { path: 'process/add', component: ProcessAddComponent },    
      { path: 'content', component: ContentListComponent },    
    ],
   
  },
  {
  path:'login',component:LoginComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
